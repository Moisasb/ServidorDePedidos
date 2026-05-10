import { createServer } from 'http';

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
        return;
    }

    if (url === '/pedidos' && method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            const novo = JSON.parse(body);
            novo.id = pedidos.length > 0 ? pedidos[pedidos.length - 1].id + 1 : 1;
            pedidos.push(novo);
            res.statusCode = 201;
            res.end(JSON.stringify(novo));
        });
        return;
    }

    if (url === '/pedidos' && method === 'PUT') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            const atualizado = JSON.parse(body);
            pedidos = pedidos.map(p => p.id === atualizado.id ? atualizado : p);
            res.statusCode = 200;
            res.end(JSON.stringify(atualizado));
        });
        return;
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
        return;
    }

    res.statusCode = 404;
    res.end(JSON.stringify({ erro: "Not Found" }));
});

server.listen(3000, () => {
    console.log("http://localhost:3000/pedidos");
});