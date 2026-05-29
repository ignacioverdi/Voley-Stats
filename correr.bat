@echo off
cd /d "%~dp0"
echo =============================================
echo CASLA VOLEY - Generando Game Plan
echo =============================================
python actualizar_gameplan.py
echo.
pause
