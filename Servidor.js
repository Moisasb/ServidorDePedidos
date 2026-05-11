const { createServer } = require('http');

let pedidos = [
    {
        id: 1,
        cliente: "Fernanda",
        produto: "Pizza de frango com catupiry",
        status: "pendente"
    }
];

const server = createServer((req, res) => {
    const { method, url } = req;
    res.setHeader('Content-Type', 'application/json');

    if (url === '/pedidos' && method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify(pedidos));
    }

    if (url === '/pedidos' && method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            const novo = JSON.parse(body);
            pedidos.push(novo);
            res.statusCode = 201;
            res.end(JSON.stringify(novo));
        });
    }

    if (url === '/pedidos' && method === 'PUT') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            const alterado = JSON.parse(body);
            pedidos = pedidos.map(p => p.id === alterado.id ? alterado : p);
            res.statusCode = 200;
            res.end(JSON.stringify(alterado));
        });
    }

    if (url === '/pedidos' && method === 'DELETE') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            const { id } = JSON.parse(body);
            pedidos = pedidos.filter(p => p.id !== id);
            res.statusCode = 200;
            res.end(JSON.stringify({ removido: id }));
        });
    }
});

server.listen(3000, () => {
    console.log("O servidor de Pedidos está rodando em http://localhost:3000/pedidos");
});