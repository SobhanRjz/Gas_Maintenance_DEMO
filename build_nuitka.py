"""Nuitka build script for Gas Compressor PM React Application."""
import subprocess
import sys
import os
from pathlib import Path

def build_react_app():
    """Build the React application."""
    project_root = Path(__file__).parent

    print("🔨 Building React application...")
    print("Running: npm run build")
    print("-" * 40)

    try:
        # Check if node_modules exists
        node_modules = project_root / "node_modules"
        if not node_modules.exists():
            print("📦 Installing dependencies...")
            result = subprocess.run(["npm", "install"], cwd=str(project_root), check=True, shell=True)

        # Build the React app
        result = subprocess.run(["npm", "run", "build"], cwd=str(project_root), check=True, shell=True)

        # Check if dist directory was created
        dist_dir = project_root / "dist"
        if dist_dir.exists():
            print(f"✅ React build completed: {dist_dir}")
            return True
        else:
            print("❌ Build failed - dist directory not found")
            return False

    except subprocess.CalledProcessError as e:
        print(f"❌ React build failed: {e}")
        return False
    except FileNotFoundError:
        print("❌ npm not found. Please install Node.js")
        return False

def build_nuitka_standalone():
    """Build with Nuitka standalone mode (recommended)."""
    project_root = Path(__file__).parent

    # First build the React app
    if not build_react_app():
        return False

    cmd = [
        sys.executable, "-m", "nuitka",
        "--standalone",
        "--onefile",
        "--output-dir=build",
        "--output-filename=GasCompressorPM.exe",
        "--include-data-dir=dist=dist",
        "--assume-yes-for-downloads",
        "--show-progress",
        "--show-scons",
        "--follow-imports",
        "--include-module=encodings",
        "--include-module=codecs",
        "--include-module=http.server",
        "--include-module=socketserver",
        "--include-module=webbrowser",
        "--include-module=threading",
        "--include-module=pathlib",
        "--include-package=encodings",
        "--include-package=http",
        "--python-flag=no_site",
        "--python-flag=unbuffered",
        "--windows-company-name=Gas Compressor PM",
        "--windows-product-name=Gas Compressor Predictive Maintenance",
        "--windows-product-version=1.0.0",
        "--windows-file-version=1.0.0",
        "--windows-file-description=Gas Compressor PM Desktop Application",
        "launcher.py"
    ]

    print("\n🚀 Building executable with Nuitka...")
    print("Command:", " ".join(cmd))
    print("=" * 60)

    try:
        result = subprocess.run(cmd, cwd=str(project_root))
        return result.returncode == 0
    except KeyboardInterrupt:
        print("\n❌ Build interrupted by user")
        return False

def build_nuitka_minimal():
    """Build with minimal Nuitka options."""
    project_root = Path(__file__).parent

    # First build the React app
    if not build_react_app():
        return False

    cmd = [
        sys.executable, "-m", "nuitka",
        "--standalone",
        "--onefile",
        "--output-dir=build",
        "--output-filename=GasCompressorPM.exe",
        "--include-data-dir=dist=dist",
        "--assume-yes-for-downloads",
        "--show-progress",
        "--show-scons",
        "--follow-imports",
        "--include-module=encodings",
        "--include-module=codecs",
        "--include-module=http.server",
        "--include-module=socketserver",
        "--include-module=webbrowser",
        "--include-module=threading",
        "--include-module=pathlib",
        "--include-package=encodings",
        "--include-package=http",
        "--python-flag=no_site",
        "--python-flag=unbuffered",
        "--windows-company-name=Gas Compressor PM",
        "--windows-product-name=Gas Compressor Predictive Maintenance",
        "--windows-product-version=1.0.0",
        "--windows-file-version=1.0.0",
        "--windows-file-description=Gas Compressor PM Desktop Application",
        "launcher.py"
    ]

    print("\n🔧 Building executable with Nuitka (Minimal)...")
    print("Command:", " ".join(cmd))
    print("=" * 60)

    try:
        result = subprocess.run(cmd, cwd=str(project_root))
        return result.returncode == 0
    except KeyboardInterrupt:
        print("\n❌ Build interrupted by user")
        return False

def build_nuitka_debug():
    """Build with debug information."""
    project_root = Path(__file__).parent

    # First build the React app
    if not build_react_app():
        return False

    cmd = [
        sys.executable, "-m", "nuitka",
        "--standalone",
        "--onefile",
        "--output-dir=build",
        "--output-filename=GasCompressorPM.exe",
        "--include-data-dir=dist=dist",
        "--debug",
        "--show-progress",
        "--show-scons",
        "--follow-imports",
        "--include-module=encodings",
        "--include-module=codecs",
        "--include-module=http.server",
        "--include-module=socketserver",
        "--include-module=webbrowser",
        "--include-module=threading",
        "--include-module=pathlib",
        "--include-package=encodings",
        "--include-package=http",
        "--python-flag=no_site",
        "--python-flag=unbuffered",
        "--windows-company-name=Gas Compressor PM",
        "--windows-product-name=Gas Compressor Predictive Maintenance",
        "--windows-product-version=1.0.0",
        "--windows-file-version=1.0.0",
        "--windows-file-description=Gas Compressor PM Desktop Application",
        "launcher.py"
    ]

    print("\n🐛 Building executable with Nuitka (Debug mode)...")
    print("Command:", " ".join(cmd))
    print("=" * 60)

    try:
        result = subprocess.run(cmd, cwd=str(project_root))
        return result.returncode == 0
    except KeyboardInterrupt:
        print("\n❌ Build interrupted by user")
        return False

def build_nuitka_onefile_tempdir():
    """Build with onefile and tempdir handling for better compatibility."""
    project_root = Path(__file__).parent

    # First build the React app
    if not build_react_app():
        return False

    cmd = [
        sys.executable, "-m", "nuitka",
        "--standalone",
        "--onefile",
        "--onefile-tempdir-spec=%TEMP%/gas_pm_{PID}_{TIME}",
        "--output-dir=build",
        "--output-filename=GasCompressorPM.exe",
        "--include-data-dir=dist=dist",
        "--assume-yes-for-downloads",
        "--show-progress",
        "--show-scons",
        "--follow-imports",
        "--include-module=encodings",
        "--include-module=codecs",
        "--include-module=http.server",
        "--include-module=socketserver",
        "--include-module=webbrowser",
        "--include-module=threading",
        "--include-module=pathlib",
        "--include-package=encodings",
        "--include-package=http",
        "--python-flag=no_site",
        "--python-flag=unbuffered",
        "--windows-company-name=Gas Compressor PM",
        "--windows-product-name=Gas Compressor Predictive Maintenance",
        "--windows-product-version=1.0.0",
        "--windows-file-version=1.0.0",
        "--windows-file-description=Gas Compressor PM Desktop Application",
        "launcher.py"
    ]

    print("\n🔧 Building executable with Nuitka (Onefile with tempdir fix)...")
    print("Command:", " ".join(cmd))
    print("=" * 60)

    try:
        result = subprocess.run(cmd, cwd=str(project_root))
        return result.returncode == 0
    except KeyboardInterrupt:
        print("\n❌ Build interrupted by user")
        return False

def build_nuitka_standalone_only():
    """Build with Nuitka standalone mode only (no onefile)."""
    project_root = Path(__file__).parent

    # First build the React app
    if not build_react_app():
        return False

    cmd = [
        sys.executable, "-m", "nuitka",
        "--standalone",
        "--output-dir=build",
        "--output-filename=GasCompressorPM_standalone",
        "--include-data-dir=dist=dist",
        "--assume-yes-for-downloads",
        "--show-progress",
        "--show-scons",
        "--follow-imports",
        "--include-module=encodings",
        "--include-module=codecs",
        "--include-module=http.server",
        "--include-module=socketserver",
        "--include-module=webbrowser",
        "--include-module=threading",
        "--include-module=pathlib",
        "--include-package=encodings",
        "--include-package=http",
        "--python-flag=no_site",
        "--python-flag=unbuffered",
        "--windows-company-name=Gas Compressor PM",
        "--windows-product-name=Gas Compressor Predictive Maintenance",
        "--windows-product-version=1.0.0",
        "--windows-file-version=1.0.0",
        "--windows-file-description=Gas Compressor PM Desktop Application",
        "launcher.py"
    ]

    print("\n📁 Building executable with Nuitka (Standalone only)...")
    print("Command:", " ".join(cmd))
    print("=" * 60)

    try:
        result = subprocess.run(cmd, cwd=str(project_root))
        if result.returncode == 0:
            # Create a batch file to run the standalone version
            batch_content = '''@echo off
cd /d "%~dp0"
start "" "GasCompressorPM_standalone.exe"
'''
            batch_path = project_root / "build" / "run_standalone.bat"
            with open(batch_path, 'w') as f:
                f.write(batch_content)
            print("✅ Created run_standalone.bat to launch the application")
        return result.returncode == 0
    except KeyboardInterrupt:
        print("\n❌ Build interrupted by user")
        return False

def check_nuitka():
    """Check if Nuitka is available."""
    try:
        result = subprocess.run(
            [sys.executable, "-m", "nuitka", "--version"],
            capture_output=True,
            text=True
        )
        if result.returncode == 0:
            print(f"✅ Nuitka version: {result.stdout.strip()}")
            return True
        else:
            print("❌ Nuitka not working properly")
            return False
    except FileNotFoundError:
        print("❌ Nuitka not installed")
        return False

def install_nuitka():
    """Install Nuitka."""
    print("📦 Installing Nuitka...")
    try:
        subprocess.run([
            sys.executable, "-m", "pip", "install", "nuitka"
        ], check=True)
        print("✅ Nuitka installed successfully!")
        return True
    except subprocess.CalledProcessError:
        print("❌ Failed to install Nuitka")
        return False

def main():
    """Main build function with menu."""
    print("🔥 Nuitka Build System for Gas Compressor PM")
    print("=" * 60)
    print("📱 React Desktop Application Builder")
    print("=" * 60)

    # Check Node.js
    try:
        result = subprocess.run(["node", "--version"], capture_output=True, text=True)
        if result.returncode == 0:
            print(f"✅ Node.js: {result.stdout.strip()}")
        else:
            print("❌ Node.js not working properly")
            return
    except FileNotFoundError:
        print("❌ Node.js not found. Please install Node.js from https://nodejs.org")
        return

    # Check npm
    try:
        # Try multiple ways to find npm
        npm_commands = [
            ["npm", "--version"],
            ["where", "npm"],  # Windows specific
            ["which", "npm"]   # Unix-like systems
        ]

        npm_found = False
        for cmd in npm_commands:
            try:
                result = subprocess.run(cmd, capture_output=True, text=True, shell=True)
                if result.returncode == 0 and "npm" in result.stdout.lower():
                    npm_found = True
                    # Extract version if it's the version command
                    if cmd[1] == "--version":
                        version = result.stdout.strip().split()[-1] if result.stdout.strip() else "unknown"
                        print(f"✅ npm: {version}")
                    else:
                        print("✅ npm: found")
                    break
            except (FileNotFoundError, subprocess.SubprocessError):
                continue

        if not npm_found:
            print("❌ npm not found. Please install Node.js from https://nodejs.org")
            print("   Or ensure npm is in your PATH environment variable")
            return
    except Exception as e:
        print(f"❌ Error checking npm: {e}")
        return

    # Check Nuitka
    if not check_nuitka():
        print("\n❌ Nuitka not found!")
        install = input("Install Nuitka? (y/n): ").lower().strip()
        if install == 'y':
            if not install_nuitka():
                return
        else:
            return

    print("\nSelect build option:")
    print("1. 🚀 Standalone + Onefile (Recommended)")
    print("2. 🔧 Minimal build")
    print("3. 🐛 Debug build")
    print("4. 📁 Standalone only (No onefile)")
    print("5. 🔧 Onefile with tempdir fix")
    print("=" * 60)

    choice = input("Enter choice (1-5): ").strip()

    success = False

    if choice == "1":
        success = build_nuitka_standalone()
    elif choice == "2":
        success = build_nuitka_minimal()
    elif choice == "3":
        success = build_nuitka_debug()
    elif choice == "4":
        success = build_nuitka_standalone_only()
    elif choice == "5":
        success = build_nuitka_onefile_tempdir()
    else:
        print("❌ Invalid choice")
        return

    if success:
        print("\n🎉 Build completed successfully!")

        # Check if executable exists (handle both onefile and standalone builds)
        exe_path_onefile = Path("build/GasCompressorPM.exe")
        exe_path_standalone = Path("build/GasCompressorPM_standalone.exe")

        if exe_path_onefile.exists():
            size = exe_path_onefile.stat().st_size
            print(f"✅ Executable: {exe_path_onefile}")
            print(f"📊 Size: {size:,} bytes ({size/1024/1024:.1f} MB)")
            print("\n🚀 To run the application, double-click the exe file!")
            print("📝 The application will open in your default browser")
        elif exe_path_standalone.exists():
            size = exe_path_standalone.stat().st_size
            print(f"✅ Standalone executable: {exe_path_standalone}")
            print(f"📊 Size: {size:,} bytes ({size/1024/1024:.1f} MB)")
            print("\n🚀 To run the application:")
            print("   Option 1: Double-click 'run_standalone.bat'")
            print("   Option 2: Run 'GasCompressorPM_standalone.exe' directly")
            print("📝 The application will open in your default browser")
        else:
            print("⚠️ Executable not found in build/ directory")
    else:
        print("\n❌ Build failed!")
        print("🔧 Check the output above for error details")
        print("💡 Common issues:")
        print("   - Make sure Node.js and npm are installed")
        print("   - Check that all npm dependencies are installed")
        print("   - Ensure the React build completes successfully")

if __name__ == "__main__":
    main()
