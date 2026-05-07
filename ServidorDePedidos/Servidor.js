const http = require('http');

const server = http.createServer((req, res) => {

    console.log(req.method);

    res.writeHead(200, { 'content-type': 'text/plain' });

 
    res.end('Servidor Funcionando')
});

server.listen(3000, () => {
    console.log("O servidor de Pedidos está rodando em http://localhost:3000")
});