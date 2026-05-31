@echo off
cd /d "%~dp0"
echo ==========================================
echo  CASLA VOLEY — Generar datos_entrenamientos.js
echo ==========================================
python generar_datos_entrenamientos.py
echo.
if %errorlevel% neq 0 (
    echo ERROR: Algo salio mal. Revisa el Excel y volve a intentar.
    pause
) else (
    echo Listo! Subir datos_entrenamientos.js a GitHub.
    pause
)
