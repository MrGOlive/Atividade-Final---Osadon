// Arquivo de configuração KNEX

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST || '127.0.0.1',
      port: process.env.DB_PORT || 3306,
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'Westminster1!',
      database: process.env.DB_NAME || 'db_biblioteca'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations' // Onde os arquivos de migração serão armazenados
    },
    seeds: {
      directory: './seeds'
    }
  }
};