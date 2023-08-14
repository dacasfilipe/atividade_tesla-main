const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const PORT = 8081;
const carro = require('./routes/carros');
const cliente = require('./routes/clientes.js');
const inventario = require('./routes/inventarios.js');
const pedido = require('./routes/pedidos.js');

app.use(cors());
app.use(bodyParser.json());

app.use('/carro', carro);
app.use('/cliente', cliente);
app.use('/inventario', inventario);
app.use('/pedido', pedido);

// Remova a chamada app.listen daqui
// app.listen(PORT, () => {
//     console.log(`Server started on port ${PORT}`);
// });

// Exporte a instância do Express
module.exports = app;
