/* SCRIPT DE CRIAÇÃO DO BANCO E DO USUÁRIO */

-- 1. Cria o banco
CREATE DATABASE IF NOT EXISTS fazenda;
USE fazenda;

-- 2. Cria o usuário 'admin' para o professor não precisar mudar o código
-- (Comandos compatíveis com MySQL 5.7 e 8.0)
CREATE USER IF NOT EXISTS 'admin'@'localhost' IDENTIFIED BY 'senac';
GRANT ALL PRIVILEGES ON fazenda.* TO 'admin'@'localhost';
FLUSH PRIVILEGES;

-- 3. Cria a tabela
CREATE TABLE IF NOT EXISTS bois (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero_brinco VARCHAR(50) NOT NULL,
    nome VARCHAR(100),
    registro VARCHAR(50),
    pai VARCHAR(50),
    mae VARCHAR(50),
    peso DECIMAL(10, 2) NOT NULL,
    data_nascimento DATE,
    foto_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);