# RESUMEN COMPLETO — SISTEMA DE ANÁLISIS DE VÓLEY (2 LIGAS)

Fecha: 04/06/2026

Dos sistemas paralelos, **idénticos y automatizados al 100%**:
- **NAFELS** → liga suiza NLA (8 equipos)
- **CASLA** → liga argentina División de Honor (12 equipos)

---

## 📁 ORGANIZACIÓN

- **`/NAFELS/`** (51 archivos) → repo `VOLLEY_NAFELS`
- **`/CASLA/`** (53 archivos) → repo `Voley-Stats`
- `COMBOS_PENDIENTES.md` → combinaciones que faltan que me pases equivalencia
- `RESUMEN_COMPLETO.md` → este documento

---

## ✅ NORMALIZACIÓN DE COMBOS (lo último que trabajamos)

**Problema resuelto:** el mismo ataque tiene distinto código según el idioma del scout
(ej: W4 argentino = X5 mundial). Antes esto generaba duplicados y combos sin clasificar (el "?").

**Solución:** unificación al código CANÓNICO MUNDIAL (formato X). Aplicado a las DOS ligas.

Equivalencias aplicadas (argentino → canónico):
W4→X5, G4→V5, J1→X1, J4→XM, J3→X2, J2→X7, J5→CB, W2→X6, G2→V6, Y9→X8, G9→V8, Y8→XP, G8→VP

Mapeo por posición:
- Pos 4: X5, V5, C5, V4
- Pos 3: X1, XM, XG, XC, XD, X2, X7, CB, CD, CF, V3
- Pos 2: X6, V6, V2
- Pos 9: X8, V8
- Pos 8: XB, XR, XP, VB, VR, VP

**La normalización es AUTOMÁTICA** en update_db.py — cada DVW nuevo se normaliza al cargarlo.

### ⚠️ PENDIENTE (ver COMBOS_PENDIENTES.md)
Estos códigos quedan como "?" hasta que me pases su equivalencia:
PR, P2, JJ, G3, V0, W3, X3

---

## ✅ NAFELS (al día, premium)

- 32 heatmaps (4 skills × 8 equipos) — **soluciona el 404 de la tabla de liga**
- Páginas: index, historial, ranking, armadores, recepción, ataque/saque/recepción_jugador,
  jugador, panel_voley, game_plan_amriswil, nla_stats_table
- Datos: datos_partidos/armadores/recepcion/historial.js (combos normalizados)
- BD: nla_players_db.json, nla_full_stats.json
- update_db.py con normalización automática

Bugs resueltos: 404 heatmaps, localStorage, document.fonts, game plan entrelazado,
roster correcto, ranking self-contained, historial, combos normalizados.

**Borrar del repo viejo:** `game_plan_amriswil (2).html`, `game_plan_dbanf.html`, `datos_casla.js`

---

## ✅ CASLA (replicado e idéntico a Nafels)

Construido desde los 42 DVW de la liga argentina:
- BD de 12 equipos, 27.155 acciones (combos normalizados)
- 48 heatmaps (4 skills × 12 equipos) con filtro por rival
- casla_stats_table.html — tabla de liga con botones sin 404
- datos_partidos.js con roster correcto (leído de tu datos_casla.js)
- casla_players_db.json, casla_full_stats.json
- update_db.py con normalización automática

Equipos: CASLA, Boca, River, Velez, Lomas, Ciudad, Untref, Ferro, Defensores, Hacoaj, UBA, Campana

Roster CASLA (de tu sistema): Opuestos #5,#18 / Centrales #2,#10,#15,#17 /
Armadores #4,#9 / Puntas #6,#11,#13,#14 / Líberos #3,#12

---

## 🔄 AUTOMATIZACIÓN AL 100%

Para cualquiera de los dos sistemas:
```bash
python3 update_db.py --dvw_dir /ruta/nuevos/DVW --temporada 2026/27
```

Hace TODO solo: parsea + normaliza combos + recalcula stats + regenera los heatmaps
(con safety fixes) + reconstruye la tabla + regenera datos_partidos.js, etc.

---

## ⏳ PRÓXIMA SESIÓN
1. Pasarme las equivalencias de: PR, P2, JJ, G3, V0, W3, X3 (están en COMBOS_PENDIENTES.md)
2. Menú desglosado con selección múltiple de partidos/entrenamientos (rediseño UI)
