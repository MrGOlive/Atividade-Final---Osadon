// Arquivo que inicializa e exporta a instância do KNEX
// Qualquer lugar desse programa que precisar fazer uma consulta ao banco (fazer um SELECT, um INSERT) precisa importar esse arquivo.
// Esse arquivo de inicialização é usado apenas internamente pela  aplicação enquanto o servidor estiver rodando

const knex = require('knex');   //1. Importa a biblioteca (a ferramenta)
const config = require('./knexfile');   // 2. Importa a o arquivo knexfile.js
// Invoca a função knex() e passa para ela apenas a parte development do arquivo de configuração: knex abre o "pool" de conexões
const db = knex(config.development);

module.exports = db;    // A variável db é a conexão viva. 