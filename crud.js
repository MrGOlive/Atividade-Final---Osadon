const knex = require("./banco_dados/db")
async function insertUsuario(nome, email, senha){
    try {
        await knex('usuarios').insert({
            nome: nome,
            email: email,
            senha: senha
        })
        console.log('Usuário inserido com sucesso!');
    }   catch (error) {                     
        console.error('ERRO ao inserir usuário:', error);
    }        
}

// Função para ler todos os usuários do banco de dados
async function readUsuarios(){
    try{
        const usuarios = await knex('usuarios')
        return usuarios
    }
    catch{
        console.error('ERRO ao buscar usuários:', error);
    }
}

const usuarios = readUsuarios()
module.exports = {usuarios, insertUsuario}