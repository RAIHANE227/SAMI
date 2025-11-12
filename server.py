#!/usr/bin/env python3
import http.server
import socketserver
import os

PORT = 5000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

class ReuseAddrTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

os.chdir('.')

with ReuseAddrTCPServer(("0.0.0.0", PORT), MyHTTPRequestHandler) as httpd:
    print(f"🌟 Royal Optique Médicale - Serveur démarré sur le port {PORT}")
    print(f"📍 Accédez au site sur http://0.0.0.0:{PORT}")
    httpd.serve_forever()
