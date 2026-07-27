@echo off
chcp 65001 >nul
cd /d "%~dp0"
title Limpiar el repo de CASLA
color 0B
echo.
echo   ================================================
echo      LIMPIAR EL REPO
echo   ================================================
echo.
echo   Saca del repositorio la basura que genera Python
echo   y le pone el punto al gitignore.
echo.

REM ── el .gitignore, con el nombre correcto ─────────────────────────────
if exist "gitignore.txt" (
    if exist ".gitignore" del ".gitignore"
    ren "gitignore.txt" ".gitignore"
    echo   [ok] .gitignore puesto
) else (
    if exist ".gitignore" (
        echo   [ok] .gitignore ya estaba
    ) else (
        echo   [ATENCION] No encuentro el gitignore. Bajalo y volve a correr esto.
        echo.
        pause & exit /b 1
    )
)

REM ── sacar del seguimiento lo que ya se habia subido ───────────────────
where git >nul 2>&1
if errorlevel 1 (
    echo   [ERROR] No encuentro git.
    echo.
    pause & exit /b 1
)
git rm -r --cached __pycache__ >nul 2>&1
if errorlevel 1 (
    echo   [ok] no habia __pycache__ subido
) else (
    echo   [ok] __pycache__ sacado del repositorio
)
if exist "__pycache__" rmdir /s /q "__pycache__"

echo.
echo   ------------------------------------------------
git status --short
echo   ------------------------------------------------
echo.
echo   Listo. Ahora publica con PUBLICAR_EN_GITHUB.bat
echo.
pause
