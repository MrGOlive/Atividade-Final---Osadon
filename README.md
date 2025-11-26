# 🐮 Sistema de Gerenciamento de Gado (CRUD)

**Autor:** Luiz Miguel Gonçalves de Oliveira  
**Disciplina:** Fundamentos de Banco de Dados  
**Entrega:** Projeto Final

---

## 📋 Sobre o Projeto

Este projeto consiste em um sistema web completo para o gerenciamento de animais de uma fazenda. A aplicação permite realizar as quatro operações fundamentais (CRUD): **C**riar, **L**er, **A**tualizar e **D**eletar registros de bovinos, incluindo o upload de fotos para cada animal.

O sistema foi desenvolvido integrando o Frontend (HTML/EJS) com um Backend robusto (Node.js) e persistência de dados em banco relacional (MySQL).

---

## 🛠️ Tecnologias Utilizadas

* **Node.js & Express:** Servidor e rotas da aplicação.
* **MySQL (MariaDB):** Banco de dados relacional.
* **Knex.js:** Query Builder para gerenciamento de banco e migrações.
* **EJS:** Engine de visualização para gerar as páginas HTML dinamicamente.
* **Multer:** Middleware para gerenciamento e upload de imagens.

---

## 🚀 Guia de Instalação e Execução

Para rodar este projeto na sua máquina, siga os passos abaixo:

### 1. Configuração do Banco de Dados
A aplicação espera um banco de dados MySQL rodando na porta `3306`.

1.  Abra o arquivo `banco_dados/script_banco.sql` deste projeto.
2.  Execute o script completo no seu Workbench ou Cliente MySQL.
    * *Este script criará automaticamente o banco `fazenda`, a tabela `bois` e o usuário `admin` (senha: `senac`) necessário para a conexão.*

### 2. Instalação das Dependências
Abra o terminal na pasta raiz do projeto e execute:

```bash
npm install