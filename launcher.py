#!/usr/bin/env python3
"""
Gas Compressor PM Desktop Application Launcher

This script serves the built React application using a local HTTP server
and opens it in the default web browser.
"""

import sys
import os
import time
import webbrowser
import logging
import http.server
import socketserver
import threading
from pathlib import Path
from datetime import datetime

class ApplicationLogger:
    """Handles logging for the application."""

    def __init__(self):
        self.log_file = self._get_log_path()
        self._setup_logging()

    def _get_log_path(self) -> Path:
        """Get the log file path."""
        if getattr(sys, 'frozen', False):
            base_dir = Path(sys.executable).parent
        else:
            base_dir = Path(__file__).parent

        return base_dir / "gas_compressor_pm_log.txt"

    def _setup_logging(self):
        """Setup logging configuration."""
        self.logger = logging.getLogger('gas-compressor-pm')
        self.logger.setLevel(logging.INFO)

        # Console handler only (simplified for desktop app)
        console_formatter = logging.Formatter(
            '%(asctime)s - %(levelname)s - %(message)s'
        )

        console_handler = logging.StreamHandler(sys.stdout)
        console_handler.setLevel(logging.INFO)
        console_handler.setFormatter(console_formatter)

        self.logger.addHandler(console_handler)

class ReactAppHandler(http.server.SimpleHTTPRequestHandler):
    """Custom HTTP handler for serving the React app."""

    def __init__(self, *args, directory=None, **kwargs):
        super().__init__(*args, directory=directory, **kwargs)

    def log_message(self, format, *args):
        """Override to use our logger."""
        logger = logging.getLogger('gas-compressor-pm')
        logger.info(f"[HTTP] {format % args}")

    def do_GET(self):
        """Handle GET requests with SPA fallback and proper MIME types."""
        # Get the requested path
        path = self.path

        # Remove query parameters for file checking
        clean_path = path.split('?')[0]
        if clean_path.startswith('/'):
            clean_path = clean_path[1:]

        # Handle app mounted at /Gas_Maintenance_DEMO/
        prefix = 'Gas_Maintenance_DEMO/'
        if clean_path.startswith(prefix):
            clean_path = clean_path[len(prefix):]

        # Check if file exists
        file_path = Path(self.directory) / clean_path

        if file_path.is_file():
            # Set proper MIME types for different file extensions
            if file_path.suffix in ['.js', '.mjs']:
                self.send_response(200)
                self.send_header('Content-type', 'application/javascript; charset=utf-8')
                self.send_header('Cache-Control', 'no-cache')
                self.send_header('X-Content-Type-Options', 'nosniff')
                self.end_headers()
                with open(file_path, 'rb') as f:
                    self.wfile.write(f.read())
            elif file_path.suffix == '.css':
                self.send_response(200)
                self.send_header('Content-type', 'text/css; charset=utf-8')
                self.send_header('Cache-Control', 'no-cache')
                self.send_header('X-Content-Type-Options', 'nosniff')
                self.end_headers()
                with open(file_path, 'rb') as f:
                    self.wfile.write(f.read())
            elif file_path.suffix in ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico']:
                # Handle images
                self.send_response(200)
                if file_path.suffix == '.svg':
                    self.send_header('Content-type', 'image/svg+xml')
                elif file_path.suffix in ['.png', '.jpg', '.jpeg', '.gif', '.ico']:
                    self.send_header('Content-type', f'image/{file_path.suffix[1:]}')
                self.send_header('Cache-Control', 'max-age=31536000')
                self.end_headers()
                with open(file_path, 'rb') as f:
                    self.wfile.write(f.read())
            else:
                # For other files, use default handling
                super().do_GET()
        else:
            # For SPA routing, serve index.html for any non-file request
            index_path = Path(self.directory) / "index.html"
            if index_path.is_file():
                self.send_response(200)
                self.send_header('Content-type', 'text/html; charset=utf-8')
                self.send_header('Cache-Control', 'no-cache')
                self.send_header('X-Content-Type-Options', 'nosniff')
                self.end_headers()
                with open(index_path, 'rb') as f:
                    self.wfile.write(f.read())
            else:
                self.send_error(404, "File not found")

def find_available_port(start_port=3000, max_attempts=10):
    """Find an available port starting from start_port."""
    import socket

    for port in range(start_port, start_port + max_attempts):
        try:
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
                sock.bind(('127.0.0.1', port))
                return port
        except OSError:
            continue

    raise RuntimeError(f"No available ports found between {start_port} and {start_port + max_attempts - 1}")

def main():
    """Launch the React application server and open browser."""
    logger = ApplicationLogger()
    log = logger.logger

    try:
        log.info("=" * 60)
        log.info("🚀 Gas Compressor PM Desktop Application")
        log.info("=" * 60)

        # Get the application directory
        if getattr(sys, 'frozen', False):
            # Running as compiled executable
            app_dir = Path(sys.executable).parent
            dist_dir = app_dir / "dist"
            log.info(f"📁 Running from executable: {app_dir}")
        else:
            # Running as script
            app_dir = Path(__file__).parent
            dist_dir = app_dir / "dist"
            log.info(f"📁 Running from script: {app_dir}")

        # Check if dist directory exists
        if not dist_dir.exists():
            log.error(f"❌ Build directory not found: {dist_dir}")
            log.error("Please run 'npm run build' first to create the production build")
            input("Press Enter to exit...")
            return

        # Check if index.html exists
        index_file = dist_dir / "index.html"
        if not index_file.exists():
            log.error(f"❌ index.html not found in: {dist_dir}")
            log.error("Please ensure the React app is properly built")
            input("Press Enter to exit...")
            return

        log.info(f"✅ Found build directory: {dist_dir}")

        # Find available port
        try:
            port = find_available_port(3000)
            log.info(f"🌐 Using port: {port}")
        except RuntimeError as e:
            log.error(f"❌ {e}")
            input("Press Enter to exit...")
            return

        # Change to dist directory for serving files
        os.chdir(dist_dir)

        # Create custom handler with the dist directory
        handler = lambda *args, **kwargs: ReactAppHandler(*args, directory=str(dist_dir), **kwargs)

        # Start HTTP server
        try:
            with socketserver.TCPServer(('127.0.0.1', port), handler) as httpd:
                server_url = f"http://127.0.0.1:{port}/Gas_Maintenance_DEMO/"
                log.info(f"🌐 Server started at: {server_url}")
                log.info("📱 Opening application in browser...")
                log.info("❌ Press Ctrl+C to stop the server")

                # Open browser after a short delay
                def open_browser():
                    try:
                        time.sleep(1)
                        log.info("🌐 Launching browser...")
                        webbrowser.open(server_url)
                    except Exception as e:
                        log.error(f"❌ Failed to open browser: {e}")

                browser_thread = threading.Thread(target=open_browser, daemon=True)
                browser_thread.start()

                # Serve forever
                log.info("🚀 Application is running! Press Ctrl+C to exit.")
                httpd.serve_forever()

        except KeyboardInterrupt:
            log.info("🛑 Server stopped by user")
        except OSError as e:
            log.error(f"❌ Network Error: {e}")
            log.error("💡 Try running as administrator or use a different port")
            input("Press Enter to exit...")

    except Exception as e:
        log.error(f"❌ Unexpected Error: {e}")
        import traceback
        log.error(traceback.format_exc())
        input("Press Enter to exit...")

if __name__ == "__main__":
    main()
