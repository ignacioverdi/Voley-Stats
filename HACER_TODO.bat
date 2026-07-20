@echo off
chcp 65001 >nul
cd /d "%~dp0"
setlocal enabledelayedexpansion
title CASLA - HACER TODO
color 0B

echo.
echo  ==================================================
echo      CASLA VOLEY  -  HACER TODO  (un solo paso)
echo      Partidos + Entrenamientos + Publicar
echo  ==================================================
echo.

REM ===== Verificar Python =====
python --version >nul 2>&1
if errorlevel 1 (
    echo  [ERROR] No se encontro Python. No puedo procesar los .dvw.
    echo  Instalalo desde python.org . Igual podes publicar mas abajo.
    echo.
    goto LINKS
)

REM ================= PARTIDOS =================
echo  ===================== PARTIDOS =====================
set "DVW_DIR="
set "ANIO=0"
for /d %%D in ("DVW CASLA *") do (
    set "N=%%D"
    set "A=!N:DVW CASLA =!"
    if !A! GTR !ANIO! (
        set "ANIO=!A!"
        set "DVW_DIR=%%D"
    )
)

if "!DVW_DIR!"=="" (
    echo  [ATENCION] No encontre carpeta "DVW CASLA 20XX".  SALTEO partidos.
    echo.
    goto ENTRENAMIENTOS
)

set "NDVW=0"
for %%F in ("!DVW_DIR!\*.dvw") do set /a NDVW+=1
echo  Carpeta: "!DVW_DIR!"   ^(temporada !ANIO! - !NDVW! .dvw^)
echo.

if !NDVW! GTR 0 (
    echo  [1/7] Procesando partidos: liga, heatmaps, tabla...
    python update_db_casla.py --dvw_dir "!DVW_DIR!" --temporada !ANIO!
python gen_plan_partido.py --dvw_dir "!DVW_DIR!" --output_dir .
    echo  [1b/7] Baterias de los partidos...
    python gen_baterias.py "!DVW_DIR!"
    if errorlevel 1 echo      [aviso] Hubo un problema en partidos. Mira arriba; sigo igual.
) else (
    echo  [1/7] No hay .dvw nuevos. Regenero los datos igual.
)
echo.
echo  [2/7] Datos por jugador y equipo...
python generar_datos_casla.py
if errorlevel 1 echo      [aviso] Problema en datos_casla. Sigo igual.
echo.
echo  [3/7] Datos de partidos y game plans...
python generar_datos_partidos.py
if errorlevel 1 echo      [aviso] Problema en datos de partidos. Sigo igual.
echo.
echo  [4/7] Datos de entrenamientos...
python generar_datos_entrenamientos.py
if errorlevel 1 echo      [aviso] Problema en datos de entrenamientos. Sigo igual.
echo.
echo  [5/7] Historial...
python generar_datos_historial.py
if errorlevel 1 echo      [aviso] Problema en historial. Sigo igual.
echo.
echo.
echo  [6/7] Videos destacados (si hay Excel)...
if exist "videos_casla.xlsx" python build_videos.py videos_casla.xlsx
echo.
echo  [7/7] Cortes de video de partidos...
python build_video.py "!DVW_DIR!" datos_video.js VIDEO_DATA
if errorlevel 1 echo      [aviso] Problema en cortes de partidos. Sigo igual.
echo.
echo  [+]   Solapa de bloqueo del plan de partido...
python gen_bloqueo.py
if errorlevel 1 echo      [aviso] Problema generando el bloqueo. Sigo igual.
echo.

REM ================= ENTRENAMIENTOS =================
:ENTRENAMIENTOS
echo  ================== ENTRENAMIENTOS ==================
set "ENT_DIR="
set "ENT_ANIO=0"
for /d %%D in ("DVW ENTRENAMIENTOS *") do (
    set "EN=%%D"
    set "EA=!EN:DVW ENTRENAMIENTOS =!"
    if !EA! GTR !ENT_ANIO! (
        set "ENT_ANIO=!EA!"
        set "ENT_DIR=%%D"
    )
)

if "!ENT_DIR!"=="" (
    echo  No hay carpeta de entrenamientos. SALTEO ^(es normal si no scouteaste practicas^).
    echo.
    goto LINKS
)

set "NENT=0"
for %%F in ("!ENT_DIR!\*.dvw") do set /a NENT+=1
if !NENT!==0 (
    echo  La carpeta "!ENT_DIR!" no tiene .dvw.  SALTEO entrenamientos.
    echo.
    goto LINKS
)

echo  Carpeta: "!ENT_DIR!"   ^(!NENT! practicas^)
echo.
echo  [1/2] Procesando entrenamientos...
python update_db_entrenamientos.py --dvw_dir "!ENT_DIR!" --temporada !ENT_ANIO!
if errorlevel 1 echo      [aviso] Las stats de entrenamiento dieron error, pero los cortes igual se generan. Sigo.
echo.
echo  [2/2] Cortes de video de entrenamientos...
python build_video.py "!ENT_DIR!" datos_video_ent.js VIDEO_DATA_ENT ent
if errorlevel 1 echo      [aviso] Problema en cortes de entrenamiento. Sigo igual.
echo.

REM ================= VERIFICACION + LINKS =================
:LINKS
echo  ==================================================
echo      VERIFICACION (archivos clave):
if exist "liga_data.js"          (echo      OK  liga_data.js)          else (echo      --  falta liga_data.js)
if exist "datos_casla.js"        (echo      OK  datos_casla.js)        else (echo      --  falta datos_casla.js)
if exist "datos_partidos.js"     (echo      OK  datos_partidos.js)     else (echo      --  falta datos_partidos.js)
if exist "datos_video.js"        (echo      OK  datos_video.js)        else (echo      --  falta datos_video.js)
echo  ==================================================
echo.
echo.

REM ================= PUBLICAR =================
set "RESP="
set /p "RESP=Queres PUBLICAR a GitHub ahora? (S/N): "
if /i "!RESP!"=="S" goto PUBLICAR
echo.
echo  OK, NO se publico. Cuando quieras, volve a correr este bat.
echo.
pause
goto FIN

:PUBLICAR
echo.
git --version >nul 2>&1
if errorlevel 1 goto NOGIT
if not exist ".git" goto NOREPO
set GIT_MERGE_AUTOEDIT=no
echo  Subiendo a GitHub... (la primera vez puede pedir login)
git add -A
git commit -m "Actualizacion %DATE%"
git pull --no-rebase --no-edit -X ours
git push
echo.
echo  ==================================================
echo      Si arriba NO hay errores en rojo, se publico OK.
echo      En 1-2 minutos la web queda actualizada.
echo  ==================================================
echo.
pause
goto FIN

:NOGIT
echo.
echo  [ERROR] No tenes Git instalado: https://git-scm.com/download/win
echo.
pause
goto FIN

:NOREPO
echo.
echo  [ATENCION] Esta carpeta no esta conectada a GitHub.
echo  Corre esto DENTRO de la carpeta del proyecto CASLA (Voley-Stats).
echo.
pause
goto FIN

:FIN
endlocal
