@echo off
chcp 65001 >nul
title CONECTAR CON GITHUB (CASLA - una sola vez)
color 0B
cd /d "%~dp0"
set GIT_MERGE_AUTOEDIT=no
echo.
echo  ==================================================
echo     CONECTAR ESTA CARPETA CON GITHUB  (una sola vez)
echo     Proyecto CASLA / Voley-Stats
echo  ==================================================
echo.
git --version >nul 2>&1
if errorlevel 1 (
  echo  [ERROR] No tenes Git instalado.
  echo  Instalalo gratis desde:  https://git-scm.com/download/win
  echo  Despues volve a correr este archivo.
  echo.
  pause ^& exit /b
)
echo  Git detectado.
echo.
if exist ".git" (
  echo  Esta carpeta YA estaba conectada. No hace falta reconectar.
  echo  Para subir cambios usa:  PUBLICAR_EN_GITHUB.bat
  echo.
  pause ^& exit /b
)
echo  Conectando con tu repositorio Voley-Stats...
echo  (Puede abrirse el navegador para iniciar sesion en GitHub la primera vez.)
echo.
git init
git remote add origin https://github.com/ignacioverdi/Voley-Stats.git
git add -A
git commit -m "Conectar carpeta CASLA con GitHub"
git branch -M main
echo.
echo  Trayendo lo que ya hay en GitHub y fusionando (no se pierde nada)...
git fetch origin main
git merge --allow-unrelated-histories --no-edit -X ours origin/main
echo.
echo  Subiendo...
git push -u origin main
if errorlevel 1 (
  echo.
  echo  [ATENCION] No se pudo subir. Revisa que hayas iniciado sesion en GitHub
  echo  cuando se abrio el navegador, y volve a correr este archivo.
  echo.
  pause ^& exit /b
)
echo.
echo  ==================================================
echo     LISTO. Carpeta conectada con GitHub.
echo     De ahora en mas, para subir cambios:
echo        doble clic en  PUBLICAR_EN_GITHUB.bat
echo  ==================================================
echo.
pause
