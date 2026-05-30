#!/usr/bin/env python3
# CASLA VOLEY — generar_datos_partidos.py
# Lee CASL_Partidos.xlsx y genera datos_partidos.js
# Uso: python generar_datos_partidos.py

import os, json, re
from datetime import datetime
try:
    from openpyxl import load_workbook
except ImportError:
    print("ERROR: pip install openpyxl"); exit(1)

BASE  = os.path.dirname(os.path.abspath(__file__))
EXCEL = os.path.join(BASE, "CASL_Partidos.xlsx")
OUT   = os.path.join(BASE, "datos_partidos.js")

# Solapas a ignorar
SKIP  = {'INDICE', 'GUIA', 'INSTRUCCIONES'}

# ── Helpers ──────────────────────────────────────────────────────────
def si(v):
    if v is None or str(v).strip() in ('','----'): return 0
    try: return int(round(float(v)))
    except: return 0

def se(v):
    if v is None or str(v).strip() in ('','----'): return 0
    try: return int(round(float(v)*100))
    except: return 0

def cn(v):
    if not v: return ''
    s = re.sub(r'\s+',' ', str(v).replace('\xa0',' ')).strip()
    parts = s.split()
    i = 0
    while i < len(parts) and parts[i].isdigit(): i += 1
    return ' '.join(parts[i:]).strip()

def gn(v):
    if not v: return 0
    parts = re.sub(r'\s+',' ', str(v).replace('\xa0',' ')).strip().split()
    return int(parts[0]) if parts and parts[0].isdigit() else 0

def pct(a, b): return round(a*100/b) if b > 0 else 0

def se_pct(v):
    if v is None or str(v).strip() in ('','----'): return 0
    try: return int(round(float(v)*100))
    except: return 0

ORIG = {'X5':4,'V5':4,'X6':2,'V6':2,'X8':9,'V8':9,
        'X1':3,'X7':3,'XM':3,'X2':3,'XP':8,'VP':8,'X4':4}

POS_COLOR = {'CENTRAL':'#f97316','OPUESTO':'#818cf8','PUNTA':'#22c55e',
             'ARMADOR':'#f59e0b','LIBERO':'#06b6d4'}

# Plantel CASLA
CASLA_PLANTEL = {}  # se llena desde CASLA_PLANTEL sheet si existe

# ── Leer índice de partidos ───────────────────────────────────────────
def leer_indice(wb):
    partidos_meta = {}
    if 'INDICE' not in wb.sheetnames:
        return partidos_meta
    ws = wb['INDICE']
    for row in ws.iter_rows(min_row=4, max_row=50, values_only=True):
        if not row[7]: continue  # col H = nombre solapa
        solapa = str(row[7]).strip()
        partidos_meta[solapa] = {
            'fecha':     str(row[1]).strip() if row[1] else '',
            'rival':     str(row[2]).strip() if row[2] else solapa,
            'torneo':    str(row[3]).strip() if row[3] else '',
            'resultado': str(row[6]).strip() if row[6] else '',
            'sets_casla':str(row[4]).strip() if row[4] else '',
            'sets_rival': str(row[5]).strip() if row[5] else '',
        }
    return partidos_meta

# ── Leer plantel desde hoja CASLA_PLANTEL ────────────────────────────
def leer_plantel(wb):
    plantel = {}
    sheets_to_try = ['CASLA_PLANTEL', 'PLANTEL']
    for sheet_name in sheets_to_try:
        if sheet_name in wb.sheetnames:
            ws = wb[sheet_name]
            for row in ws.iter_rows(min_row=1, max_row=30, values_only=True):
                if row[1] and row[2]:
                    nm = str(row[1]).strip().upper()
                    pos = str(row[2]).strip().upper()
                    if nm and pos:
                        plantel[nm] = pos
            print(f"  Plantel: {len(plantel)} jugadores desde {sheet_name}")
            return plantel
    return plantel

def get_pos(nm, plantel):
    nm_up = nm.upper()
    # Exact match
    if nm_up in plantel: return plantel[nm_up]
    # Partial match
    for k, v in plantel.items():
        if k in nm_up or nm_up.split()[0] in k:
            return v
    return ''

# ── Parser de ataques (mismo que actualizar_gameplan.py) ─────────────
def parse_ataques(ws, rows):
    attack = {}

    def parse_block(rows_slice, col_start):
        cur = None
        for ri, row in enumerate(rows_slice):
            if len(row) <= col_start: continue
            nc = row[col_start]
            bc = row[col_start+1] if col_start+1 < len(row) else None
            tc = row[col_start+11] if col_start+11 < len(row) else None
            if nc and gn(nc) > 0:
                cur = cn(nc); num = gn(nc)
                if cur not in attack:
                    attack[cur] = {'num':num, 'combos':{}}
                continue
            if cur and bc and str(bc).strip() not in ('','ZONA','TOTALES','COMBO',''):
                cod = str(bc).strip()
                tot = si(tc)
                zones = {}
                for di, zn in enumerate([1,9,2,6,8,5,7,4]):
                    ci = col_start+2+di
                    zones[zn] = si(row[ci] if ci < len(row) else None)
                if cod and (tot > 0 or any(v > 0 for v in zones.values())):
                    attack[cur]['combos'][cod] = {
                        'total': tot or sum(zones.values()),
                        'zones': zones
                    }

    # Opuestos: rows 0-6, cols 0 y 12
    parse_block(rows[0:7],  0)
    parse_block(rows[0:7],  12)
    # Centrales: rows 0-6, cols 24, 36, 48
    parse_block(rows[0:7],  24)
    parse_block(rows[0:7],  36)
    parse_block(rows[0:7],  48)
    # Puntas: rows 8-14, cols 0, 12, 24, 36, 48
    parse_block(rows[8:15], 0)
    parse_block(rows[8:15], 12)
    parse_block(rows[8:15], 24)
    parse_block(rows[8:15], 36)
    parse_block(rows[8:15], 48)

    return attack

# ── Parser de saques ─────────────────────────────────────────────────
def parse_saques(ws, saq_rows):
    serve = {}

    def parse_group(rows_slice, row_offset):
        for block in range(15):
            col = block * 10
            if col >= len(rows_slice[0]): break
            nm_cell = rows_slice[row_offset][col] if col < len(rows_slice[row_offset]) else None
            if not nm_cell or not gn(nm_cell): continue
            nm = cn(nm_cell)
            if nm not in serve: serve[nm] = {'num':gn(nm_cell),'sm':{},'sq':{}}
            for ti, tipo in enumerate(['sm','sq']):
                dest = {}
                row = rows_slice[row_offset + ti]
                orig = si(row[col+2] if col+2 < len(row) else None) or 6
                for di, dz in enumerate([1,9,6,8,5,7]):
                    ci = col+3+di
                    val = si(row[ci] if ci < len(row) else None)
                    if val > 0: dest[dz] = val
                serve[nm][tipo] = {'orig': orig, 'dest': dest}

    parse_group(saq_rows, 0)
    parse_group(saq_rows, 2)

    return serve

# ── Parser de recepción ───────────────────────────────────────────────
def parse_recepcion(ws, rec_rows):
    recepcion = {}
    if len(rec_rows) < 2: return recepcion

    # Header row (row 1 = index 1)
    rec_header = rec_rows[1] if len(rec_rows) > 1 else rec_rows[0]
    rec_cols = []
    for ci, v in enumerate(rec_header):
        if v and isinstance(v, str) and any(c.isdigit() for c in str(v)[:3]):
            rec_cols.append((ci, cn(v), gn(v)))

    def get_rec_row(row_idx, col_start):
        if row_idx >= len(rec_rows): return {'tot':0,'eff':0,'pos':0,'neg':0}
        row = rec_rows[row_idx]
        tot      = si(row[col_start+1] if col_start+1 < len(row) else None)
        eff      = se_pct(row[col_start+2] if col_start+2 < len(row) else None)
        cnt_perf = si(row[col_start+3] if col_start+3 < len(row) else None)
        cnt_pos  = si(row[col_start+4] if col_start+4 < len(row) else None)
        cnt_neg  = si(row[col_start+5] if col_start+5 < len(row) else None)
        cnt_err  = si(row[col_start+6] if col_start+6 < len(row) else None)
        return {'tot':tot,'eff':eff,
                'pos':pct(cnt_perf+cnt_pos, tot),
                'neg':pct(cnt_neg+cnt_err,  tot)}

    for col_start, name, num in rec_cols:
        # SM TOTAL = row 0, SQ TOTAL = row 1
        # FLOTADO: rows 3-14 (POS1: row3, subs:4,5,6; POS6: row7...; POS5: row11...)
        # POTENCIA: rows 16-27 (POS1: row16...)
        flotado = {
            'desde_z1': {'total':get_rec_row(3, col_start),'p1':get_rec_row(4,col_start),
                         'p6':get_rec_row(5,col_start),'p5':get_rec_row(6,col_start)},
            'desde_z6': {'total':get_rec_row(7, col_start),'p1':get_rec_row(8,col_start),
                         'p6':get_rec_row(9,col_start),'p5':get_rec_row(10,col_start)},
            'desde_z5': {'total':get_rec_row(11,col_start),'p1':get_rec_row(12,col_start),
                         'p6':get_rec_row(13,col_start),'p5':get_rec_row(14,col_start)},
        }
        potencia = {
            'desde_z1': {'total':get_rec_row(16,col_start),'p1':get_rec_row(17,col_start),
                         'p6':get_rec_row(18,col_start),'p5':get_rec_row(19,col_start)},
            'desde_z6': {'total':get_rec_row(20,col_start),'p1':get_rec_row(21,col_start),
                         'p6':get_rec_row(22,col_start),'p5':get_rec_row(23,col_start)},
            'desde_z5': {'total':get_rec_row(24,col_start),'p1':get_rec_row(25,col_start),
                         'p6':get_rec_row(26,col_start),'p5':get_rec_row(27,col_start)},
        }
        recepcion[name] = {'num':num, 'flotado':flotado, 'potencia':potencia}

    return recepcion

# ── Parser de armadores ───────────────────────────────────────────────
def parse_armadores(ws, arm_rows):
    armadores = {}
    if len(arm_rows) < 2: return armadores

    arm_header = arm_rows[0]
    # Find armador columns by looking for cell with nombre
    arm_cols = []
    for ci, v in enumerate(arm_header):
        if v and isinstance(v, str) and 'ARMADOR' in str(v).upper():
            arm_cols.append(ci)

    pos_labels = ['P1','P6','P5','P4','P3','P2']

    for cs in arm_cols:
        nm_cell = arm_header[cs]
        if not nm_cell: continue
        nm_raw = str(nm_cell).replace('— ARMADOR','').strip()
        nm = cn(nm_raw)
        if not nm: continue

        rots = []
        for ri, pos_lbl in enumerate(pos_labels):
            row = arm_rows[2+ri] if 2+ri < len(arm_rows) else []
            tot = si(row[cs+9] if cs+9 < len(row) else None)
            dZ4 = si(row[cs+1] if cs+1 < len(row) else None)
            dZ3 = si(row[cs+3] if cs+3 < len(row) else None)
            dZ2 = si(row[cs+5] if cs+5 < len(row) else None)
            dZ6 = si(row[cs+7] if cs+7 < len(row) else None)
            # pts y eff
            eff = se_pct(row[cs+10] if cs+10 < len(row) else None)
            pts = si(row[cs+11] if cs+11 < len(row) else None)
            pts_pct = se_pct(row[cs+12] if cs+12 < len(row) else None)
            err_pct = se_pct(row[cs+13] if cs+13 < len(row) else None)
            rots.append({
                'pos': pos_lbl, 'total': tot,
                'dist': [
                    {'zona':4,'tot':dZ4,'pts':0,'pct':pct(dZ4,tot),'pct_p':0},
                    {'zona':3,'tot':dZ3,'pts':0,'pct':pct(dZ3,tot),'pct_p':0},
                    {'zona':2,'tot':dZ2,'pts':0,'pct':pct(dZ2,tot),'pct_p':0},
                    {'zona':6,'tot':dZ6,'pts':0,'pct':pct(dZ6,tot),'pct_p':0},
                ],
                'eff': eff, 'pts': pts, 'pts_pct': pts_pct, 'err_pct': err_pct
            })

        # SO y TR rows 8-9
        so_row = arm_rows[8] if 8 < len(arm_rows) else []
        tr_row = arm_rows[9] if 9 < len(arm_rows) else []
        def pill_sotr(row, label):
            return {'label':label,
                    'eff': se_pct(row[cs+10] if cs+10 < len(row) else None),
                    'tot': si(row[cs+9] if cs+9 < len(row) else None),
                    'pts': si(row[cs+11] if cs+11 < len(row) else None),
                    'pts_pct': se_pct(row[cs+12] if cs+12 < len(row) else None),
                    'err_pct': se_pct(row[cs+13] if cs+13 < len(row) else None)}

        pills = [{'label':r['pos'],'eff':r['eff'],'tot':r['total'],
                  'pts':r['pts'],'pts_pct':r['pts_pct'],'err_pct':r['err_pct']}
                 for r in rots]
        pills.append(pill_sotr(so_row,'SO'))
        pills.append(pill_sotr(tr_row,'TR'))

        armadores[nm] = {'nombre':nm, 'rotaciones':rots, 'pills':pills,
                         'recepcion':[], 'so':{}, 'tr':{}}

    return armadores

# ── Leer una hoja de partido completa ────────────────────────────────
def leer_partido(ws, meta):
    all_rows = list(ws.iter_rows(min_row=1, max_row=200, values_only=True))

    # Find section start rows by scanning for title cells
    atk_row = saq_row = rec_row = arm_row = None
    for i, row in enumerate(all_rows):
        if not row[0]: continue
        val = str(row[0]).upper()
        if 'ATAQUES' in val and atk_row is None: atk_row = i + 1
        elif 'SAQUES' in val and saq_row is None: saq_row = i + 1
        elif 'RECEPCIÓN' in val and rec_row is None: rec_row = i + 1
        elif 'RECEPCION' in val and rec_row is None: rec_row = i + 1
        elif 'ARMADOR' in val and arm_row is None: arm_row = i + 1

    atk_rows = all_rows[atk_row:atk_row+20] if atk_row else []
    saq_rows = all_rows[saq_row:saq_row+6]  if saq_row else []
    rec_rows = all_rows[rec_row:rec_row+35]  if rec_row else []
    arm_rows = all_rows[arm_row:arm_row+15]  if arm_row else []

    attack    = parse_ataques(ws, atk_rows) if atk_rows else {}
    serve     = parse_saques(ws, saq_rows)  if saq_rows else {}
    recepcion = parse_recepcion(ws, rec_rows) if rec_rows else {}
    armadores = parse_armadores(ws, arm_rows) if arm_rows else {}

    return {
        'rival':     meta.get('rival',''),
        'fecha':     meta.get('fecha',''),
        'torneo':    meta.get('torneo',''),
        'resultado': meta.get('resultado',''),
        'sets_casla':meta.get('sets_casla',''),
        'sets_rival':meta.get('sets_rival',''),
        'attack': attack, 'serve': serve,
        'recepcion': recepcion, 'armadores': armadores
    }

# ── Acumular datos de todos los partidos ──────────────────────────────
def acumular(partidos_data, plantel):
    all_names = {}

    for pd in partidos_data:
        for nm, data in pd['attack'].items():
            pos = get_pos(nm, plantel)
            if nm not in all_names:
                all_names[nm] = {'num':data['num'],'pos':pos,'combos':{}}
            for cod, a in data['combos'].items():
                if cod not in all_names[nm]['combos']:
                    all_names[nm]['combos'][cod] = {'total':0,'zones':{}}
                all_names[nm]['combos'][cod]['total'] += a['total']
                for z, v in a['zones'].items():
                    all_names[nm]['combos'][cod]['zones'][z] = \
                        all_names[nm]['combos'][cod]['zones'].get(z, 0) + v

        for nm, data in pd['serve'].items():
            pos = get_pos(nm, plantel)
            if nm not in all_names:
                all_names[nm] = {'num':data.get('num',0),'pos':pos,'combos':{}}
            if '_serve' not in all_names[nm]:
                all_names[nm]['_serve'] = {'sm':{'orig':6,'dest':{}},
                                           'sq':{'orig':6,'dest':{}}}
            for tipo in ['sm','sq']:
                if tipo in data:
                    for dz, v in data[tipo].get('dest',{}).items():
                        cur = all_names[nm]['_serve'][tipo]['dest']
                        cur[dz] = cur.get(dz, 0) + v

    return all_names

# ── Build jugadores array ─────────────────────────────────────────────
def build_jugadores(all_names, all_rec, plantel):
    jugadores = []
    for nm in sorted(all_names, key=lambda n: all_names[n]['num']):
        info = all_names[nm]
        pos  = info['pos'] or get_pos(nm, plantel)
        color = POS_COLOR.get(pos, '#64748b')
        num  = info['num']

        # Ataques
        ataques = []
        for cod, a in info['combos'].items():
            tot  = a['total'] or sum(a['zones'].values())
            zones = a['zones']
            orig = ORIG.get(cod, 3)
            dest_sorted = sorted([(z,v) for z,v in zones.items() if v>0],
                                 key=lambda x:-x[1])
            destinos = [{'z':z,'pct':pct(v,tot)} for z,v in dest_sorted[:4]]
            eff = pct(sum(v for z,v in zones.items() if z in [2,5,7]), tot)
            ataques.append({'cod':cod,'orig':orig,'destinos':destinos,
                            'eff':eff,'tot':tot,'pts':0,'slash':0,'err':0,
                            'video':None,'pts_pct':0})

        # Saques
        saques = []
        srv = info.get('_serve', {})
        for cod, tipo_label in [('SM','FLOTADO'),('SQ','POTENCIA')]:
            key = cod.lower()
            sd  = srv.get(key, {})
            dest_tot = sum(sd.get('dest',{}).values()) or 1
            destinos = [{'z':z,'pct':pct(v,dest_tot)}
                        for z,v in sorted(sd.get('dest',{}).items(),
                                          key=lambda x:-x[1])[:4]]
            saques.append({'cod':cod,'tipo':tipo_label,'orig':sd.get('orig',6),
                           'destinos':destinos,'eff':0,'tot':0,'pts':0,
                           'plus':0,'slash':0,'err':0,'video':None,'pts_pct':0})

        j = {'num':num,'nombre':f"{num} {nm}",'pos':pos,'color':color,
             'info':{},'ataques':ataques,'saques':saques,'video':0,
             'recepcion':all_rec.get(nm,{})}
        jugadores.append(j)

    return jugadores

# ── Main ──────────────────────────────────────────────────────────────
def main():
    print("="*50)
    print("CASLA VOLEY — Generar datos_partidos.js")
    print("="*50)

    if not os.path.exists(EXCEL):
        print(f"ERROR: No se encontró {EXCEL}"); exit(1)

    wb = load_workbook(EXCEL, read_only=True, data_only=True, keep_vba=False)
    print(f"Hojas: {wb.sheetnames}\n")

    # Leer plantel
    plantel = leer_plantel(wb)

    # Leer índice
    meta_partidos = leer_indice(wb)

    # Procesar cada hoja de partido
    partidos_procesados = []
    for sheet_name in wb.sheetnames:
        if sheet_name in SKIP: continue
        ws = wb[sheet_name]
        meta = meta_partidos.get(sheet_name, {
            'rival': sheet_name, 'fecha': '', 'torneo': '',
            'resultado': '', 'sets_casla': '', 'sets_rival': ''
        })
        print(f"Procesando: {sheet_name} ({meta.get('fecha','')} vs {meta.get('rival','')})")
        pd_data = leer_partido(ws, meta)
        partidos_procesados.append({'nombre': sheet_name, **pd_data})

    # Acumular
    all_names = acumular(partidos_procesados, plantel)

    # Acumular recepción
    all_rec = {}
    for pd in partidos_procesados:
        for nm, rec in pd['recepcion'].items():
            if nm not in all_rec:
                all_rec[nm] = {'num':rec['num'],'flotado':{},'potencia':{}}
            # Simple: take first non-empty
            for tipo in ['flotado','potencia']:
                if not all_rec[nm][tipo] and rec.get(tipo):
                    all_rec[nm][tipo] = rec[tipo]

    # Build jugadores
    jugadores = build_jugadores(all_names, all_rec, plantel)

    print(f"\n✓ {len(jugadores)} jugadores procesados:")
    for j in jugadores:
        nm = re.sub(r'^\d+\s*','',j['nombre'])
        print(f"  #{j['num']} {nm} ({j['pos']}) — {len(j['ataques'])} combos ataque, "
              f"{sum(s['tot'] for s in j['saques'])} saques")

    # Build armadores acumulados
    arm_acum = {}
    for pd in partidos_procesados:
        for nm, arm in pd['armadores'].items():
            if nm not in arm_acum:
                arm_acum[nm] = arm

    # Armador data (titular = primero, suplente = segundo)
    arm_names = list(arm_acum.keys())
    arm_titular  = arm_acum[arm_names[0]] if len(arm_names) > 0 else {}
    arm_suplente = arm_acum[arm_names[1]] if len(arm_names) > 1 else {}

    # Partidos individuales (para subfiltro)
    partidos_list = []
    for pd in partidos_procesados:
        jugadores_partido = build_jugadores(
            acumular([pd], plantel),
            {nm: rec for nm, rec in pd['recepcion'].items()},
            plantel
        )
        partidos_list.append({
            'nombre':     pd['nombre'],
            'rival':      pd['rival'],
            'fecha':      pd['fecha'],
            'torneo':     pd['torneo'],
            'resultado':  pd['resultado'],
            'sets_casla': pd['sets_casla'],
            'sets_rival': pd['sets_rival'],
            'jugadores':  jugadores_partido,
        })

    # Generar JS
    generado = datetime.now().strftime('%d/%m/%Y %H:%M')
    js = f"""// datos_partidos.js — generado automáticamente por generar_datos_partidos.py
// {generado} — CASLA VOLEY
// NO EDITAR MANUALMENTE

const PARTIDOS_GENERADO = "{generado}";
const PARTIDOS_TOTAL = {len(partidos_procesados)};

// Metadatos de cada partido
const PARTIDOS_META = {json.dumps([
    {'nombre': p['nombre'], 'rival': p['rival'], 'fecha': p['fecha'],
     'torneo': p['torneo'], 'resultado': p['resultado'],
     'sets_casla': p['sets_casla'], 'sets_rival': p['sets_rival']}
    for p in partidos_procesados
], ensure_ascii=False, indent=2)};

// Datos ACUMULADOS de todos los partidos
const PARTIDOS_JUGADORES = {json.dumps(jugadores, ensure_ascii=False, indent=2)};

// Datos ARMADOR acumulado
const PARTIDOS_ARMADOR = {json.dumps({'titular': arm_titular, 'suplente': arm_suplente}, ensure_ascii=False, indent=2)};

// Datos POR PARTIDO INDIVIDUAL (para subfiltro)
const PARTIDOS_INDIVIDUAL = {json.dumps(partidos_list, ensure_ascii=False, indent=2)};
"""

    with open(OUT, 'w', encoding='utf-8') as f:
        f.write(js)

    print(f"\n✓ datos_partidos.js generado ({len(js)//1024}KB) — subir a GitHub")

if __name__ == '__main__':
    main()
