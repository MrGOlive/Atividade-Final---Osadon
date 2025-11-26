// Arquivo: banco_dados/db.js

const knex = require('knex');
// MUDANÇA AQUI: Adicionamos mais um ponto (..) para voltar para a raiz
const config = require('../knexfile'); 

// Inicia a conexão
const db = knex(config.development);

module.exports = db;