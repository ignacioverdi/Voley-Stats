@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion
title CORRER CASLA - Sistema completo
color 0B

echo.
echo  ==================================================
echo     CASLA VOLEY - ACTUALIZACION COMPLETA
echo  ==================================================
echo.

REM --- 1. Verificar Python ---
python --version >nul 2>&1
if errorlevel 1 (
    echo  [ERROR] No se encontro Python. Instalalo desde python.org
    echo.
    pause & exit /b
)

REM --- 2. Detectar la carpeta de temporada del ano MAS ALTO ---
set "TEMPORADA_DIR="
set "ANIO_MAX=0"
for /d %%D in ("DVW CASLA *") do (
    set "NOMBRE=%%D"
    set "ANIO=!NOMBRE:DVW CASLA =!"
    if !ANIO! GTR !ANIO_MAX! (
        set "ANIO_MAX=!ANIO!"
        set "TEMPORADA_DIR=%%D"
    )
)

if "!TEMPORADA_DIR!"=="" (
    echo  [ERROR] No encontre ninguna carpeta "DVW CASLA 20XX"
    echo  Crea una carpeta, por ejemplo: DVW CASLA 2026
    echo  y pone adentro los archivos .dvw
    echo.
    pause & exit /b
)

echo  Temporada detectada: !TEMPORADA_DIR! (ano !ANIO_MAX!)
echo.

REM --- 3. Contar DVW ---
set "NDVW=0"
for %%F in ("!TEMPORADA_DIR!\*.dvw") do set /a NDVW+=1
echo  Archivos DVW encontrados: !NDVW!
echo.

if !NDVW!==0 (
    echo  [ATENCION] No hay archivos .dvw en !TEMPORADA_DIR!
    echo  Igual sigo para regenerar el resto...
    echo.
)

REM --- 4. Liga + heatmaps + tabla + base (update_db_casla) ---
if !NDVW! GTR 0 (
    echo  [1/7] Procesando partidos: liga, heatmaps, tabla, game plan...
    echo.
    python update_db_casla.py --dvw_dir "!TEMPORADA_DIR!" --temporada !ANIO_MAX!
    echo.
)

REM --- 5. Datos para dashboard / jugador / analisis (datos_casla.js) ---
echo  [2/7] Generando datos por jugador y equipo...
echo.
python generar_datos_casla.py
echo.

REM --- 6. Partidos: game_plans.js + datos_partidos.js (corre DESPUES de update_db_casla) ---
echo  [3/7] Generando datos de partidos y game plans...
echo.
python generar_datos_partidos.py
echo.

REM --- 7. Entrenamientos (datos_entrenamientos.js) ---
echo  [4/7] Generando datos de entrenamientos...
echo.
python generar_datos_entrenamientos.py
echo.

REM --- 8. Historial (datos_historial.js) ---
echo  [5/7] Generando historial...
echo.
python generar_datos_historial.py
echo.

REM --- 9. Game plans por rival (game_plan_<rival>.html) ---
echo  [6/7] Generando game plans por rival...
echo.
python actualizar_gameplan.py
echo.

REM --- 10. Videos: highlights (Excel) + CORTES de video (segundos del DVW) ---
echo  [7/7] Generando videos y cortes...
echo.
if exist videos_casla.xlsx (
    python build_videos.py videos_casla.xlsx
) else (
    echo  (no encontre videos_casla.xlsx - salteo los highlights)
)
python build_video.py "!TEMPORADA_DIR!" datos_video.js VIDEO_DATA
echo.

REM --- 11. Publicar a GitHub ---
echo  ==================================================
echo     Listo! Todo regenerado.
echo  ==================================================
echo.
set /p PUB="Publicar a GitHub ahora? (S = si / N = no): "
if /i "%PUB%"=="S" (
    echo.
    call PUBLICAR_EN_GITHUB.bat
) else (
    echo.
    echo  OK, no se publico. Cuando quieras, corre PUBLICAR_EN_GITHUB.bat
    echo.
    pause
)
