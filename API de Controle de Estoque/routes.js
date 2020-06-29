const express = require('express');
const controller = require('./controller');
const routes = express.Router();


routes.get('/home', controller.home);

module.exports = routes;