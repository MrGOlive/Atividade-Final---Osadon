/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// .../migrations/20251118191815create_users_table.js
exports.up = function (knex) {
    return knex.schema.createTableIfNotExists('usuarios', function (table) {
        table.increments('id').primary(); // Chave primária auto-incrementável
        table.string('nome', 255).notNullable();
        table.string('cpf', 11).notNullable().unique();
        table.string('email', 255).notNullable().unique();
        table.string('telefone', 11).notNullable();
        table.date('data_nascimento').notNullable();
        table.timestamps(true, true); // created_at e updated_at
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('usuarios'); // Reverte a migração     
};
