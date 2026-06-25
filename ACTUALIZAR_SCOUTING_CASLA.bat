@echo off
title Actualizar Scouting CASLA
cd /d "%~dp0"

echo ============================================================
echo    ACTUALIZAR SCOUTING DEL RIVAL - CASLA (San Lorenzo)
echo ============================================================
echo.
echo  Carpeta: %CD%
echo.

if not exist "gen_scouting.py" (
  echo  [ERROR] No encuentro gen_scouting.py en esta carpeta.
  echo  Pone este .bat junto a gen_scouting.py y dvw_engine.py.
  echo.
  pause
  exit /b 1
)
if not exist "dvw_engine.py" (
  echo  [ERROR] No encuentro dvw_engine.py - la libreria que lee los .dvw.
  echo.
  pause
  exit /b 1
)

REM --- Buscar la carpeta de partidos: prueba varios nombres posibles ---
set "DVWDIR="
for %%D in ("DVW CASLA 2026" "DVW_CASLA" "DVW CASLA" "DVW CASLA 2025" "DVW") do (
  if not defined DVWDIR if exist "%%~D\*.dvw" set "DVWDIR=%%~D"
)

if not defined DVWDIR (
  echo  [ERROR] No encuentro la carpeta con los partidos .dvw
  echo  Probe con: "DVW CASLA 2026", "DVW_CASLA", "DVW CASLA", "DVW".
  echo.
  echo  Carpetas que SI hay aca:
  for /d %%F in (*) do echo      - %%F
  echo.
  echo  Si la tuya no esta en la lista de arriba, avisame el nombre exacto.
  echo.
  pause
  exit /b 1
)

echo  Carpeta de partidos encontrada: "%DVWDIR%"
echo.

set "PY="
where python >nul 2>&1 && set "PY=python"
if not defined PY ( where py >nul 2>&1 && set "PY=py" )
if not defined PY ( where python3 >nul 2>&1 && set "PY=python3" )

if not defined PY (
  echo  [ERROR] No encuentro Python instalado.
  echo  Bajalo de https://www.python.org/downloads/ y marca "Add Python to PATH".
  echo.
  pause
  exit /b 1
)

echo  Generando el scouting con %PY% ... puede tardar unos segundos.
echo.

%PY% gen_scouting.py --dvw_dir "%DVWDIR%" --output_dir .

if errorlevel 1 (
  echo.
  echo  [ERROR] Algo fallo al generar. Mira el mensaje de arriba.
  echo.
  pause
  exit /b 1
)

echo.
echo ============================================================
echo   LISTO. Se actualizo:  scouting_rival.js
echo.
echo   Subi ese archivo al repo de GitHub y queda actualizado.
echo ============================================================
echo.
pause
