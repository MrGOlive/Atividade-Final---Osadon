const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER, 
      password: process.env.DB_PASSWORD, 
      database: process.env.DB_NAME,
      migrations: {
        tableName: 'knex_migrations',
        directory: './migrations' // Onde os arquivos de migração serão armazenados
      },
      seeds: {
        directory: './seeds'
      }
    }
  },
}