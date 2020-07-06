const express = require('express');
const controller = require('./controller');
const routes = express.Router();

routes.get('/home', controller.home);
//Adicionar produto
routes.get('/add', controller.add);
routes.post('/addproduto', controller.addproduto);
//Atualizar informações do produto:
routes.get('/update', controller.update);
routes.post('/updatenome', controller.updatenome);
routes.post('/updatedescricao', controller.updatedescricao);
routes.post('/updatevalor', controller.updatevalor);
routes.post('/updatequantidade', controller.updatequantidade);
//Remover produto
routes.get('/remove', controller.remove);
routes.post('/removeproduto', controller.removeproduto);
//Visualizar produtos
routes.get('/view', controller.view);
routes.post('/viewproduto', controller.viewproduto);

module.exports = routes;