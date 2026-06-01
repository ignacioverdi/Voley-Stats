# CASLA VOLEY STATS — GUÍA COMPLETA DEL SISTEMA

---

## ¿QUÉ ES ESTE SISTEMA?

Es una aplicación web de estadísticas para el equipo de vóley de CASLA. Permite ver las estadísticas de cada jugador y del equipo en partidos y entrenamientos, con gráficos, canchas de dirección, baterías de objetivos y videos.

**URL:** https://voley-stats-iota.vercel.app/

---

## ESTRUCTURA GENERAL

El sistema tiene dos partes:

### 1. LOS DATOS (Excel + Scripts)
Los datos se cargan en archivos Excel y se convierten a formato web con scripts de Python.

### 2. LA WEB (GitHub + Vercel)
Los archivos web están en GitHub y se publican automáticamente en Vercel.

---

## ARCHIVOS EN TU COMPUTADORA

Todos los archivos deben estar en la misma carpeta (ej: `C:\Users\User\Desktop\STATS 2\`)

### Excels de datos:
| Archivo | Qué contiene |
|---------|-------------|
| `CASL_GamePlan_4.xlsm` | Plantel, estadísticas acumuladas oficiales |
| `CASL_Partidos.xlsx` | Datos de cada partido (una solapa por partido) + Videos |
| `CASL_Entrenamientos.xlsx` | Datos de cada entrenamiento (una solapa por fecha) |

### Scripts de Python:
| Archivo | Qué hace |
|---------|----------|
| `generar_datos_casla.py` | Lee el GamePlan y genera `datos_casla.js` |
| `generar_datos_partidos.py` | Lee CASL_Partidos y genera `datos_partidos.js` |
| `generar_datos_entrenamientos.py` | Lee CASL_Entrenamientos y genera `datos_entrenamientos.js` |

### Bats (ejecutables):
| Archivo | Qué hace |
|---------|----------|
| `correr_todo.bat` | Corre los 3 scripts de una sola vez ✅ USAR ESTE |
| `correr_partidos.bat` | Solo genera datos de partidos |
| `correr_entrenamientos.bat` | Solo genera datos de entrenamientos |

---

## FLUJO DE ACTUALIZACIÓN

### Cuando hay un partido nuevo:
1. Abrís `CASL_Partidos.xlsx`
2. Duplicás la solapa `PRÓXIMO` y la renombrás con el rival (ej: `LOMAS`)
3. Actualizás el INDICE con fecha, rival y nombre de solapa
4. Pegás los datos del partido en la solapa nueva
5. Guardás y cerrás el Excel
6. Doble click en `correr_todo.bat`
7. Subís a GitHub: `datos_casla.js`, `datos_partidos.js`, `datos_entrenamientos.js`

### Cuando hay un entrenamiento nuevo:
1. Abrís `CASL_Entrenamientos.xlsx`
2. Duplicás la solapa `PRÓXIMO` y la renombrás con la fecha (ej: `28-05`)
3. Actualizás el INDICE
4. Pegás los datos
5. Guardás y cerrás
6. Doble click en `correr_todo.bat`
7. Subís a GitHub: `datos_entrenamientos.js`

### Cuando agregás un video:
1. Subís el video a YouTube (privado o no listado)
2. Copiás el link en la solapa `VIDEOS` de `CASL_Partidos.xlsx`
3. Completás: PARTIDO, JUGADOR (apellido), TIPO, DESCRIPCION, LINK, FECHA
4. Corrés `correr_todo.bat`
5. Subís `datos_partidos.js` a GitHub

---

## ESTRUCTURA DE CASL_PARTIDOS.XLSX

### Solapa INDICE:
| Columna | Qué va |
|---------|--------|
| A | Número correlativo |
| B | Fecha (DD/MM/AAAA) |
| C | Rival |
| D | Tipo (siempre P) |
| E | Sets CASLA |
| F | Sets Rival |
| G | Resultado (V o D) |
| H | Nombre de la solapa |

### Solapa por partido (ej: UNTREF):
Las estadísticas se pegan en posiciones fijas:
- **A4**: Ataques
- **A21**: Saques
- **A36**: Stats detalladas
- **A67**: Armadores
- **A89**: Recepción
- **A128**: Objetivos/Baterías

### Solapa VIDEOS:
| Columna | Qué va |
|---------|--------|
| A | Número |
| B | Partido (debe coincidir con el nombre en INDICE) |
| C | Jugador (apellido en mayúsculas, ej: NIELSON) |
| D | Tipo: ATAQUE / SAQUE / RECEPCION / BLOQUEO |
| E | Descripción del video |
| F | Link de YouTube |
| G | Fecha |
| H | Activo (SI/NO) |

---

## ESTRUCTURA DE CASL_ENTRENAMIENTOS.XLSX

Igual que CASL_Partidos pero:
- Las solapas se llaman por fecha: `18-05`, `19-05`, etc.
- La solapa `CASLA` tiene el acumulado de todos los entrenamientos
- No tiene solapa VIDEOS (los videos van en CASL_Partidos)

---

## SUBIR ARCHIVOS A GITHUB

1. Entrás a https://github.com/ignacioverdi/Voley-Stats
2. Hacés click en el archivo que querés subir
3. Click en el ícono del lápiz (editar)
4. En la parte de abajo, click en "Upload files" o arrastrás el archivo
5. Click en "Commit changes"
6. Vercel actualiza automáticamente en ~1 minuto

---

## LA APLICACIÓN WEB

### DASHBOARD (página principal)
- **Tab EQUIPO**: Estadísticas del equipo con 4 rectángulos (Saque, Ataque, Recepción, Bloqueo) y baterías de objetivos
- **Tab JUGADORES**: Cards de cada jugador → click lleva al perfil individual
- **Tab ANÁLISIS**: Análisis detallado de partidos con filtro P/E
- **Tab HISTORIAL**: Selector de jugadores → lleva al perfil
- **Tab ARMADORES**: Estadísticas de los armadores con filtro P/E
- **Tab RECEPCIÓN**: Vista de recepción del equipo con filtro P/E
- **Otras tabs**: Baggerone, Prep Física, Game Plans

### PERFIL DEL JUGADOR (jugador.html)
Accedés desde el Dashboard → Tab Jugadores → click en el jugador

Contiene:
- **Baterías**: Performance vs objetivos con filtro PARTIDO/ENTRENAMIENTO
- **Cards de acceso**: Ataque, Saque, Recepción, Game Plan, Prep Física, Videos (cuando hay)

### VIDEOS (videos.html)
- Solo aparece en el perfil del jugador cuando tiene videos cargados
- Filtros por PARTIDO y por TIPO DE ACCIÓN
- Click en el video lo abre en pantalla completa

### PANEL EN VIVO (panel_voley.html)
- Se usa durante los entrenamientos
- Muestra estadísticas en tiempo real mientras se cargan códigos
- Las baterías se actualizan automáticamente con cada código

---

## PLANTEL CASLA

| # | Apellido | Posición |
|---|----------|----------|
| 2 | OJUEZ | CENTRAL |
| 3 | ROMEO WINER | LÍBERO |
| 4 | VAZQUEZ | ARMADOR |
| 5 | RAMOS | OPUESTO |
| 6 | VILLARRUEL | PUNTA |
| 9 | GODOY | ARMADOR |
| 10 | VIERA | CENTRAL |
| 11 | DURDOS | PUNTA |
| 12 | ZANOTTI | LÍBERO |
| 13 | ROJAS CARUSO | PUNTA |
| 14 | NIELSON | PUNTA |
| 15 | ROTEZZI | CENTRAL |
| 17 | HERBSOMMER | CENTRAL |
| 18 | ACOSTA | OPUESTO |
| 19 | DIAZ BOLLI | ARMADOR |

---

## BATERÍAS DE OBJETIVOS

Las baterías muestran el rendimiento del jugador o equipo comparado con los objetivos fijados.

| Batería | Qué mide | Objetivo |
|---------|----------|----------|
| % Saque | Eficiencia de saque | +3% |
| % Recep. | Eficiencia de recepción | 36% |
| Blq #+ | % bloqueos positivos | 43% |
| % Blq # | % bloqueos punto | 23% |
| Atq Central | Eficiencia ataque central | 48% |
| Atq Alta | Eficiencia ataque alta | 20% |
| Atq Rápida | Eficiencia ataque rápida | 42% |
| Atq R#+ | Eficiencia recep+ en ataque | 50% |
| Atq R! | Eficiencia recep! en ataque | 36% |
| Atq R- | Eficiencia recep- en ataque | 26% |
| Atq TR | Eficiencia ataque tras recep | 34% |

**Colores:**
- 🟢 Verde: sobre objetivo
- 🟡 Amarillo: cerca del objetivo
- 🔴 Rojo: bajo objetivo

---

## SOLUCIÓN DE PROBLEMAS COMUNES

**El bat no encuentra el Excel:**
- Verificar que el Excel esté en la misma carpeta que el bat
- Verificar que esté guardado como `.xlsx` (no `.xlsm`)

**Los datos no se actualizan en la web:**
- Verificar que se subieron los archivos `.js` a GitHub
- Esperar 1-2 minutos para que Vercel actualice
- Hacer Ctrl+F5 en el navegador para limpiar caché

**Las baterías muestran valores incorrectos:**
- Verificar que `datos_partidos.js` esté subido a GitHub
- El archivo `objetivos_config.js` debe estar en GitHub

**Error en el bat:**
- Verificar que Python esté instalado
- Verificar que los Excels estén cerrados antes de correr el bat

---

## ARCHIVOS EN GITHUB

Los archivos que se suben a GitHub son:

### Se generan con el bat (actualizar después de cada partido/entrenamiento):
- `datos_casla.js` — estadísticas acumuladas oficiales
- `datos_partidos.js` — datos de todos los partidos + videos
- `datos_entrenamientos.js` — datos de todos los entrenamientos

### Se editan manualmente (solo cuando hay cambios en la app):
- `dashboard.html`, `jugador.html`, `analisis.html`
- `armadores.html`, `recepcion.html`, `historial_voley.html`
- `panel_voley.html`, `prep_fisica.html`, `videos.html`
- `objetivos_config.js` — configuración de baterías

### No tocar (se generan automáticamente o son fijos):
- `datos_historial.js` — historial DVW
- `datos_prep_fisica.js` — datos de preparación física
- `firebase.js` — conexión en tiempo real
- `game_plans.js`, `datos_gameplan.js` — planes de juego

