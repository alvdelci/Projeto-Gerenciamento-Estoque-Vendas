const express = require('express');
const controller = require('./controller');
const routes = express.Router();


routes.get('/vendas', controller.vendas);
routes.post('/comprar', controller.comprar);

module.exports = routes;
