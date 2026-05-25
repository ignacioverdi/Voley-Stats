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
