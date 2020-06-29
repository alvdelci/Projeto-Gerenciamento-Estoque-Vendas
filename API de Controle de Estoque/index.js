const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');
const connection = require('./db/connection');

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use('/', routes);

app.listen(3002, () => {
    console.log('Sistema online. Porta 3002...');
});

connection.authenticate().then(() => {
    console.log("Conexão com o banco de dados estabelecida!");
}).catch((err) => {
    console.log("Conexão com o banco de dados falhou!");
    console.log("Erro -> " + err);
});