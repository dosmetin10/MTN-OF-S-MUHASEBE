#!/usr/bin/env bash
set -euo pipefail

echo "Running Windows build helper (for use on Windows Subsystem for Linux or similar)..."
cd "$(dirname "$0")/.."

echo "Installing dependencies..."
npm install

echo "Building renderer and packaging for Windows..."
npm run dist:win

echo "Done. Check the release/ or dist/ folder for artifacts."
