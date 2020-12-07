const http = require('htpp');
const url = require('url');

const server = http.createServer((request,response) =>{
   const sUrl = url.parse(request.url);
   console.log('camino completo del recurso y parametros:'+sUrl.path);
   console.log('solo el camino y nombre del recurso     :'+sUrl.pathname)
   console.log('parametros del recurso                  :'+sUrl.query)
   response.writeHead(200, {'Content-Type': 'text/html'});
   response.write('<!doctype html><html><head></head><body>Hola mundo</body></html>');
   response.end();
})

server.listen(8080);
console.log('servidor escuchando en 8080');