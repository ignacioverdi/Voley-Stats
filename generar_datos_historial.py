#!/usr/bin/env python3
# CASLA VOLEY — generar_datos_historial.py
# Lee los archivos .dvw de la carpeta DVW/ y genera datos_historial.js
# 
# CÓMO USAR:
# 1. Exportar el partido desde DataVolley como archivo .dvw
# 2. Guardarlo en la carpeta DVW/ (crear si no existe)
# 3. Correr: python generar_datos_historial.py
# 4. Subir datos_historial.js a GitHub

import os, sys, json, re
from datetime import datetime

BASE  = os.path.dirname(os.path.abspath(__file__))
DVW_DIR = os.path.join(BASE, "DVW")
OUT   = os.path.join(BASE, "datos_historial.js")
PLANTEL_FILE = os.path.join(BASE, "CASL_GamePlan_4.xlsm")

print("=" * 50)
print("CASLA VOLEY — Generar datos_historial.js")
print("=" * 50)

if not os.path.exists(DVW_DIR):
    os.makedirs(DVW_DIR)
    print(f"Carpeta DVW/ creada en: {DVW_DIR}")
    print("Copiá los archivos .dvw ahí y volvé a correr.")
    sys.exit(0)

dvw_files = [f for f in os.listdir(DVW_DIR) if f.lower().endswith('.dvw')]
if not dvw_files:
    print(f"No hay archivos .dvw en {DVW_DIR}")
    print("Exportá el partido desde DataVolley y copiá el .dvw a esa carpeta.")
    sys.exit(1)

print(f"Archivos DVW encontrados: {len(dvw_files)}")

def parse_dvw(filepath):
    """Parse a .dvw file and extract match data"""
    with open(filepath, encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    lines = content.split('\n')
    match_data = {
        'fecha': '',
        'rival': '',
        'tipo': 'P',
        'resultado': {},
        'jugadores': [],
    }
    
    # Extract match info
    for line in lines[:50]:
        if line.startswith('[3MATCH]'):
            parts = line.split(';')
            if len(parts) > 2:
                match_data['fecha'] = parts[0].replace('[3MATCH]','').strip()
        if line.startswith('[3SET]'):
            parts = line.split(';')
            match_data['rival'] = parts[1].strip() if len(parts) > 1 else 'Rival'
    
    # Extract player stats from attack/serve/receive codes
    player_stats = {}
    
    for line in lines:
        if not line.startswith('*'):
            continue
        # Parse action code: *TeamSet#Player|Code|...
        try:
            parts = line.split(';')
            if len(parts) < 5: continue
            
            player_num = int(parts[1]) if parts[1].strip().isdigit() else 0
            if player_num == 0: continue
            
            code = parts[3].strip() if len(parts) > 3 else ''
            skill = code[0] if code else ''
            result = code[2] if len(code) > 2 else ''
            
            if player_num not in player_stats:
                player_stats[player_num] = {
                    'c': player_num, 'n': '',
                    'aT':0,'aPunto':0,'aVend':0,'aErr':0,'aEff':None,
                    'sT':0,'sPunto':0,'sVend':0,'sPos':0,'sErr':0,'sEff':None,
                    'rT':0,'rPunto':0,'rPos':0,'rVend':0,'rErr':0,'rEff':None,
                    'bT':0,'bPt':0,'bPtPos':0,
                    'dv4':{}
                }
            
            ps = player_stats[player_num]
            
            if skill == 'A':  # Attack
                ps['aT'] += 1
                if result == '#': ps['aPunto'] += 1
                elif result == '/': ps['aVend'] += 1
                elif result == '=': ps['aErr'] += 1
            elif skill == 'S':  # Serve
                ps['sT'] += 1
                if result == '#': ps['sPunto'] += 1
                elif result == '+': ps['sPos'] += 1
                elif result == '/': ps['sVend'] += 1
                elif result == '=': ps['sErr'] += 1
            elif skill == 'R':  # Reception
                ps['rT'] += 1
                if result == '#': ps['rPunto'] += 1
                elif result == '+': ps['rPos'] += 1
                elif result == '-': ps['rVend'] += 1
                elif result == '=': ps['rErr'] += 1
            elif skill == 'B':  # Block
                ps['bT'] += 1
                if result == '#': ps['bPt'] += 1
                elif result == '+': ps['bPtPos'] += 1
        except:
            continue
    
    # Calculate efficiencies
    for ps in player_stats.values():
        if ps['aT'] > 0:
            ps['aEff'] = round((ps['aPunto'] - ps['aVend'] - ps['aErr']) / ps['aT'] * 100)
        if ps['sT'] > 0:
            ps['sEff'] = round((ps['sPunto'] + 0.5*ps['sVend'] + 0.25*ps['sPos'] - ps['sErr']) / ps['sT'] * 100)
        if ps['rT'] > 0:
            ps['rEff'] = round((ps['rPunto'] + 0.5*ps['rPos'] - 0.5*ps['rVend'] - ps['rErr']) / ps['rT'] * 100)
        
        # Add to match data
        if any([ps['aT'], ps['sT'], ps['rT'], ps['bT']]):
            match_data['jugadores'].append(ps)
    
    return match_data

# Check if existing historial exists
existing = []
if os.path.exists(OUT):
    with open(OUT, encoding='utf-8') as f:
        existing_raw = f.read()
    idx = existing_raw.find('window.HISTORIAL_DATA = ')
    if idx > 0:
        depth=0; i=idx+24
        while i < len(existing_raw):
            if existing_raw[i]=='{': depth+=1
            elif existing_raw[i]=='}':
                depth-=1
                if depth==0: end=i+1; break
            i+=1
        try:
            existing_hist = json.loads(existing_raw[idx+24:end])
            existing = existing_hist.get('entrenamientos', [])
            print(f"Historial existente: {len(existing)} sesiones")
        except:
            print("  Historial existente no pudo parsearse, empezando de cero")

# Process DVW files
nuevos = 0
for dvw_file in sorted(dvw_files):
    filepath = os.path.join(DVW_DIR, dvw_file)
    print(f"\nProcesando: {dvw_file}")
    
    match = parse_dvw(filepath)
    
    # Check if already in historial
    rival = match.get('rival', dvw_file.replace('.dvw',''))
    already = any(e.get('rival','') == rival for e in existing if e.get('tipo')=='P')
    if already:
        print(f"  → Ya existe en historial, saltando")
        continue
    
    match['rival'] = rival
    existing.append(match)
    nuevos += 1
    print(f"  ✓ {rival}: {len(match['jugadores'])} jugadores")

# Save
hist_data = {'entrenamientos': existing}
ts = datetime.now().strftime('%Y-%m-%d %H:%M')
js = f"// datos_historial.js — {ts}\n"
js += f"// {len(existing)} sesiones totales\n"
js += f"window.HISTORIAL_DATA = {json.dumps(hist_data, ensure_ascii=False, indent=2)};\n"

with open(OUT, 'w', encoding='utf-8') as f:
    f.write(js)

print(f"\n✓ datos_historial.js generado ({len(js)//1024}KB)")
print(f"  {nuevos} nuevas sesiones agregadas")
print(f"  {len(existing)} sesiones totales")
print("\nSubir datos_historial.js a GitHub.")
