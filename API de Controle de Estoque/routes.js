const express = require('express');
const controller = require('./controller');
const routes = express.Router();


routes.get('/home', controller.home);
routes.get('/addproduto/:nome/:descricao/:codigo/:valor/:quantidade', controller.addproduto);

module.exports = routes;