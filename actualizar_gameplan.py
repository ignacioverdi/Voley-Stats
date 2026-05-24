#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# =============================================================
# CASLA VOLEY - Actualizador de Game Plan
# Doble clic para ejecutar despues de correr la macro en Excel
# =============================================================

import os, re, json, sys
from pathlib import Path

# Carpeta donde esta este script (la misma que los HTML y el JS)
BASE = Path(__file__).parent

TEMPLATE = BASE / "game_plan_template.html"
JS       = BASE / "datos_gameplan.js"
INDEX    = BASE / "index.html"

def limpiar_nombre(nombre):
    """Convierte 'Club Atletico Velez Sarsfield' en 'velez_sarsfield'"""
    import unicodedata
    # Quitar tildes
    s = unicodedata.normalize('NFKD', nombre)
    s = ''.join(c for c in s if not unicodedata.combining(c))
    s = s.lower()
    # Quitar palabras comunes
    for palabra in ['club', 'atletico', 'atletica', 'deportivo', 'deportiva', 'asociacion', 'sociedad']:
        s = s.replace(palabra, '')
    # Limpiar
    s = re.sub(r'[^a-z0-9]+', '_', s)
    s = s.strip('_')
    # Acortar
    partes = [p for p in s.split('_') if p]
    if len(partes) > 3:
        partes = partes[:3]
    return '_'.join(partes)

def main():
    print("=" * 50)
    print("  CASLA VOLEY - Actualizador de Game Plan")
    print("=" * 50)

    # Verificar archivos
    for f in [TEMPLATE, JS, INDEX]:
        if not f.exists():
            print(f"ERROR: No encontre {f.name}")
            print(f"Asegurate de que este en la misma carpeta que este script.")
            input("\nEnter para cerrar...")
            sys.exit(1)

    # Leer el JS generado por la macro
    # Arreglar encoding de todos los JS generados por VBA
    print("\nCorrigiendo encoding de archivos JS...")
    for js_file in ['datos_gameplan.js', 'datos_prep_fisica.js', 'datos_equipo.js']:
        fix_js_encoding(BASE / js_file)

    print("\nLeyendo datos_gameplan.js...")
    with open(JS, 'r', encoding='utf-8-sig') as f:
        js_text = f.read()

    # Parsear el JS
    match = re.search(r'window\.GAMEPLAN_DATA\s*=\s*(\{.*\})\s*;', js_text, re.DOTALL)
    if not match:
        print("ERROR: No pude parsear datos_gameplan.js")
        input("\nEnter para cerrar...")
        sys.exit(1)

    # Arreglar caracteres corruptos del JS (generado en latin-1)
    js_clean = match.group(1)
    try:
        data = json.loads(js_clean)
    except:
        # Intentar fix de encoding
        js_clean = js_clean.encode('latin-1').decode('utf-8', errors='replace')
        data = json.loads(js_clean)

    rival   = data.get('rival', 'Rival')
    torneo  = data.get('torneo', 'Torneo')
    fecha   = data.get('fecha', 0)
    jugadores = data.get('jugadores', [])
    armador   = data.get('armador', {"titular": None, "suplente": None})

    print(f"  Rival:    {rival}")
    print(f"  Torneo:   {torneo}")
    print(f"  Fecha:    {fecha}")
    print(f"  Jugadores: {len(jugadores)}")

    # Nombre del archivo HTML de salida
    nombre_limpio = limpiar_nombre(rival)
    html_nombre = f"game_plan_{nombre_limpio}.html"
    html_path = BASE / html_nombre
    print(f"\nCreando: {html_nombre}")

    # Leer template
    with open(TEMPLATE, 'r', encoding='utf-8') as f:
        html = f.read()

    # Reemplazar const RIVAL
    nuevo_rival = (
        'const RIVAL = {\n'
        f'  nombre: {json.dumps(rival, ensure_ascii=False)},\n'
        f'  info: {json.dumps(torneo + " · Fecha " + str(fecha), ensure_ascii=False)},\n'
        f'  fecha: "{fecha}"\n'
        '};'
    )
    html = re.sub(r'const RIVAL = \{.*?\};', nuevo_rival, html, flags=re.DOTALL)

    # Reemplazar JUGADORES usando marcadores
    nuevos_jug = json.dumps(jugadores, ensure_ascii=False, indent=2)
    html = re.sub(
        r'/\*__JUG_START__\*/.*?/\*__JUG_END__\*/',
        f'/*__JUG_START__*/{nuevos_jug}/*__JUG_END__*/',
        html, flags=re.DOTALL
    )

    # Reemplazar ARMADOR_DATA usando marcadores
    nuevo_arm = json.dumps(armador, ensure_ascii=False)
    html = re.sub(
        r'/\*__ARM_START__\*/.*?/\*__ARM_END__\*/',
        f'/*__ARM_START__*/{nuevo_arm}/*__ARM_END__*/',
        html, flags=re.DOTALL
    )

    # Guardar HTML del partido
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"  Creado: {html_nombre} ({html_path.stat().st_size:,} bytes)")

    # Actualizar index.html
    print("\nActualizando index.html...")
    with open(INDEX, 'r', encoding='utf-8') as f:
        index = f.read()

    # Actualizar card principal
    marca_ini = '<!-- PLAN DE JUEGO -->'
    marca_fin = '<!-- /PLAN DE JUEGO -->'
    if marca_ini in index and marca_fin in index:
        nuevo_bloque = f'''{marca_ini}
      <a href="{html_nombre}" class="card" style="--card-color:#f59e0b" id="card-gameplan">
        <div class="card-glow"></div>
        <div class="card-top">
          <div class="card-icon" style="background:rgba(245,158,11,.1);border-color:rgba(245,158,11,.2)">🎯</div>
          <div class="card-badge" style="background:rgba(245,158,11,.1);color:#f59e0b;border:1px solid rgba(245,158,11,.2)">vs {rival}</div>
        </div>
        <div class="card-body">
          <div class="card-title" style="color:#f59e0b">Plan de Juego</div>
          <div class="card-desc">Análisis táctico del rival. Ataques, saques y zonas preferidas por jugador.</div>
          <div style="margin-top:10px;font-size:11px;color:var(--mut)">{torneo} · Fecha {fecha}</div>
        </div>
        <div class="card-arrow">→</div>
      </a>
      {marca_fin}'''
        index = re.sub(
            re.escape(marca_ini) + r'.*?' + re.escape(marca_fin),
            nuevo_bloque, index, flags=re.DOTALL
        )
        print("  Card principal actualizada")

    # Agregar al historial
    mh_ini = '<!-- HISTORIAL-GP-INI -->'
    mh_fin = '<!-- HISTORIAL-GP-FIN -->'
    if mh_ini in index and mh_fin in index:
        zona_hist = index[index.find(mh_ini):index.find(mh_fin)]
        if html_nombre not in zona_hist:
            nueva_entrada = f'''
        <a href="{html_nombre}" class="gp-item">
          <div class="gp-fecha">F{fecha}</div>
          <div class="gp-info">
            <div class="gp-rival">vs {rival}</div>
            <div class="gp-torneo">{torneo}</div>
          </div>
          <div class="gp-arrow">→</div>
        </a>'''
            index = index.replace(
                mh_ini,
                mh_ini + nueva_entrada
            )
            print(f"  Agregado al historial: F{fecha} vs {rival}")
        else:
            print(f"  Ya estaba en el historial")

    # Guardar index
    with open(INDEX, 'w', encoding='utf-8') as f:
        f.write(index)
    print("  index.html guardado")

    print("\n" + "=" * 50)
    print("  TODO LISTO!")
    print(f"  Partido: F{fecha} vs {rival}")
    print(f"  Archivo: {html_nombre}")
    print("=" * 50)
    input("\nEnter para cerrar...")


def fix_js_encoding(js_path):
    """Arregla el encoding de un JS generado por VBA (latin-1 → UTF-8)"""
    if not js_path.exists():
        return
    try:
        # Intentar leer como latin-1 y reescribir como UTF-8
        with open(js_path, 'r', encoding='latin-1') as f:
            content = f.read()
        with open(js_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  ✅ Encoding corregido: {js_path.name}")
    except Exception as e:
        print(f"  ⚠️ No se pudo corregir encoding: {e}")

if __name__ == "__main__":
    main()
