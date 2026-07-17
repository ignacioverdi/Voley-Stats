@echo off
chcp 65001 >nul
cd /d "%~dp0"
title CASLA - BATERIAS (13 partidos)
color 0B
echo.
echo  ==================================================
echo      CASLA VOLEY  -  GENERAR BATERIAS (13 partidos)
echo  ==================================================
echo.
python --version >nul 2>&1
if errorlevel 1 (
    echo  [ERROR] No se encontro Python. Instalalo desde python.org
    echo.
    pause
    exit /b
)
python gen_baterias.py
echo.
echo  --------------------------------------------------
echo   Si dice LISTO, ya se genero datos_baterias.js
echo   Ahora subilo (y jugador.html) con PUBLICAR_EN_GITHUB.bat
echo  --------------------------------------------------
echo.
pause
