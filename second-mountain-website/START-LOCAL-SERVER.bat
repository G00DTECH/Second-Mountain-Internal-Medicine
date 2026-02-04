@echo off
REM Local Server Launcher for Second Mountain Internal Medicine Website
REM This script helps you test the website locally before deploying

echo =====================================================
echo Second Mountain Internal Medicine - Local Test Server
echo =====================================================
echo.

REM Check for Python
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Python found! Starting local server...
    echo.
    echo Your website will be available at:
    echo http://localhost:8000
    echo.
    echo Press Ctrl+C to stop the server
    echo =====================================================
    echo.
    python -m http.server 8000
    goto :end
)

REM Check for Python3
python3 --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Python3 found! Starting local server...
    echo.
    echo Your website will be available at:
    echo http://localhost:8000
    echo.
    echo Press Ctrl+C to stop the server
    echo =====================================================
    echo.
    python3 -m http.server 8000
    goto :end
)

REM No Python found
echo Python not found on your system.
echo.
echo To test locally, you need Python installed.
echo Download from: https://www.python.org/downloads/
echo.
echo OR simply deploy to Netlify - it's free and takes 5 minutes!
echo Visit: https://app.netlify.com/drop
echo.
pause
goto :end

:end
