const express = require('express');
const controller = require('./controller');
const routes = express.Router();

//Adicionar produto
routes.get('/add', controller.add);
routes.post('/addproduto', controller.addproduto);
//Atualizar produto
routes.get('/update', controller.update);
routes.post('/updateproduto', controller.updateproduto);

module.exports = routes;