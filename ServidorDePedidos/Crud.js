import { createServer } from 'http';

let pedidos = [
    {
        id: 1,
        nomeCliente: 'Fernanda',
        pedido: 'Pizza de Calabresa',
        valor: 50.00
    }
];

const server = createServer((req, res) => {
    const method = req.method;
    const url = req.url;

    res.setHeader('Content-Type', 'application/json');

    // MÉTODO GET
    if (url === '/pedidos' && method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify(pedidos));
        return;
    }

    // MÉTODO POST
    if (url === '/pedidos' && method === 'POST') {
        let body = '';

        req.on('data', parte => {
            body += parte;
        });

        req.on('end', () => {
            const novoPedido = JSON.parse(body);
            
            // Lógica simples para gerar ID se não for enviado
            if (!novoPedido.id) {
                novoPedido.id = pedidos.length > 0 ? pedidos[pedidos.length - 1].id + 1 : 1;
            }

            pedidos.push(novoPedido);

            res.statusCode = 201;
            res.end(JSON.stringify({
                mensagem: 'Pedido cadastrado com sucesso',
                pedido: novoPedido
            }));
        });
        return;
    }

    // MÉTODO PUT
    if (url === '/pedidos' && method === 'PUT') {
        let body = '';

        req.on('data', parte => {
            body += parte;
        });

        req.on('end', () => {
            const pedidoAtualizado = JSON.parse(body);

            pedidos = pedidos.map(p => {
                if (p.id === pedidoAtualizado.id) {
                    return pedidoAtualizado;
                }
                return p;
            });

            res.statusCode = 200;
            res.end(JSON.stringify({
                mensagem: 'Pedido atualizado com sucesso',
                pedidos: pedidos
            }));
        });
        return;
    }

    // MÉTODO DELETE
    if (url === '/pedidos' && method === 'DELETE') {
        let body = '';

        req.on('data', parte => {
            body += parte;
        });

        req.on('end', () => {
            const dados = JSON.parse(body);
            pedidos = pedidos.filter(p => p.id !== dados.id);

            res.statusCode = 200;
            res.end(JSON.stringify({
                mensagem: 'Pedido removido com sucesso',
                pedidos: pedidos
            }));
        });
        return;
    }

    // Rota não encontrada
    res.statusCode = 404;
    res.end(JSON.stringify({
        mensagem: 'Rota não encontrada'
    }));
});

server.listen(3000, () => {
    console.log('Servidor disponível em http://localhost:3000/Pedidos');
});