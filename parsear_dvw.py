#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# ================================================================
# CASLA VOLEY — Parser de archivos DataVolley 4 (.dvw)
# Convierte un .dvw al formato datos_historial.js del sistema
# ================================================================
# USO:
#   py parsear_dvw.py ARCHIVO.dvw [opciones]
#
# OPCIONES:
#   --tipo E   = Entrenamiento (por defecto P = Partido)
#   --rival "CLUB RIVAL"
#   --fecha "24/05/2026"   (si no se pone, toma la del archivo)
#
# EJEMPLOS:
#   py parsear_dvw.py Casla-Velez.dvw
#   py parsear_dvw.py Casla-DBANF.dvw --tipo P --rival "DBANF"
# ================================================================

import sys, os, json, re
from datetime import datetime

# ── Configuración del equipo ──────────────────────────────────
NOMBRES_SISTEMA = {
    '02':'OJUEZ','03':'WINER','04':'VAZQUEZ','05':'RAMOS',
    '06':'VILLARRUEL','09':'GODOY','10':'VIERA','11':'DURDOS',
    '12':'ZANOTTI','13':'ROJAS CARUSO','14':'NIELSON','15':'ROTEZZI',
    '17':'HERBSOMMER','18':'ACOSTA','19':'DIAZ BOLLI','20':'FREDDIE'
}

VAL_MAP = {
    '#':('punto',2),'!':('punto',2),'+':('pos',1),
    '-':('neg',-1),'/':('vend',-2),'=':('err',-2),'p':('adm',0)
}

# ── Leer archivo ──────────────────────────────────────────────
def leer_dvw(ruta):
    for enc in ['utf-8','latin-1','cp1252']:
        try:
            with open(ruta, 'r', encoding=enc, errors='replace') as f:
                return f.read().split('\n')
        except: pass
    raise Exception(f"No se pudo leer {ruta}")

def get_seccion(lines, nombre):
    result = []
    inside = False
    for line in lines:
        if line.strip() == nombre: inside = True; continue
        if inside and line.startswith('[3'): break
        if inside and line.strip(): result.append(line.strip())
    return result

# ── Parsear jugadores CASLA (PLAYERS-H = local) ───────────────
# Nombres de jugadores CASLA para deteccion robusta
NOMBRES_CASLA_APELLIDOS = {
    'OJUEZ','WINER','VAZQUEZ','RAMOS','VILLARRUEL','GODOY','VIERA',
    'DURDOS','ZANOTTI','ROJAS','CARUSO','NIELSON','ROTEZZI',
    'HERBSOMMER','ACOSTA','DIAZ','BOLLI','FREDDIE','ROMEO'
}

def detectar_casla_char(lines):
    def contar(seccion):
        count = 0
        for line in get_seccion(lines, seccion):
            p = line.split(';')
            if len(p) >= 10:
                nombre = p[9].strip().upper().replace('-',' ')
                if any(pal in NOMBRES_CASLA_APELLIDOS for pal in nombre.split()):
                    count += 1
        return count
    en_h = contar('[3PLAYERS-H]')
    en_v = contar('[3PLAYERS-V]')
    casla_char = '*' if en_h > en_v else 'a'
    print(f"  CASLA es: {'LOCAL (*)' if casla_char=='*' else 'VISITANTE (a)'} (H:{en_h} V:{en_v})")
    return casla_char

def get_jugadores(lines):
    casla_char = detectar_casla_char(lines)
    seccion = '[3PLAYERS-H]' if casla_char == '*' else '[3PLAYERS-V]'
    jugs = {}
    for line in get_seccion(lines, seccion):
        p = line.split(';')
        if len(p) >= 10:
            num = p[1].strip().zfill(2)
            nombre = NOMBRES_SISTEMA.get(num, p[9].strip().upper())
            jugs[num] = nombre
    return jugs, casla_char

# ── Parsear combos DV4 ────────────────────────────────────────
def get_combos(lines):
    combos = {}
    for line in get_seccion(lines, '[3ATTACKCOMBINATION]'):
        p = line.split(';')
        if len(p) >= 5:
            combos[p[0].strip()] = p[4].strip()
    return combos

# ── Parsear sets ──────────────────────────────────────────────
def get_sets(lines, casla_char='*'):
    sets = []
    casla = 0; rival = 0
    for line in get_seccion(lines, '[3SET]'):
        p = line.split(';')
        if len(p) >= 5:
            score = p[4].strip().replace(' ','')
            if '-' in score:
                try:
                    h, v = map(int, score.split('-'))
                    # DVW guarda siempre LOCAL-VISITANTE
                    # Si CASLA es visitante (a), invertir
                    if casla_char == 'a':
                        casla_pts, rival_pts = v, h
                    else:
                        casla_pts, rival_pts = h, v
                    sets.append(f"{casla_pts}-{rival_pts}")
                    if casla_pts > rival_pts: casla += 1
                    else: rival += 1
                except: pass
    return sets, casla, rival

# ── Inicializar jugador ───────────────────────────────────────
def init_jug(num, nombre):
    return {
        'c':int(num), 'n':nombre,
        'sT':0,'sEff':0,'sPunto':0,'sPos':0,'sVend':0,'sAdm':0,'sNeg':0,'sErr':0,
        'sOrig':'','sDest':'',
        'rT':0,'rEff':0,'rPunto':0,'rPos':0,'rAdm':0,'rNeg':0,'rVend':0,'rErr':0,
        'aT':0,'aEff':0,'aPunto':0,'aPos':0,'aAdm':0,'aNeg':0,'aVend':0,'aErr':0,'aTCQ':0,'aEffAlta':0,
        'bT':0,'bPt':0,'bPtPos':0,
        'dv4':{},
        '_sdir':{}
    }

# ── Calcular eficiencias ──────────────────────────────────────
def calc_eff(j):
    # SAQUE: (Pt×1 + Vend×0.5 + Pos×0.25 - Err×1) / Total × 100
    if j['sT'] > 0:
        j['sEff'] = round((j['sPunto']*1 + j['sVend']*0.5 + j['sPos']*0.25 - j['sErr']*1) / j['sT'] * 100)
    # RECEPCION: (Perf×1 + Pos×0.5 - Vend×0.5 - Err×1) / Total × 100
    if j['rT'] > 0:
        j['rEff'] = round((j['rPunto']*1 + j['rPos']*0.5 - j['rVend']*0.5 - j['rErr']*1) / j['rT'] * 100)
    # ATAQUE: (Pt - Vend - Err) / Total × 100
    if j['aT'] > 0:
        j['aEff'] = round((j['aPunto'] - j['aVend'] - j['aErr']) / j['aT'] * 100)
    # BLOQUEO: (Pt + Pos) / Total × 100
    if j['bT'] > 0:
        j['bEff'] = round((j['bPt'] + j['bPtPos']) / j['bT'] * 100)
    if j['_sdir']:
        mas = max(j['_sdir'], key=j['_sdir'].get)
        j['sOrig'] = mas.split('-')[0]
        j['sDest'] = mas.split('-')[1]

# ── Parser principal ──────────────────────────────────────────
def parsear_scout(lines, jugadores_casla, casla_char='*'):
    stats = {}
    for num, nom in NOMBRES_SISTEMA.items():
        stats[num] = init_jug(num, nom)
    totales = init_jug('0', 'TOTALES EQUIPO')

    in_scout = False
    for line in lines:
        if '[3SCOUT]' in line: in_scout = True; continue
        if in_scout and line.startswith('[3'): break
        if not in_scout or not line.strip(): continue
        if line[0] != casla_char: continue  # Solo CASLA (home=*)
        if len(line) < 6: continue

        camisa = line[1:3].strip().zfill(2)
        fund_c = line[3]
        tipo_c = line[4] if len(line) > 4 else ''
        val_c  = line[5] if len(line) > 5 else ''

        if fund_c not in 'SRABE': continue
        if camisa not in stats: continue

        j = stats[camisa]
        val_sym, _ = VAL_MAP.get(val_c, ('?', 0))

        # Extraer combo y zonas
        resto = line[6:].split(';')[0]
        combo = ''
        zona_orig = ''
        zona_dest = ''

        if '~' in resto:
            pt = resto.split('~')
            combo = pt[0].strip()
            for z in [p.strip() for p in pt[1:] if p.strip()]:
                if len(z) == 2 and z.isdigit():
                    zona_orig = z[0]
                    zona_dest = z[1]
                    break

        def add(j_dict, fund, val_sym, combo, zona_orig, zona_dest):
            if fund == 'S':
                j_dict['sT'] += 1
                if val_sym == 'punto': j_dict['sPunto'] += 1
                elif val_sym == 'pos':  j_dict['sPos'] += 1
                elif val_sym == 'neg':  j_dict['sNeg'] += 1
                elif val_sym == 'vend': j_dict['sVend'] += 1
                elif val_sym == 'adm':  j_dict['sAdm'] += 1
                elif val_sym == 'err':  j_dict['sErr'] += 1
                if zona_orig and zona_dest:
                    dk = f"{zona_orig}-{zona_dest}"
                    j_dict['_sdir'][dk] = j_dict['_sdir'].get(dk,0) + 1
            elif fund == 'R':
                j_dict['rT'] += 1
                if val_sym == 'punto': j_dict['rPunto'] += 1
                elif val_sym == 'pos':  j_dict['rPos'] += 1
                elif val_sym == 'neg':  j_dict['rNeg'] += 1
                elif val_sym == 'vend': j_dict['rVend'] += 1
                elif val_sym == 'adm':  j_dict['rAdm'] += 1
                elif val_sym == 'err':  j_dict['rErr'] += 1
            elif fund == 'A':
                j_dict['aT'] += 1
                if val_sym == 'punto': j_dict['aPunto'] += 1
                elif val_sym == 'pos':  j_dict['aPos'] += 1
                elif val_sym == 'neg':  j_dict['aNeg'] += 1
                elif val_sym == 'vend': j_dict['aVend'] += 1
                elif val_sym == 'adm':  j_dict['aAdm'] += 1
                elif val_sym == 'err':  j_dict['aErr'] += 1
                if combo:
                    if combo not in j_dict['dv4']:
                        orig_int = int(zona_orig) if zona_orig and zona_orig.isdigit() else 0
                        j_dict['dv4'][combo] = {'tot':0,'pt':0,'err':0,'orig':orig_int,'dest':zona_dest}
                    j_dict['dv4'][combo]['tot'] += 1
                    if val_sym == 'punto': j_dict['dv4'][combo]['pt'] += 1
                    if val_sym == 'err':   j_dict['dv4'][combo]['err'] += 1
            elif fund == 'B':
                j_dict['bT'] += 1
                if val_sym == 'punto': j_dict['bPt'] += 1
                elif val_sym == 'pos':  j_dict['bPtPos'] += 1

        add(j, fund_c, val_sym, combo, zona_orig, zona_dest)
        add(totales, fund_c, val_sym, combo, zona_orig, zona_dest)

    # Calcular eficiencias
    for j in stats.values(): calc_eff(j)
    calc_eff(totales)

    # Limpiar campo interno
    jugadores_out = []
    for num in sorted(stats.keys(), key=lambda x: int(x)):
        j = stats[num]
        j2 = {k:v for k,v in j.items() if k != '_sdir'}
        if j2['sT'] > 0 or j2['rT'] > 0 or j2['aT'] > 0 or j2['bT'] > 0:
            jugadores_out.append(j2)

    tot2 = {k:v for k,v in totales.items() if k != '_sdir'}
    jugadores_out.append(tot2)
    return jugadores_out

# ── Generar datos_historial.js ────────────────────────────────
def agregar_al_historial(nueva_sesion, base_path):
    js_path = os.path.join(base_path, 'datos_historial.js')
    historial = []

    # Leer historial existente
    if os.path.exists(js_path):
        with open(js_path, 'r', encoding='utf-8') as f:
            texto = f.read()
        m = re.search(r'"entrenamientos":\s*(\[.*\])', texto, re.DOTALL)
        if m:
            try: historial = json.loads(m.group(1))
            except: historial = []
        print(f"  Historial existente: {len(historial)} sesiones")

    # Verificar si ya existe esta sesion
    ya_existe = any(
        s.get('fecha') == nueva_sesion['fecha'] and
        s.get('tipo') == nueva_sesion['tipo'] and
        s.get('rival','') == nueva_sesion.get('rival','')
        for s in historial
    )
    if ya_existe:
        resp = input(f"  ⚠️  Ya existe sesion del {nueva_sesion['fecha']} ({nueva_sesion['tipo']}). Agregar igual? (s/n): ")
        if resp.lower() != 's':
            print("  Cancelado.")
            return js_path

    historial.append(nueva_sesion)
    print(f"  Nueva sesion agregada → total: {len(historial)} sesiones")

    ahora = datetime.now().strftime('%d/%m/%Y %H:%M:%S')
    js = 'window.HISTORIAL_DATA = {\n'
    js += f'  "generado": "{ahora}",\n'
    js += f'  "entrenamientos": {json.dumps(historial, ensure_ascii=False, indent=4)}\n'
    js += '};\n'

    with open(js_path, 'w', encoding='utf-8') as f:
        f.write(js)
    return js_path

# ── MAIN ──────────────────────────────────────────────────────
def main():
    # Argumentos
    if len(sys.argv) < 2:
        print("USO: py parsear_dvw.py ARCHIVO.dvw [--tipo E] [--rival NOMBRE] [--fecha DD/MM/YYYY]")
        sys.exit(1)

    dvw_path = sys.argv[1]
    tipo = 'P'
    rival = ''
    fecha_manual = ''

    i = 2
    while i < len(sys.argv):
        if sys.argv[i] == '--tipo' and i+1 < len(sys.argv):
            tipo = sys.argv[i+1].upper(); i += 2
        elif sys.argv[i] == '--rival' and i+1 < len(sys.argv):
            rival = sys.argv[i+1]; i += 2
        elif sys.argv[i] == '--fecha' and i+1 < len(sys.argv):
            fecha_manual = sys.argv[i+1]; i += 2
        else: i += 1

    print(f"\n=== CASLA VOLEY — Parser DVW ===")
    print(f"Archivo: {dvw_path}")

    lines = leer_dvw(dvw_path)

    # Leer metadata
    fecha = fecha_manual
    if not fecha:
        for line in lines[:10]:
            if line.startswith('GENERATOR-DAY:'):
                try:
                    fecha = line.split(':')[1].strip()[:10].replace('.','/')
                except: pass

    jugadores_casla, casla_char = get_jugadores(lines)
    combos = get_combos(lines)
    sets, casla_sets, rival_sets = get_sets(lines, casla_char)

    print(f"Fecha: {fecha}")
    print(f"Tipo: {'Partido' if tipo=='P' else 'Entrenamiento'}")
    print(f"Resultado: CASLA {casla_sets} - {rival or 'RIVAL'} {rival_sets}")
    print(f"Sets: {chr(32).join(sets)}")
    print(f"Jugadores CASLA: {len(jugadores_casla)}")
    print()

    # Parsear acciones
    jugadores_out = parsear_scout(lines, jugadores_casla, casla_char)

    # Mostrar resumen
    for j in jugadores_out:
        if j['n'] == 'TOTALES EQUIPO': continue
        if j['sT']+j['rT']+j['aT']+j['bT'] > 0:
            print(f"  #{j['c']} {j['n']}: S={j['sT']}({j['sEff']}%) R={j['rT']}({j['rEff']}%) A={j['aT']}({j['aEff']}%) B={j['bT']}")

    # Crear sesión
    sesion = {
        'fecha': fecha,
        'tipo': tipo,
        'rival': rival,
        'resultado': {'casla': casla_sets, 'rival': rival_sets, 'sets': sets},
        'jugadores': jugadores_out
    }

    # Agregar al historial
    base_path = os.path.dirname(os.path.abspath(dvw_path))
    js_path = agregar_al_historial(sesion, base_path)

    print(f"\n✅ datos_historial.js actualizado: {js_path}")
    print(f"   Sesion agregada: {fecha} — {'Partido' if tipo=='P' else 'Entrenamiento'}")
    print()
    print("SIGUIENTE PASO: correr correr.bat y subir a Netlify")

if __name__ == '__main__':
    main()
