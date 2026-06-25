# SISTEMA DE ENTRENAMIENTOS — Análisis individual del jugador

El mismo análisis individual que tenés para partidos, ahora también para entrenamientos.
El jugador puede verse y analizarse en AMBOS contextos, con un selector PARTIDO / ENTRENAMIENTO.

## Cómo funciona el selector
En cada vista de análisis individual (los 4 heatmaps y la tabla de stats) hay un toggle arriba:
- **PARTIDO** (rojo, por defecto) → muestra solo datos de partidos
- **ENTRENAMIENTO** → muestra solo datos de las prácticas

Apretás uno y la vista entera se recalcula con esa fuente. Si no hay datos de entrenamiento, el botón se atenúa.

(El GAME PLAN no tiene selector: queda solo para partidos, como corresponde.)

## Cómo cargar entrenamientos (igual que partidos)
1. Creá una carpeta `DVW ENTRENAMIENTOS 2026` (o el año que sea)
2. Poné adentro los .dvw de las prácticas
3. Doble clic en `correr_entrenamientos.bat`
4. Genera dos archivos:
   - `liga_data_entrenamientos.js` (alimenta los heatmaps)
   - `stats_entrenamiento.js` (alimenta la tabla de stats)
5. Subí esos dos archivos a GitHub (al mismo repo de CASLA)

## Qué se analiza en entrenamiento
Todo el plantel de San Lorenzo, consolidado (ambos lados de la red en un solo equipo):
- Heatmap de Ataque (con direcciones, combos, eficacia)
- Heatmap de Saque
- Heatmap de Recepción (por zona, tipo de saque)
- Heatmap de Distribución del armador
- Tabla de estadísticas (eficacia de ataque/saque/recepción/bloqueo)

## Archivos del paquete
- `correr_entrenamientos.bat` — doble clic para procesar
- `update_db_entrenamientos.py` — el motor (no tocar)
- `dvw_parser.py` — parser de DVW
- `liga_data_entrenamientos.js` — datos de heatmaps (ejemplo con 3 prácticas)
- `stats_entrenamiento.js` — datos de la tabla (ejemplo con 13 jugadores)
- `hm_*.html` — los 4 heatmaps universales (con el selector ya incluido)

## Verificado
Probado con 3 entrenamientos reales (mayo 2026): 14 atacantes, 8 receptores, 13 jugadores en la tabla. Selector funcionando en los 4 heatmaps y en la tabla de stats, sin errores.

## Para regenerar limpio (sin duplicar)
Borrá `entrenamientos_db.json` antes de correr el .bat. No renombres DVW ya cargados.

## IMPORTANTE: los heatmaps y la tabla son COMPARTIDOS
Los archivos `hm_*.html` y `casla_stats_table.html` son los MISMOS para partido y entrenamiento (el selector cambia la fuente de datos). No hay archivos duplicados. Solo necesitás tener al lado los datos de ambos: `liga_data.js` + `liga_data_entrenamientos.js` y `stats_entrenamiento.js`.
