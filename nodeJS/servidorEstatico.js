const http = require('http');

const server = http.createServer((request, response) => {
   response.writeHead(200, { 'Content-Type': 'text/html' });
   response.write('<!doctype html><html><head></head><body><h1>Sitio en desarrollo</h1></body></html>');
   response.write(request.url);
   response.write(request.method);
   response.end;
});

server.listen(8080);
console.log('Servidor escuchando en 8080');