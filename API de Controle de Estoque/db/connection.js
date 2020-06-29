const sequelize = require('sequelize');
const mysql = require('mysql2');

/*sequelize.query("CREATE DATABASE IF NOT EXISTS dbEstoque").then(() => {
    console.log("Banco de dados criado com sucesso!");
  }).catch(() => {
      console.log("Usando banco de dados existente...")
  });*/

const connection = new sequelize('dbestoque', 'root', 'sorakaad', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;