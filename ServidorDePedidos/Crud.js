const http = require ('http');

let Pedido = [
    {
    id: 1,
    NomeCliente: 'Fernanda',
    Pedido: 'Pizza de Calabresa',
    Valor: 50.00
}
];

const server = http.createServer((req, res) => {
    if (req.url === '/pedidos' && req.method === 'GET') {
     
    const method = req.method;
    
    const url = req.url; 
    
    res.setHeader(content-type, 'aplication/json');

    if (method === 'GET') {
        res.statusCode = 200; // OK
        res.end(JSON.stringify(Pedido));
        return;
    }
}


})