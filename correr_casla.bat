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
    echo  Igual sigo para regenerar videos y fixture...
    echo.
)

REM --- 4. Procesar DVW (actualiza BD, heatmaps, liga_data, tabla) ---
if !NDVW! GTR 0 (
    echo  [1/3] Procesando partidos y regenerando el sistema...
    echo.
    python update_db_casla.py --dvw_dir "!TEMPORADA_DIR!" --temporada !ANIO_MAX!
    echo.
)

REM --- 5. Generar videos.js + proximo_rival.js ---
if exist videos_casla.xlsx (
    echo  [2/3] Generando videos y proximo rival desde el Excel...
    echo.
    python build_videos.py videos_casla.xlsx
    echo.
) else (
    echo  [2/3] No encontre videos_casla.xlsx - salteo videos.
    echo.
)

REM --- 6. Resumen ---
echo  [3/3] Listo!
echo.
echo  ==================================================
echo     ARCHIVOS PARA SUBIR A GITHUB (Voley-Stats):
echo  ==================================================
echo.
if exist liga_data.js          echo     - liga_data.js
if exist casla_stats_table.html echo     - casla_stats_table.html
if exist datos_partidos.js     echo     - datos_partidos.js
if exist videos.js             echo     - videos.js
if exist proximo_rival.js      echo     - proximo_rival.js
echo.
echo     (subi los heatmaps hm_*.html solo si cambiaron equipos)
echo.
echo     Despues entra a Vercel y se actualiza solo.
echo  ==================================================
echo.
pause
