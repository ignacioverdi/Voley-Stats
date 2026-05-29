@echo off
cd /d "%~dp0"
echo ==========================================
echo  CASLA VOLEY — Generar datos_casla.js
echo ==========================================
python generar_datos_casla.py
echo.
if %errorlevel% neq 0 (
    echo ERROR: Algo salio mal. Revisa el Excel y volvé a intentar.
    pause
) else (
    echo Listo! Subir datos_casla.js a GitHub.
    pause
)
