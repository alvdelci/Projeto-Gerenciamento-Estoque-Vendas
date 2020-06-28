const express = require('express');
const controller = require('./controller');
const routes = express.Router();

routes.get('/home', controller.home);
routes.get('/login/:login/:password', controller.login);


module.exports = routes;