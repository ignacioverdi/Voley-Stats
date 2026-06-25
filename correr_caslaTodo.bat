@echo off
chcp 65001 >nul
title CORRER CASLA - Actualizar sistema
color 0B

echo.
echo  ============================================
echo     CASLA VOLEY - ACTUALIZAR SISTEMA
echo  ============================================
echo.

REM --- Verificar que Python este instalado ---
python --version >nul 2>&1
if errorlevel 1 (
    echo  [ERROR] No se encontro Python.
    echo  Instalalo desde python.org o avisa.
    echo.
    pause
    exit /b
)

REM --- Verificar que exista el Excel ---
if not exist videos_casla.xlsx (
    echo  [ERROR] No encontre videos_casla.xlsx en esta carpeta.
    echo  Poné este .bat en la misma carpeta que el Excel.
    echo.
    pause
    exit /b
)

echo  [1/2] Procesando videos y fixture desde el Excel...
echo.
python build_videos.py videos_casla.xlsx

echo.
echo  ============================================
if exist videos.js if exist proximo_rival.js (
    echo     LISTO - Archivos generados:
    echo  ============================================
    echo.
    echo     - videos.js
    echo     - proximo_rival.js
    echo.
    echo     AHORA: subi estos 2 archivos a GitHub
    echo     repo: ignacioverdi/Voley-Stats
    echo.
    echo     Despues entra a Vercel y listo.
) else (
    echo     [ATENCION] Algo fallo, revisa los mensajes de arriba.
)
echo  ============================================
echo.
pause
