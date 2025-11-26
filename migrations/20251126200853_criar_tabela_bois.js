/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};

exports.up = function (knex) {
    return knex.schema.createTableIfNotExists('bois', function (table) {
        table.increments('id').primary();
        table.string('numero_brinco', 50).notNullable();
        table.string('nome', 100);
        table.string('registro', 50);
        table.string('pai', 50);
        table.string('mae', 50);
        table.decimal('peso', 10, 2).notNullable();
        table.date('data_nascimento');
        table.string('foto_url', 255);
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('bois');
};