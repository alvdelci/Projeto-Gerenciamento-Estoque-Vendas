const sequelize = require('sequelize');
const connection = require('./connection');

const produtos = connection.define('produtos', {
    nome: {
        type: sequelize.STRING,
        allowNULL: false
    },
    descricao: {
        type: sequelize.STRING,
    },
    codigo: {
        type: sequelize.STRING,
        allowNULL: false
    },
    valor: {
        type: sequelize.FLOAT,
        allowNULL: false
    },
    quantidade: {
        type: sequelize.INTEGER,
        allowNULL: false
    }
});

module.exports = produtos;

//produtos.sync({force:true});
