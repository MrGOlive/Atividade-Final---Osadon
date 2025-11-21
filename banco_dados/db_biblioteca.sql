CREATE SCHEMA db_biblioteca;

USE db_biblioteca;

# Precisamos deletar o 1º registro porque o 1º migration foi excluído erroneamente
DELETE FROM knex_migrations
WHERE id='1';

