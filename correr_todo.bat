@echo off
cd /d "%~dp0"
echo ==========================================
echo  CASLA VOLEY — Actualizar TODO
echo ==========================================
echo.
echo [1/3] Generando datos_casla.js...
python generar_datos_casla.py
if %errorlevel% neq 0 ( echo ERROR en datos_casla & pause & exit /b 1 )

echo.
echo [2/3] Generando datos_partidos.js...
python generar_datos_partidos.py
if %errorlevel% neq 0 ( echo ERROR en datos_partidos & pause & exit /b 1 )

echo.
echo [3/3] Generando datos_entrenamientos.js...
python generar_datos_entrenamientos.py
if %errorlevel% neq 0 ( echo ERROR en datos_entrenamientos & pause & exit /b 1 )

echo.
echo ==========================================
echo  LISTO. Subir a GitHub:
echo   - datos_casla.js
echo   - datos_partidos.js
echo   - datos_entrenamientos.js
echo ==========================================
pause
