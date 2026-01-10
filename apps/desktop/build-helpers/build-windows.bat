@echo off
REM Windows helper to build installer (run from PowerShell or cmd)
cd /d %~dp0\..

echo Installing dependencies...
npm install

echo Building renderer and packaging for Windows...
npm run dist:win

echo Done. Check the release/ or dist/ folder for artifacts.
