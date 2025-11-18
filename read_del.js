// read_del.js

// Importa a instância Knex que já está configurada e conectada ao MySQL
const db = require('./banco_dados/db');

/**
 * Função assíncrona para buscar e exibir os dados dos usuários.
 */
async function listarUsuarios() {
    console.log('Conectando ao banco de dados...');
    try {
        // 1. SELECT * FROM usuarios
        // O knex('usuarios') seleciona a tabela.
        // O .select('*') seleciona todas as colunas.
        const usuarios = await db('usuarios').select('*');

        console.log('Consulta realizada com sucesso. Total de usuários:', usuarios.length);
        console.log('\n--- LISTA DE USUÁRIOS ---\n');

        // 2. Exibe os resultados
        usuarios.forEach(usuario => {
            console.log(`ID: ${usuario.id} | Nome: ${usuario.nome} | CPF: ${usuario.cpf} | Email: ${usuario.email} | Telefone: ${usuario.telefone} | Data Nascimento: ${usuario.data_nascimento}`);
        });

        console.log('\n-------------------------\n');

    } catch (error) {
        console.error('ERRO ao buscar usuários:', error);
    } finally {
        // É crucial encerrar a conexão do pool após todas as operações
        // para que o processo Node.js termine corretamente.
        db.destroy();
        console.log('Conexão encerrada.');
    }
}

// Chama a função para iniciar a execução
listarUsuarios();