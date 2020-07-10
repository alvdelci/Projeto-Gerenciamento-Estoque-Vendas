const express = require('express');
const controller = require('./controller');
const routes = express.Router();


routes.get('/vendas', controller.vendas);
routes.post('/comprar', controller.comprar);
routes.post('/exibir', controller.exibir);

module.exports = routes;
