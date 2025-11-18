CREATE SCHEMA db_biblioteca;

USE db_biblioteca;

CREATE TABLE IF NOT EXISTS usuarios (
	ID int auto_increment primary key,
    NOME varchar(255) not null,
    CPF varchar(11) not null unique,
    EMAIL varchar(255) not null unique,
    TELEFONE varchar(11) not null,
    DATA_NASCIMENTO date not null
);


