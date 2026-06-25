# 🎯 GAME PLAN UNIVERSAL — LISTO

## Qué hice
Un solo `game_plan.html` que recibe `?rival=X` y se arma solo desde `liga_data.js`.
Igual que los heatmaps universales. Sirve para los dos sistemas y para CUALQUIER rival.

## Cómo funciona
- `game_plan.html?rival=river` → game plan contra River (armador, recepción, rotaciones)
- `game_plan.html?rival=amriswil` → game plan contra Amriswil
- Sin parámetro → toma el primer equipo

Calcula automáticamente del rival:
- Armador: rotaciones, distribución por zona, llamadas, eficiencia
- Recepción: por jugador, flotado/potencia, por zona
- Todo desde liga_data.js (mismo archivo que los heatmaps)

## Probado (navegador simulado) — funciona para:
- CASLA: River (armador Giulietti), Boca (Bernasconi)
- NAFELS: Amriswil (Jovanovic), Jona (Lietzke)

## Para subir (a CADA repo, carpeta NAFELS/ y CASLA/):
1. `game_plan.html` (universal, idéntico para los dos)
2. `index.html` (tarjeta game plan apunta al universal)
3. `nla_stats_table.html` / `casla_stats_table.html` (botón 📋 game plan por equipo)

NOTA: el game_plan.html necesita el liga_data.js al lado (ya está en cada repo).

## Automatización
Cuando cargás DVW nuevos y corrés update_db.py, se regenera liga_data.js
y el game plan se actualiza solo. CERO mantenimiento manual.

## Acceso al game plan (3 formas):
1. Desde la tabla de liga: botón 📋 en cada equipo
2. Desde el hub (index): tarjeta Game Plan
3. URL directa: game_plan.html?rival=X
