# 🎬 SISTEMA DE VIDEOS + PRÓXIMO RIVAL — TODO AUTOMÁTICO

## Un solo Excel para todo
`videos_casla.xlsx` (o `videos_nafels.xlsx`) tiene:
- **Solapa FIXTURE** (primera): el calendario de la temporada
- **Una solapa por equipo**: jugadores y combos pre-llenados para cargar videos

## El flujo (súper simple)

### 1. Cargás el FIXTURE (una vez por temporada)
En la solapa FIXTURE ponés el calendario:
```
fecha       | rival     | condicion
2026-06-07  | UBA       | local
2026-06-14  | Boca      | visitante
2026-06-21  | River     | local
```
El sistema agarra solo el próximo rival según la fecha de hoy.

### 2. Cargás los videos (cuando quieras)
En la solapa del equipo, pegás los links de YouTube en la columna verde.

### 3. Doble-clic en cargar_videos.bat
Genera `videos.js` + `proximo_rival.js` automáticamente.

### 4. Subís a GitHub
Subís `videos.js` y `proximo_rival.js` al repo.

## Qué pasa solo (automático)
- **El hub muestra "Game Plan vs [próximo rival]"** destacado arriba, con la fecha
- El link va directo al game plan de ese rival
- Cuando pasa la fecha, agarra solo el siguiente partido del fixture
- Los videos aparecen en el botón 🎬 de cada combo

## Para los jugadores
Entran al hub → ven destacado "Game Plan vs UBA (07/06/2026)" → tocan → tienen todo:
defensa, armadores, recepción, ataques y videos del próximo rival.

## Si hay reprogramación
Editás la fecha o el rival en la solapa FIXTURE, corrés el .bat, subís. Listo.

## Archivos del sistema (en cada repo)
- `videos_casla.xlsx` / `videos_nafels.xlsx` — tu base de datos (videos + fixture)
- `cargar_videos.bat` — doble-clic para generar todo
- `build_videos.py` — el motor (no lo tocás)
- `videos.js` + `proximo_rival.js` — los que genera el .bat y subís
