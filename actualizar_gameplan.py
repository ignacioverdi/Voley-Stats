"""
actualizar_gameplan.py  —  CASLA VOLEY
========================================
Lee datos_gameplan.js (generado por la macro VBA) y produce el HTML
final listo para subir a GitHub/Vercel.

Corrige automaticamente:
  1. Videos null  (matchea por nombre completo desde VIDEOS_DBANF en el Excel)
  2. SyntaxError ],; en JUGADORES
  3. ARMADOR_DATA vacio
  4. Formacion de ataque por rotacion

Uso: correr.bat llama a este script desde la carpeta STATS 2/
"""

import json, re, os, sys

# ── Rutas (relativas al .py, mismo lugar que el Excel y los HTML) ──────
BASE   = os.path.dirname(os.path.abspath(__file__))
JS_IN  = os.path.join(BASE, "datos_gameplan.js")
TMPL   = os.path.join(BASE, "game_plan_template.html")
EXCEL  = os.path.join(BASE, "CASL_GamePlan_4.xlsm")

# ── 1. Leer datos_gameplan.js ───────────────────────────────────────────
if not os.path.exists(JS_IN):
    sys.exit(f"ERROR: no se encuentra {JS_IN}")

with open(JS_IN, "rb") as f:
    raw = f.read()
js_text = raw.decode("utf-8", errors="replace")

match = re.search(r"window\.GAMEPLAN_DATA\s*=\s*(\{[\s\S]*?\});\s*$", js_text)
if not match:
    sys.exit("ERROR: no se pudo parsear window.GAMEPLAN_DATA en datos_gameplan.js")

data      = json.loads(match.group(1))
rival     = data["rival"]
torneo    = data.get("torneo", "")
fecha     = data.get("fecha", "")
jugadores = data["jugadores"]
armador   = data["armador"]

print(f"Rival: {rival}  |  Torneo: {torneo}  |  Fecha: {fecha}")
print(f"Jugadores: {len(jugadores)}  |  Armador: {armador['titular']['nombre']}")

# ── 2. Leer videos del Excel ────────────────────────────────────────────
video_map = {}
try:
    from openpyxl import load_workbook
    wb = load_workbook(EXCEL, read_only=True)

    # Detectar hoja VIDEOS_RIVAL
    sheet_name = f"VIDEOS_{rival.upper()[:10]}"
    if sheet_name not in wb.sheetnames:
        # Buscar cualquier VIDEOS_*
        candidates = [s for s in wb.sheetnames if s.startswith("VIDEOS_")]
        sheet_name = candidates[0] if candidates else None

    if sheet_name and sheet_name in wb.sheetnames:
        ws = wb[sheet_name]
        last_jug = ""
        for row in ws.iter_rows(min_row=4, values_only=True):
            if row[1] and str(row[1]).strip() not in ("", "JUGADOR"):
                last_jug = str(row[1]).strip()
            cod = str(row[3]).strip() if row[3] else ""
            url = str(row[5]).strip() if row[5] else ""
            # Normalizar codigos: SM-FLOTADO -> SM, SQ-POTENCIA -> SQ
            cod = cod.replace("-FLOTADO", "").replace("-POTENCIA", "").replace("-flotado","").replace("-potencia","")
            if last_jug and cod and url and url.startswith("http"):
                video_map[(last_jug, cod)] = url
                print(f"  Video: {last_jug} | {cod} -> {url}")
    else:
        print(f"AVISO: no se encontro hoja {sheet_name} en el Excel")

except ImportError:
    print("AVISO: openpyxl no instalado, sin videos del Excel")
    print("       Instalar con: pip install openpyxl")
except Exception as e:
    print(f"AVISO: error leyendo Excel: {e}")

# ── 3. Inyectar videos en jugadores ────────────────────────────────────
injected = 0
for j in jugadores:
    nombre = j["nombre"]  # "1 Barrios L."
    for a in j.get("ataques", []):
        key = (nombre, a["cod"])
        if key in video_map:
            a["video"] = video_map[key]
            injected += 1
    for s in j.get("saques", []):
        key = (nombre, s["cod"])
        if key in video_map:
            s["video"] = video_map[key]
            injected += 1

print(f"Videos inyectados: {injected}")

# ── 4. Leer template HTML ───────────────────────────────────────────────
if not os.path.exists(TMPL):
    sys.exit(f"ERROR: no se encuentra {TMPL}")

with open(TMPL, "rb") as f:
    content = f.read().decode("utf-8", errors="replace")

# ── 5. Reemplazar RIVAL ─────────────────────────────────────────────────
info_str = f"{torneo} . Fecha {fecha}"
new_rival = (
    "const RIVAL = {\n"
    f'  nombre: "{rival}",\n'
    f'  info: "{info_str}",\n'
    f'  fecha: "{fecha}"\n'
    "};"
)
content = re.sub(r"const RIVAL = \{[\s\S]*?\};", new_rival, content, count=1)
print("✓ RIVAL reemplazado")

# ── 6. Reemplazar JUGADORES (sin syntax error) ──────────────────────────
new_jug = "const JUGADORES = " + json.dumps(jugadores, ensure_ascii=False, indent=2) + ";"
content = re.sub(r"const JUGADORES = [\s\S]*?;(?=\s*\n//)", new_jug, content, count=1)
print("✓ JUGADORES reemplazado")

# ── 7. Reemplazar ARMADOR_DATA con marcadores ───────────────────────────
arm_json = json.dumps(armador, ensure_ascii=False)
new_arm  = f"const ARMADOR_DATA=/*__ARM_START__*/{arm_json}/*__ARM_END__*/;"
content  = re.sub(
    r"const ARMADOR_DATA=(?:/\*__ARM_START__\*/)?[\s\S]*?(?:/\*__ARM_END__\*/)?;",
    new_arm, content, count=1
)
print("✓ ARMADOR_DATA reemplazado")

# ── 8. Inyectar FORMACION_ATAQUE como global JS ─────────────────────────
# Solo si no existe ya en el HTML
if "var FORMACION_ATAQUE" not in content:
    formacion_code = """var FORMACION_ATAQUE = {
  'P1': { front:[{n:'WAGNER',z:4},{n:'BARRIOS',z:3},{n:'CORZO',z:2}], back:[{n:'MANSILLA',z:6}] },
  'P6': { front:[{n:'MANSILLA',z:4},{n:'BARRIOS',z:3},{n:'CORZO',z:2}], back:[{n:'WAGNER',z:6}] },
  'P5': { front:[{n:'MANSILLA',z:4},{n:'GALLARDO',z:3},{n:'CORZO',z:2}], back:[{n:'WAGNER',z:6}] },
  'P4': { front:[{n:'MANSILLA',z:4},{n:'GALLARDO',z:3},{n:'CORZO',z:1}], back:[{n:'WAGNER',z:6}] },
  'P3': { front:[{n:'MANSILLA',z:4},{n:'GALLARDO',z:3},{n:'CORZO',z:1}], back:[{n:'WAGNER',z:6}] },
  'P2': { front:[{n:'WAGNER',z:4},{n:'BARRIOS',z:3},{n:'CORZO',z:1}], back:[{n:'MANSILLA',z:6}] }
};

"""
    content = content.replace("function renderArmador(){", formacion_code + "function renderArmador(){", 1)
    print("✓ FORMACION_ATAQUE agregada")

# ── 9. Fix addEventListener null crash ─────────────────────────────────
old_listener = """document.getElementById('modal-armador').addEventListener('click',function(e){
  if(e.target===this) cerrarModalArmador();
});"""
new_listener = """document.addEventListener('DOMContentLoaded', function(){
  var mArm = document.getElementById('modal-armador');
  if(mArm) mArm.addEventListener('click',function(e){ if(e.target===this) cerrarModalArmador(); });
});"""
if old_listener in content:
    content = content.replace(old_listener, new_listener, 1)
    print("✓ Fix addEventListener aplicado")

# ── 10. Generar nombre del HTML de salida ──────────────────────────────
def limpiar(s):
    s = s.lower().strip()
    for a, b in [(" ","_"),("á","a"),("é","e"),("í","i"),("ó","o"),("ú","u"),("ñ","n"),(".",""),(",",""),("'","")]:
        s = s.replace(a, b)
    return s[:25]

html_nombre = f"game_plan_{limpiar(rival)}.html"
html_path   = os.path.join(BASE, html_nombre)

# ── 11. Guardar UTF-8 sin BOM ───────────────────────────────────────────
with open(html_path, "w", encoding="utf-8") as f:
    f.write(content)

size_kb = os.path.getsize(html_path) / 1024
print(f"\n✓ HTML generado: {html_nombre}  ({size_kb:.1f} KB)")

# ── 12. Verificaciones finales ──────────────────────────────────────────
errors = []
if rival not in content:
    errors.append("RIVAL no encontrado")
if '"titular"' not in content or "null" == content[content.find("ARMADOR_DATA=")+13:content.find("ARMADOR_DATA=")+19]:
    pass  # ok
if "youtu.be" not in content and injected == 0 and len(video_map) == 0:
    print("AVISO: no hay videos (normal si el Excel no tiene URLs cargadas)")
if errors:
    print("ERRORES:", errors)
else:
    print("✓ Verificacion OK — listo para subir a GitHub")

print(f"\nArchivo: {html_path}")

# ── 13. Actualizar jugador.html con el rival correcto ───────────────
jugador_path = os.path.join(BASE, "jugador.html")
if os.path.exists(jugador_path):
    with open(jugador_path, encoding='utf-8', errors='replace') as f:
        jug_content = f.read()

    # Reemplazar URL del game plan en los accesos
    html_nombre_gp = f"game_plan_{limpiar(rival)}.html"
    old_url = re.search(r"url:'game_plan_[^']+\.html'", jug_content)
    old_href = re.search(r'href="game_plan_[^"]+\.html"', jug_content)

    cambios = 0
    if old_url:
        jug_content = re.sub(r"url:'game_plan_[^']+\.html'", f"url:'{html_nombre_gp}'", jug_content)
        cambios += 1
    if old_href:
        jug_content = re.sub(r'href="game_plan_[^"]+\.html"', f'href="{html_nombre_gp}"', jug_content)
        cambios += 1

    if cambios > 0:
        with open(jugador_path, 'w', encoding='utf-8') as f:
            f.write(jug_content)
        print(f"✓ jugador.html actualizado → {html_nombre_gp} ({cambios} referencias)")
    else:
        print("AVISO: jugador.html no tiene URLs de game_plan para actualizar")
else:
    print(f"AVISO: no se encontró jugador.html en {BASE}")

print("\n✓ Todo listo. Subí a GitHub:")
print(f"  - {html_nombre}")
print(f"  - jugador.html")

# ── 14. Actualizar index.html ────────────────────────────────────────
index_path = os.path.join(BASE, "index.html")
if os.path.exists(index_path):
    with open(index_path, encoding='utf-8', errors='replace') as f:
        idx_content = f.read()

    cambios_idx = 0

    # A) Actualizar card PLAN DE JUEGO (entre los marcadores que ya tiene la macro)
    import re as _re
    idx_content = _re.sub(
        r'(<!-- PLAN DE JUEGO -->[\s\S]*?href=")[^"]+(")',
        r'\g<1>' + html_nombre_gp + r'\g<2>',
        idx_content, count=1
    )
    idx_content = _re.sub(
        r'(<!-- PLAN DE JUEGO -->[\s\S]*?card-badge[^>]*>vs )[^<]+(<)',
        r'\g<1>vs ' + rival + r'\g<2>',
        idx_content, count=1
    )
    idx_content = _re.sub(
        r'(<!-- PLAN DE JUEGO -->[\s\S]*?Fecha )\d+',
        r'\g<1>' + str(fecha),
        idx_content, count=1
    )
    cambios_idx += 1

    # B) Actualizar bloque PROXIMO-GP (si existe el marcador)
    if '<!-- PROXIMO-GP-INI -->' in idx_content:
        nuevo_proximo = (
            '<!-- PROXIMO-GP-INI -->\n'
            '  <div>\n'
            '    <div class="section-lbl"><span data-t="calendario">Calendario</span></div>\n'
            '    <div style="background:var(--card);border:1px solid var(--border);border-radius:16px;padding:20px 24px;display:flex;align-items:center;gap:20px;flex-wrap:wrap">\n'
            '      <div style="display:flex;align-items:center;gap:16px;flex:1;min-width:260px">\n'
            '        <div style="text-align:center;padding:12px 20px;background:rgba(245,158,11,.08);border:1px solid rgba(245,158,11,.15);border-radius:10px">\n'
            f'          <div style="font-family:\'Bebas Neue\',sans-serif;font-size:32px;color:#f59e0b;line-height:1">{fecha}</div>\n'
            '          <div style="font-size:9px;color:var(--mut);letter-spacing:2px;text-transform:uppercase">Fecha</div>\n'
            '        </div>\n'
            '        <div>\n'
            f'          <div style="font-size:10px;color:var(--mut);letter-spacing:2px;text-transform:uppercase;margin-bottom:3px">{torneo}</div>\n'
            f'          <div style="font-family:\'Bebas Neue\',sans-serif;font-size:20px;letter-spacing:2px">vs {rival}</div>\n'
            '          <div style="font-size:11px;color:var(--mut);margin-top:3px">Game Plan disponible · 12 jugadores analizados</div>\n'
            '        </div>\n'
            '      </div>\n'
            f'      <a href="{html_nombre_gp}" style="padding:10px 20px;border-radius:9px;background:rgba(245,158,11,.1);border:1px solid rgba(245,158,11,.25);color:#f59e0b;font-family:\'Barlow Condensed\',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase;text-decoration:none;transition:all .2s;white-space:nowrap">\n'
            '        Ver Plan de Juego →\n'
            '      </a>\n'
            '    </div>\n'
            '  </div>\n'
            '  <!-- PROXIMO-GP-FIN -->'
        )
        idx_content = _re.sub(
            r'<!-- PROXIMO-GP-INI -->[\s\S]*?<!-- PROXIMO-GP-FIN -->',
            nuevo_proximo, idx_content, count=1
        )
        cambios_idx += 1

    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(idx_content)
    print(f"✓ index.html actualizado ({cambios_idx} secciones)")
else:
    print(f"AVISO: no se encontró index.html en {BASE}")

print("\n" + "="*50)
print("✓ TODO LISTO. Subí a GitHub:")
print(f"  1. {html_nombre}")
print(f"  2. jugador.html")
print(f"  3. index.html")
print("="*50)

# ── 15. Fix nulls en pts/eff/pts_pct ────────────────────────────────
# La macro a veces genera null cuando no hay datos — el HTML muestra "#null%"
fixed_nulls = 0
for j in jugadores:
    for combo in j.get('ataques', []) + j.get('saques', []):
        if combo.get('pts') is None:
            combo['pts'] = 0; fixed_nulls += 1
        if combo.get('eff') is None:
            combo['eff'] = 0; fixed_nulls += 1
        if combo.get('pts_pct') is None:
            tot = combo.get('tot', 0)
            pts = combo.get('pts', 0)
            combo['pts_pct'] = round(pts/tot*100) if tot > 0 else 0
            fixed_nulls += 1

if fixed_nulls > 0:
    print(f"✓ Corregidos {fixed_nulls} valores null en pts/eff")

# ── 16. Regenerar JUGADORES con nulls corregidos ─────────────────────
# Re-apply JUGADORES replacement with fixed data
new_jug_fixed = 'const JUGADORES = ' + __import__('json').dumps(jugadores, ensure_ascii=False, indent=2) + ';'
import re as _re2
content = _re2.sub(r'const JUGADORES = \[[\s\S]*?\];(?=\s*\n//)', new_jug_fixed, content, count=1)
with open(html_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("✓ JUGADORES actualizado con nulls corregidos")
