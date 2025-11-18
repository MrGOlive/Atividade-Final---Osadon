// Arquivo que inicializa e exporta a instância do KNEX

const knex = require('knex');
const config = require('./knexfile');

const db = knex(config.development);

module.exports = db;