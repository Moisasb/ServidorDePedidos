# Servidor de Pedidos

API HTTP de estudo desenvolvida com Node.js para simular o gerenciamento de pedidos. O servidor disponibiliza operações CRUD sobre uma lista de pedidos mantida em memória.

## Funcionalidades

- Consultar todos os pedidos com `GET /pedidos`.
- Cadastrar um pedido com `POST /pedidos`.
- Atualizar um pedido com `PUT /pedidos`.
- Remover um pedido com `DELETE /pedidos`.
- Gerar um identificador quando um novo pedido não informa um ID.
- Retornar mensagens e dados em formato JSON.

Cada pedido de exemplo contém identificador, nome do cliente, descrição do pedido e valor.

## Como executar

Pré-requisito: Node.js instalado.

```bash
npm install
npm start
```

O servidor é iniciado na porta 3000. Para testar as rotas, utilize Postman, Insomnia ou outra ferramenta HTTP.

## Exemplos de requisição

Listar pedidos:

```http
GET http://localhost:3000/pedidos
```

Cadastrar pedido:

```http
POST http://localhost:3000/pedidos
Content-Type: application/json

{
  "nomeCliente": "Cliente de exemplo",
  "pedido": "Pizza",
  "valor": 50
}
```

## Tecnologias

- JavaScript
- Node.js
- Módulo HTTP nativo
- JSON
- Métodos HTTP e operações CRUD

## Observação

O array de pedidos é um armazenamento temporário em memória. Os registros não são persistidos após o encerramento do processo.

## Repositório

[github.com/Moisasb/ServidorDePedidos](https://github.com/Moisasb/ServidorDePedidos)
