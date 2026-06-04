# 🚀 QUÉ SUBIR AHORA — HEATMAPS UNIVERSALES

## EL CAMBIO GRANDE: 4 archivos en vez de 48
En lugar de un heatmap por equipo, ahora hay **4 heatmaps universales** que se arman solos
leyendo `?equipo=X` de la URL. Cuando cambien los equipos el año que viene, se adaptan solos.

---

## 📤 NAFELS (repo VOLLEY_NAFELS) — subir de la carpeta NAFELS/

**NUEVO (lo esencial):**
1. `hm_ataque.html`
2. `hm_saque.html`
3. `hm_recepcion.html`
4. `hm_armador.html`
5. `liga_data.js` ← los 4 heatmaps leen de acá (1.8MB)
6. `nla_stats_table.html` ← tabla nueva (links universales + siempre ordenada por ranking)
7. `historial_voley.html` ← con TODOS los fixes (auto-selecciona jugador, 5 pestañas OK)
8. `update_db.py` ← actualizado (regenera liga_data.js solo)

**PODÉS BORRAR del repo (ya no se usan):**
- Todos los `ataque_amriswil.html`, `saque_amriswil.html`, etc. (los 10 viejos individuales)
- `game_plan_nafels.html` (viejo)

---

## 📤 CASLA (repo Voley-Stats) — subir de la carpeta CASLA/

**NUEVO:**
1. `hm_ataque.html`
2. `hm_saque.html`
3. `hm_recepcion.html`
4. `hm_armador.html`
5. `liga_data.js` (971KB)
6. `casla_stats_table.html` (links universales + ranking)
7. `datos_partidos.js`
8. `casla_players_db.json`
9. `casla_full_stats.json`
10. `update_db.py`

**PODÉS BORRAR:** los heatmaps individuales que subiste (ataque_river, etc.)

---

## ✅ TUS 5 PUNTOS — TODOS RESUELTOS

1. **Acceso inmediato a heatmaps** → universales, imposible 404. Un solo archivo por skill.
2. **Tablas siempre ordenadas por ranking** → equipos Y jugadores, mejor a peor, según el fundamento elegido (ATK/SAQ/REC/BLK).
3. **Criterio unificado** → CASLA y Nafels usan EXACTAMENTE la misma tabla y el mismo ranking.
4. **Historial Nafels** → funciona: auto-selecciona jugador, 5 pestañas con datos, sin [object].
5. **Links conectados y automatizados** → la tabla linkea a `hm_X.html?equipo=Y`, update_db.py regenera todo.

---

## 🔗 CÓMO FUNCIONA EL LINK
La tabla de liga genera: `hm_ataque.html?equipo=river`
El heatmap lee ese `?equipo=river`, busca en `liga_data.js`, y se arma solo.
Para ver otro equipo: cambiás el parámetro. Mismo archivo siempre.

## ⏳ PENDIENTE
- Equivalencias de combos: PR, P2, JJ, G3, V0, W3, X3 (ver COMBOS_PENDIENTES.md)
- Menú desglosado con selección múltiple de partidos
