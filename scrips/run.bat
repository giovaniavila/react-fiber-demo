@echo off
title React Fiber Mock CLI
color 0A

echo ===================
echo 🧠 React Fiber Mock CLI
echo ===================

echo 1. Start Project
echo 2. Build Project
echo 3. Clear Project
echo 4. Commit Changes
echo 5. Exit
echo ===================
set /p option=Choose an option:

if "%option%"=="1" (
    echo 🚀 Starting Project...
    npx live-server index.html
)

if "%option%"=="2" (
    echo ⚙️  Building Project...
    mkdir dist
    xcopy public dist /E /I /Y
    echo ✅ Build Completed!
)

if "%option%"=="3" (
    echo 🧹 Cleaning Project...
    rd /s /q dist
    echo ✅ Clean Completed!
)

if "%option%"=="4" (
    set /p message=Enter Commit Message: 
    git add .
    git commit -m "%message%"
    echo ✅ Commit Done!
)
