# RESUMEN SISTEMA ANÁLISIS VOLEY — ESTADO COMPLETO
**Fecha:** 03/06/2026 | **Para continuar en nuevo chat sin perder nada**

---

## 1. REPOSITORIOS

| Equipo | GitHub | Vercel |
|--------|--------|--------|
| **CASLA** | github.com/ignacioverdi/Voley-Stats | voley-stats-iota.vercel.app |
| **NAFELS** | github.com/ignacioverdi/Voley-Nafels | volley-nafels.vercel.app |

---

## 2. PARSER DVW — REGLAS CRÍTICAS

### Prefijos de línea en SCOUT
- `*` = equipo LOCAL (HOME)
- `a` = equipo VISITANTE (AWAY)
- Detectar cuál es nuestro equipo comparando nombre en `[3TEAMS]`

### Zonas por skill (regla del tilde)
```
ATAQUE  (A): combo = tilde[0],  zones = tilde[1][0:2]
SAQUE   (S): combo = '',        zones = tilde[3][0:2]  ← CRÍTICO
RECEP   (R): combo = '',        zones = tilde[3][0:2]  ← CRÍTICO
SET     (E): call  = tilde[0][:2], zones = tilde[1][0:2]
```

### Setter position
- `sc[9]`  = setter_pos equipo HOME
- `sc[10]` = setter_pos equipo AWAY
- Set number = `sc[8]`

### SO vs TR (Side Out vs Transición)
- Rival sirve → **SO** (atype=0) = nuestro equipo recibe y ataca
- Nosotros servimos → **TR** (atype=1) = transición

---

## 3. RECEPCIÓN — DEFINICIÓN DE ZONAS (CRÍTICO)

### Sección acumulada (renderRecepcionRival)
Para saber DESDE DÓNDE viene el saque que recibe el jugador:
- **desde_z1** = `srv_orig` del rally in **[1, 9]** (sacador en zona 1 o zona 6-1)
- **desde_z6** = `srv_orig` in **[6]**
- **desde_z5** = `srv_orig` in **[5, 7]** (sacador en zona 5 o zona 6-5)

> **IMPORTANTE:** `srv_orig` se obtiene trackeando la línea de SAQUE anterior en el rally — NO del campo `orig` de la línea de recepción. Porque cuando el sacador está en zona 9, la recepción se codifica con `orig=1` en el DVW.

### Dónde cae la recepción (p1/p5/p6)
- **p1** = `dest` in **[1, 2, 9]** (sector derecho)
- **p6** = `dest` in **[3, 6, 8]** (sector centro)
- **p5** = `dest` in **[4, 5, 7]** (sector izquierdo)

### Orden visual en pantalla
```
Z5 — Z6 — Z1   (izquierda → derecha, igual que cancha real)
```

---

## 4. ARMADOR — LÓGICA COMPLETA

### Filtro base
Solo se cuentan armadas donde la **recepción inmediatamente anterior** al set fue `#` o `+`.

> CRÍTICO: "inmediatamente anterior" = el último skill de Amriswil antes del E fue una R.
> Si entre R y E hay otras acciones (bloqueo, defensa, ataque previo), rec_quality = '?' (excluida).

### Mapeo combo → zona de ataque
```python
X5, V5           → Z4  (OH izquierda)
X1, XM, X2, XG,
XC, XD, X7      → Z3  (MB centro)
X6, V6           → Z2  (OPP derecha delantera)
X8, V8 + orig 9  → Z9  (OPP fondo, cuando armador delantero P4/P3/P2)
X8, V8 + orig 2  → Z2  (OPP delantera)
XP, XR, XT, X9  → atk_orig real (pipe/back, generalmente Z8)
XB               → atk_orig real
PP (setter dump) → Z2 si armador delantero (P4/P3/P2), excluido si atrás
X3, X4           → Z2
```

### Zonas en la canchita del armador
```
RED
Z4  Z3  Z2   ← fila delantera  (y=0.28 en canvas)
Z7  Z8  Z9   ← fila media/fondo (y=0.70 en canvas)
```
Loop de dibujo: `[4,3,2,7,8,9]`

### Orden de canchitas (rotaciones)
```
P4  P3  P2   ← armador delantero (fila superior)
P5  P6  P1   ← armador atrás    (fila inferior)
```

### Valores verificados P1 (referencia)
| Zona | Armadas | Puntos |
|------|---------|--------|
| Z4   | 13      | 10     |
| Z3   | 12      | 6      |
| Z2   | 14      | 9      |
| Z8   | 4       | 1      |

---

## 5. ARCHIVOS CLAVE EN OUTPUTS

| Archivo | Descripción |
|---------|-------------|
| `game_plan_amriswil.html` | Game Plan Amriswil — TERMINADO y verificado |
| `gp_template.html` | Template base para cualquier rival (= gp_lomas.html) |
| `gp_lomas.html` | Referencia CASLA — motor visual completo |
| `amriswil_data_v2.json` | Datos Amriswil: attacks/serves/recs por jugador |
| `amriswil_rec_v3.json` | Recepción Amriswil con srv_orig del rally correcto |
| `amriswil_setter_rallies_v4.json` | Rallies del armador Jovanovic #11 linkeados |
| `amriswil_jugadores.json` | JUGADORES data: ataques/saques/recepcion por jugador |
| `nafels_data_v2.json` | Datos Nafels: 26 partidos NLA 2025/26 |
| `casla_all_actions_v3.json` | Datos CASLA: 7 partidos DHM 2026 |

---

## 6. HEATMAPS — ARCHIVOS EN REPO NAFELS

| Archivo | Descripción | Estado |
|---------|-------------|--------|
| `ataque_nafels.html` | Heatmap ataque Nafels | ✓ Subido |
| `saque_nafels.html` | Heatmap saque Nafels | ✓ Subido |
| `recepcion_nafels.html` | Heatmap recepción Nafels | ✓ Subido |
| `armador_nafels.html` | Heatmap armador Nafels | ✓ Subido |
| `ataque_casla.html` | Heatmap ataque CASLA | ✓ Subido |
| `saque_casla.html` | Heatmap saque CASLA | ✓ Subido |
| `recepcion_casla.html` | Heatmap recepción CASLA | ✓ Subido |
| `armador_casla.html` | Heatmap armador CASLA | ✓ Subido |

### Formato RAW heatmap ataque
`[rival_idx, gi, set_num, moment, atype, combo_idx, res_idx, orig, dest, rq, rv]` — 11 campos, `r[4]=atype SO/TR`

### Formato RAW heatmap saque/recepción
`[rival_idx, gi, set_num, moment, stype_idx, res_idx, orig, dest]` — 8 campos, `stypes` per player

### Formato RAW heatmap armador
`RAW.setters` con 12 campos `[rival,gi,set,mom,atype,call_idx,sp,rq,atk_combo,atk_res,atk_dest,atk_pos]`

---

## 7. PLANTEL AMRISWIL

| # | Nombre | Posición |
|---|--------|----------|
| 1 | Ramon Diem | LIBERO |
| 6 | Bjorn Hohne | PUNTA (OH) |
| 7 | Iliya Goldrin | PUNTA (OH) |
| 8 | Etienne Schalch | OPUESTO (OPP) |
| 9 | Joel Hauck | CENTRAL (MB) |
| 10 | Daniel Uruena | CENTRAL (MB) |
| 11 | Milan Jovanovic | ARMADOR (S) |
| 14 | Bruno SunaricJukic | PUNTA (OH) |

---

## 8. PLANTEL NAFELS

| # | Nombre | Posición |
|---|--------|----------|
| 1 | Linus Deecke | LIBERO |
| 2 | Mathias Corzo | PUNTA |
| 3 | Tom Schwitter | PUNTA |
| 4 | Ezequiel Vazquez | ARMADOR |
| 5 | Joachim Hesselholt | CENTRAL |
| 6 | Pablo Denis Cabanas | OPUESTO |
| 7 | Roy Schmid | CENTRAL |
| 8 | Jonas Peter | LIBERO |
| 9 | Nathan Broch | PUNTA |
| 10 | Dejan Bogdanovski | CENTRAL |
| 11 | Christian Bartholet | PUNTA |
| 14 | Manuel Figueiredo | OPUESTO |
| 15 | Risto Nikolov | CENTRAL |

---

## 9. GAME PLAN — ESTRUCTURA Y FIXES APLICADOS

### Base: `gp_lomas.html` (referencia con todo el motor visual)

### Fixes que SIEMPRE hay que aplicar al generar un nuevo GP
1. `item.pts` → `item.pts_pct` en badges (muestra % kills no cantidad)
2. `d.pts+' puntos'` → `d.pts+' kills'` en canvas
3. Loop armador: `[4,3,2,6,1]` → `[4,3,2,7,8,9]`
4. Zona order recepción: `[z1,z6,z5]` → `[z5,z6,z1]` en AMBAS funciones
5. p1/p5/p6 display: orden `p1,p6,p5` → `p5,p6,p1`
6. Filtro recepción rival: tot≥15 acciones (no solo chequear que exista flotado)
7. ARMADOR_DATA via markers `/*__ARM_START__*/` y `/*__ARM_END__*/`

### Secciones del Game Plan
- **Tab ATAQUE**: canchitas por combinación por jugador (filtradas por posición)
- **Tab SAQUE**: canchitas SQ/SM por jugador
- **Tab RECEPCIÓN**: flotado/potencia × desde_z1/z5/z6 × p1/p5/p6 (individual)
- **Sección intermedia recepción rival**: jugadores con ≥15 recepciones, orden Z5-Z6-Z1
- **Sección armador**: 6 canchitas P4/P3/P2 arriba, P5/P6/P1 abajo + llamadas + EFF por rec quality
- **"Ver heatmap →"**: link en cada jugador abre heatmap del rival con player filtrado

---

## 10. PRÓXIMOS PASOS PENDIENTES

1. **Heatmaps de Amriswil** — generar `ataque_amriswil.html`, `saque_amriswil.html`, `recepcion_amriswil.html`, `armador_amriswil.html` usando el mismo sistema que Nafels/CASLA pero con los DVW de Amriswil
2. **Automatizar GP builder** — el script `gp_builder.py` está en outputs, para nuevo rival solo hay que subir los DVW y correrlo
3. **GP para otros rivales** — mismo proceso: subir DVW del rival, correr builder, verificar números vs DataVolley

---

## 11. CÓMO GENERAR UN NUEVO GAME PLAN

```python
# En nuevo chat, con los DVW del rival en /home/claude/DVW_RIVAL/
# y los archivos de outputs disponibles:

build_game_plan(
    dvw_dir     = "/home/claude/DVW_LAUSANNE/",
    rival_name  = "LAUSANNE",
    output_path = "game_plan_lausanne.html",
    template_path = "gp_template.html",  # = gp_lomas.html
    known_positions = {7:"OH", 8:"OPP", 10:"MB", 11:"S", 1:"L"},
    n_games_label = "NLA Suiza 2025/26 · 4 partidos"
)
```

El `gp_builder.py` en outputs tiene toda la lógica encapsulada con los fixes aplicados.

---

## 12. VERIFICACIÓN FINAL GAME PLAN AMRISWIL

Todos los valores del armador verificados contra DataVolley:

| Rot | Z4 | Z3 | Z2 | Z9 | Z8 |
|-----|----|----|----|----|-----|
| P1  | 13/10 | 12/6 | 14/9 | — | 4/1 |
| P6  | 9/3 | 13/9 | 16/4 | — | 2/0 |
| P5  | 10/4 | 19/17 | 14/7 | — | 4/2 |
| P4  | 11/7 | 14/7 | — | 7/5 | 1/1 |
| P3  | 13/7 | 9/4 | — | 7/3 | 1/0 |
| P2  | 11/7 | 8/5 | — | 11/7 | 4/3 |

*formato: armadas/kills*
