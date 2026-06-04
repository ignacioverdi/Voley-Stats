#!/usr/bin/env python3
# CASLA VOLEY — generar_datos_historial.py v2
# Lee archivos .dvw y genera datos_historial.js con:
# - Stats por partido/entrenamiento
# - Stats por set
# - Stats por momento del set (0-8, 9-16, 17+)
# - Dirección de ataques y saques (heatmap)
# - dv4 combos detallados
#
# CÓMO USAR:
# 1. Exportar desde DataVolley como .dvw
# 2. Copiar a carpeta DVW/ (partidos) o DVW_ENT/ (entrenamientos)
# 3. Correr: python generar_datos_historial.py
# 4. Subir datos_historial.js a GitHub

import os, sys, json, re
from datetime import datetime
from collections import defaultdict

BASE    = os.path.dirname(os.path.abspath(__file__))
DVW_DIR = os.path.join(BASE, 'DVW')
DVW_ENT = os.path.join(BASE, 'DVW_ENT')
OUT     = os.path.join(BASE, 'datos_historial.js')

print('=' * 55)
print('CASLA VOLEY — Generar datos_historial.js v2')
print('=' * 55)

# ── DVW PARSER ───────────────────────────────────────────────────────
def parse_dvw(filepath, tipo='P'):
    """
    Parse .dvw file completo.
    Retorna match_data con:
    - stats por jugador (acum)
    - stats por set
    - stats por momento (early/mid/late)
    - heatmaps de dirección
    - dv4 combos
    """
    with open(filepath, encoding='utf-8', errors='ignore') as f:
        content = f.read()

    lines = content.split('\n')

    # ── INFO BÁSICA ───────────────────────────────────────────────────
    match_info = {
        'fecha': '', 'rival': '', 'tipo': tipo,
        'resultado': {}, 'torneo': '',
        'equipo_local': '', 'equipo_visitante': '',
        'casla_team': 'a',  # 'a' or 'b' — se detecta por el plantel
    }

    # Leer cabecera del DVW
    for line in lines[:200]:
        line = line.strip()
        if line.startswith('[3MATCH]'):
            parts = line.split(';')
            # Formato: [3MATCH]fecha;num_sets;...
            fecha_raw = parts[0].replace('[3MATCH]','').strip()
            if fecha_raw:
                # Try to parse YYYY-MM-DD or DD/MM/YYYY
                try:
                    from datetime import datetime as dt
                    for fmt in ['%Y-%m-%d','%d/%m/%Y','%m/%d/%Y']:
                        try:
                            d = dt.strptime(fecha_raw, fmt)
                            match_info['fecha'] = d.strftime('%d/%m/%Y')
                            break
                        except: pass
                except: pass
                if not match_info['fecha']:
                    match_info['fecha'] = fecha_raw

        elif line.startswith('[3TEAMS]'):
            parts = line.split(';')
            # Format: [3TEAMS]TeamA_name;TeamB_name
            if len(parts) >= 2:
                match_info['equipo_local']    = parts[0].replace('[3TEAMS]','').strip()
                match_info['equipo_visitante']= parts[1].strip() if len(parts)>1 else ''

        elif line.startswith('[3SET]'):
            parts = line.split(';')
            # [3SET]set_num;score_a;score_b;duration;...
            # Just collect for resultado

    # Detect CASLA team by looking for known player numbers
    CASLA_NUMS = {2,3,4,5,6,9,10,11,12,13,14,15,17,18,19}

    # ── ROSTER ────────────────────────────────────────────────────────
    # Read player numbers per team from [3P] lines
    players_a = {}  # num -> name
    players_b = {}

    for line in lines:
        line = line.strip()
        if line.startswith('[3P]'):
            # [3P]team(a/b);shirt_num;name;...
            parts = line.split(';')
            try:
                team = parts[0].replace('[3P]','').strip().lower()
                num  = int(parts[1].strip())
                name = parts[2].strip() if len(parts)>2 else str(num)
                if team == 'a':
                    players_a[num] = name
                else:
                    players_b[num] = name
            except: pass

    # Detect which team is CASLA
    overlap_a = len(CASLA_NUMS & set(players_a.keys()))
    overlap_b = len(CASLA_NUMS & set(players_b.keys()))
    casla_team  = 'a' if overlap_a >= overlap_b else 'b'
    rival_team  = 'b' if casla_team == 'a' else 'a'
    players_casla = players_a if casla_team == 'a' else players_b

    # Rival name
    rival_name = match_info['equipo_visitante'] if casla_team == 'a' else match_info['equipo_local']
    if not rival_name:
        rival_name = os.path.basename(filepath).replace('.dvw','').replace('_',' ').upper()
    match_info['rival'] = rival_name

    # ── PARSE ACTIONS ─────────────────────────────────────────────────
    # Action line format: *team;set;player_num;action_code;start_zone;end_zone;...
    # action_code: S=Serve, R=Reception, A=Attack, B=Block, D=Dig, E=Set
    # result codes: # = point/perfect, + = positive, ! = overpass/negative, - = negative, = = error, / = blocked

    # Per-player accumulators
    def new_player_stats(num, name):
        return {
            'c': num, 'n': name,
            # Serve
            'sT':0,'sPunto':0,'sPos':0,'sAdm':0,'sNeg':0,'sVend':0,'sErr':0,'sEff':None,
            'sOrig':{},'sDest':{},
            # Reception
            'rT':0,'rPunto':0,'rPos':0,'rAdm':0,'rNeg':0,'rVend':0,'rErr':0,'rEff':None,
            'rOrig':{},'rDest':{},
            # Attack
            'aT':0,'aPunto':0,'aPos':0,'aAdm':0,'aNeg':0,'aVend':0,'aErr':0,'aEff':None,
            'aOrig':{},'aDest':{},
            'aTCQ':0,  # attacks after perfect reception
            # Block
            'bT':0,'bPt':0,'bPtPos':0,'bEff':None,
            # DV4 combos
            'dv4':{},
            # Per-set stats
            'sets':{},
            # Per-moment (early=0-8, mid=9-16, late=17+)
            'moments':{'early':{},'mid':{},'late':{}},
        }

    player_stats = {}

    # Score tracking
    score = {'a': 0, 'b': 0}
    current_set = 1
    set_scores = {}  # set_num -> {'a': score_a, 'b': score_b} at end

    def get_moment(casla_s, rival_s):
        """Get moment of set based on max score"""
        pt = max(casla_s, rival_s)
        if pt <= 8:   return 'early'
        elif pt <= 16: return 'mid'
        else:          return 'late'

    def init_set_stats():
        return {
            'sT':0,'sPunto':0,'sErr':0,'sEff':None,
            'rT':0,'rPunto':0,'rErr':0,'rEff':None,
            'aT':0,'aPunto':0,'aErr':0,'aEff':None,
            'bT':0,'bPt':0,
        }

    def init_moment_stats():
        return {
            'sT':0,'sPunto':0,'sErr':0,
            'rT':0,'rPunto':0,'rErr':0,
            'aT':0,'aPunto':0,'aErr':0,
        }

    resultado_sets = []

    for line in lines:
        line = line.strip()
        if not line.startswith('*'):
            # Check for set separator
            if line.startswith('[3set]') or (line.startswith('[3SET]') and 'score' in line.lower()):
                pass
            continue

        parts = line.split(';')
        if len(parts) < 4: continue

        try:
            action_team = parts[0].replace('*','').strip().lower()
            set_num     = int(parts[1]) if parts[1].strip().isdigit() else current_set
            player_num  = int(parts[2]) if parts[2].strip().isdigit() else 0
            code        = parts[3].strip() if len(parts) > 3 else ''
            start_zone  = parts[4].strip() if len(parts) > 4 else ''
            end_zone    = parts[5].strip() if len(parts) > 5 else ''
        except:
            continue

        if not code or len(code) < 2: continue

        skill  = code[0].upper()
        result = code[1] if len(code) > 1 else ''

        # Only track CASLA players
        if action_team != casla_team: continue
        if player_num == 0: continue

        # Init player if needed
        if player_num not in player_stats:
            name = players_casla.get(player_num, str(player_num))
            player_stats[player_num] = new_player_stats(player_num, name)

        ps = player_stats[player_num]

        # Init set stats
        set_key = f's{set_num}'
        if set_key not in ps['sets']:
            ps['sets'][set_key] = init_set_stats()

        # Get current moment
        if casla_team == 'a':
            moment = get_moment(score['a'], score['b'])
        else:
            moment = get_moment(score['b'], score['a'])

        if moment not in ps['moments']:
            ps['moments'][moment] = init_moment_stats()

        ss  = ps['sets'][set_key]
        mm  = ps['moments'][moment]

        # ── SERVE ──────────────────────────────────────────────────────
        if skill == 'S':
            ps['sT'] += 1; ss['sT'] += 1; mm['sT'] += 1
            # Track origin and destination zones
            if start_zone: ps['sOrig'][start_zone] = ps['sOrig'].get(start_zone, 0) + 1
            if end_zone:   ps['sDest'][end_zone]   = ps['sDest'].get(end_zone, 0) + 1

            if result == '#':
                ps['sPunto'] += 1; ss['sPunto'] += 1; mm['sPunto'] += 1
                score[casla_team] = score.get(casla_team, 0) + 1
            elif result == '+': ps['sPos']  += 1
            elif result == '!': ps['sAdm']  += 1
            elif result == '-': ps['sNeg']  += 1
            elif result == '/': ps['sVend'] += 1
            elif result == '=':
                ps['sErr'] += 1; ss['sErr'] += 1; mm['sErr'] += 1
                score[rival_team] = score.get(rival_team, 0) + 1

        # ── RECEPTION ──────────────────────────────────────────────────
        elif skill == 'R':
            ps['rT'] += 1; ss['rT'] += 1; mm['rT'] += 1
            if start_zone: ps['rOrig'][start_zone] = ps['rOrig'].get(start_zone, 0) + 1
            if end_zone:   ps['rDest'][end_zone]   = ps['rDest'].get(end_zone, 0) + 1

            if result == '#':
                ps['rPunto'] += 1; ss['rPunto'] += 1; mm['rPunto'] += 1
            elif result == '+': ps['rPos'] += 1
            elif result == '!': ps['rAdm'] += 1
            elif result == '-': ps['rVend'] += 1
            elif result == '=':
                ps['rErr'] += 1; ss['rErr'] += 1; mm['rErr'] += 1
                score[rival_team] = score.get(rival_team, 0) + 1

        # ── ATTACK ─────────────────────────────────────────────────────
        elif skill == 'A':
            ps['aT'] += 1; ss['aT'] += 1; mm['aT'] += 1
            if start_zone: ps['aOrig'][start_zone] = ps['aOrig'].get(start_zone, 0) + 1
            if end_zone:   ps['aDest'][end_zone]   = ps['aDest'].get(end_zone, 0) + 1

            # DV4 combo (attack type from code)
            atk_type = code[2:4] if len(code) >= 4 else ''
            if atk_type:
                if atk_type not in ps['dv4']:
                    ps['dv4'][atk_type] = {'tot':0,'pt':0,'err':0,'orig':'','dest':''}
                ps['dv4'][atk_type]['tot'] += 1
                if start_zone: ps['dv4'][atk_type]['orig'] = start_zone
                if end_zone:   ps['dv4'][atk_type]['dest'] = end_zone

            if result == '#':
                ps['aPunto'] += 1; ss['aPunto'] += 1; mm['aPunto'] += 1
                if atk_type: ps['dv4'][atk_type]['pt'] += 1
                score[casla_team] = score.get(casla_team, 0) + 1
            elif result == '+': ps['aPos'] += 1
            elif result == '!': ps['aAdm'] += 1
            elif result == '-': ps['aNeg'] += 1
            elif result == '/':
                ps['aVend'] += 1
                if atk_type: ps['dv4'][atk_type]['err'] += 1
            elif result == '=':
                ps['aErr'] += 1; ss['aErr'] += 1; mm['aErr'] += 1
                if atk_type: ps['dv4'][atk_type]['err'] += 1
                score[rival_team] = score.get(rival_team, 0) + 1

        # ── BLOCK ──────────────────────────────────────────────────────
        elif skill == 'B':
            ps['bT'] += 1; ss['bT'] += 1
            if result == '#':
                ps['bPt'] += 1; ss['bPt'] += 1
                score[casla_team] = score.get(casla_team, 0) + 1
            elif result == '+':
                ps['bPtPos'] += 1

        # Track set changes (when a team reaches 25/15)
        if set_num != current_set:
            # Save set score
            set_scores[current_set] = {
                'casla': score[casla_team],
                'rival': score[rival_team]
            }
            resultado_sets.append(f"{score[casla_team]}-{score[rival_team]}")
            score = {'a': 0, 'b': 0}
            current_set = set_num

    # ── CALCULATE EFFICIENCIES ────────────────────────────────────────
    for ps in player_stats.values():
        if ps['sT'] > 0:
            ps['sEff'] = round((ps['sPunto'] + 0.5*ps['sVend'] + 0.25*ps['sPos'] - ps['sErr']) / ps['sT'] * 100)
        if ps['rT'] > 0:
            ps['rEff'] = round((ps['rPunto'] + 0.5*ps['rPos'] - 0.5*ps['rVend'] - ps['rErr']) / ps['rT'] * 100)
        if ps['aT'] > 0:
            ps['aEff'] = round((ps['aPunto'] - ps['aVend'] - ps['aErr']) / ps['aT'] * 100)
        if ps['bT'] > 0:
            ps['bEff'] = round((ps['bPt'] + ps['bPtPos']) / ps['bT'] * 100)

        # Per-set efficiencies
        for sk, ss in ps['sets'].items():
            if ss['sT'] > 0:
                ss['sEff'] = round((ss['sPunto'] - ss['sErr']) / ss['sT'] * 100)
            if ss['rT'] > 0:
                ss['rEff'] = round((ss['rPunto'] - ss['rErr']) / ss['rT'] * 100)
            if ss['aT'] > 0:
                ss['aEff'] = round((ss['aPunto'] - ss['aErr']) / ss['aT'] * 100)

        # Convert zone dicts to sorted lists for JSON
        for zone_key in ['sOrig','sDest','rOrig','rDest','aOrig','aDest']:
            d = ps[zone_key]
            ps[zone_key] = sorted(d.items(), key=lambda x: -x[1])[:6]

    # ── RESULTADO ─────────────────────────────────────────────────────
    # Count wins per team from resultado_sets
    casla_sets = sum(1 for s in resultado_sets if s and int(s.split('-')[0]) > int(s.split('-')[1]))
    rival_sets = len(resultado_sets) - casla_sets

    match_info['resultado'] = {
        'casla': casla_sets,
        'rival': rival_sets,
        'sets':  resultado_sets,
    }

    # Final jugadores list
    jugadores = [ps for ps in player_stats.values()
                 if any([ps['aT'], ps['sT'], ps['rT'], ps['bT']])]

    match_info['jugadores'] = jugadores
    return match_info


# ── MAIN ─────────────────────────────────────────────────────────────
# Create dirs if needed
for d in [DVW_DIR, DVW_ENT]:
    if not os.path.exists(d):
        os.makedirs(d)
        print(f"Carpeta creada: {d}")

dvw_files_p = [(f, 'P') for f in os.listdir(DVW_DIR) if f.lower().endswith('.dvw')]
dvw_files_e = [(f, 'E') for f in os.listdir(DVW_ENT) if f.lower().endswith('.dvw')]
all_dvw = dvw_files_p + dvw_files_e

if not all_dvw:
    print("No hay archivos .dvw")
    print(f"  Partidos: carpeta {DVW_DIR}")
    print(f"  Entrenamientos: carpeta {DVW_ENT}")
    sys.exit(0)

print(f"Archivos: {len(dvw_files_p)} partidos, {len(dvw_files_e)} entrenamientos")

# Load existing
existing = []
if os.path.exists(OUT):
    with open(OUT, encoding='utf-8') as f:
        raw = f.read()
    idx = raw.find('window.HISTORIAL_DATA = ')
    if idx > 0:
        depth=0; i=idx+24
        while i < len(raw):
            if raw[i]=='{': depth+=1
            elif raw[i]=='}':
                depth-=1
                if depth==0: end=i+1; break
            i+=1
        try:
            existing = json.loads(raw[idx+24:end]).get('entrenamientos', [])
            print(f"Historial existente: {len(existing)} sesiones")
        except:
            print("Historial existente no parseado — empezando de cero")

# Process
nuevos = 0
for dvw_file, tipo in sorted(all_dvw):
    folder = DVW_DIR if tipo == 'P' else DVW_ENT
    filepath = os.path.join(folder, dvw_file)
    print(f"\nProcesando [{tipo}]: {dvw_file}")

    match = parse_dvw(filepath, tipo)
    rival = match.get('rival', dvw_file.replace('.dvw',''))

    # Check duplicate
    already = any(e.get('rival','') == rival and e.get('tipo','') == tipo
                  for e in existing)
    if already:
        print(f"  → Ya existe, saltando")
        continue

    match['rival'] = rival
    existing.append(match)
    nuevos += 1
    sets_str = ' | '.join(match['resultado'].get('sets',[]))
    print(f"  ✓ {rival}: {len(match['jugadores'])} jugadores | {sets_str}")

# Save
hist_data = {'entrenamientos': existing}
ts = datetime.now().strftime('%Y-%m-%d %H:%M')
js  = f'// datos_historial.js — {ts}\n'
js += f'// {len(existing)} sesiones totales\n'
js += f'window.HISTORIAL_DATA = {json.dumps(hist_data, ensure_ascii=False, indent=2)};\n'

with open(OUT, 'w', encoding='utf-8') as f:
    f.write(js)

print(f'\n✓ datos_historial.js generado ({len(js)//1024}KB)')
print(f'  {nuevos} nuevas sesiones | {len(existing)} total')
print('\nSubir datos_historial.js a GitHub.')
