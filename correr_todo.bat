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
echo  OPCIONAL: Generar datos_historial.js
echo  (DVW/ = partidos, DVW_ENT/ = entrenamientos)
echo ==========================================
if exist DVW\*.dvw (
    echo Se encontraron archivos DVW. Generando historial...
    python generar_datos_historial.py
) else if exist DVW_ENT\*.dvw (
    echo Se encontraron entrenamientos DVW. Generando historial...
    python generar_datos_historial.py
)

echo.
echo ==========================================
echo  LISTO. Subir a GitHub:
echo   - datos_casla.js
echo   - datos_partidos.js
echo   - datos_entrenamientos.js
echo   - game_plans.js
if exist DVW\*.dvw echo   - datos_historial.js
if exist DVW_ENT\*.dvw echo   - datos_historial.js
echo ==========================================
pause
