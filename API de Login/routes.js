const express = require('express');
const controller = require('./controller');
const routes = express.Router();

routes.get('/init', controller.init);
routes.post('/login', controller.login);


module.exports = routes;