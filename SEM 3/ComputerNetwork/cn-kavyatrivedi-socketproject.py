import socket
import webbrowser
from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer

# It is the project of CN of kavya trivedi 1157 
# Define host and port this project is related to kavya trivedi
HOST = '127.0.0.1'  # Localhost
PORT = 3000        # Port to serve the website
# this project is related to kavya trivedi
# Start the server
class CustomHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':  
            self.path = 'index.html'  # Default to index.html
        return super().do_GET()

try:
    with TCPServer((HOST, PORT), CustomHandler) as httpd:
        print(f"Serving on http://{HOST}:{PORT}")
            # this project is related to kavya trivedi
        # Automatically open the website in the default browser
        webbrowser.open(f"http://{HOST}:{PORT}")
        # this project is related to kavya trivedi
        # Keep the server running
        httpd.serve_forever()
except OSError as e:
    print(f"Error: {e}")