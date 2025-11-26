const knex = require('knex');
const config = require('../knexfile'); 

// Inicia a conexão
const db = knex(config.development);

module.exports = db;