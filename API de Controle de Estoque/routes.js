const express = require('express');
const controller = require('./controller');
const routes = express.Router();


routes.get('/home', controller.home);
routes.get('/add', controller.add);
routes.post('/addproduto', controller.addproduto);

module.exports = routes;