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

INSERT INTO usuarios (NOME, CPF, EMAIL, TELEFONE, DATA_NASCIMENTO)
VALUES 
('Ana Clara Pereira', '12345678900', 'ana.clara@email.com', '11987654321', '1990-05-15'),
('Carlos Eduardo Souza', '23456789011', 'carlos.edu@email.com', '21912345678', '1985-10-20'),
('Mariana Costa', '34567890122', 'mari.costa@email.com', '31998887777', '2000-01-30'),
('João Pedro Alves', '45678901233', 'joao.pedro@email.com', '41955554444', '1995-07-08'),
('Fernanda Lima', '56789012344', 'fernanda.lima@email.com', '61933332222', '1988-12-12');

select * from usuarios;