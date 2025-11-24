const knex = require("./banco_dados/db")

async function insertUsuario(nome, email, tel){
    try {
        await knex('usuarios').insert({
            nome: nome,
            email: email,
            telefone: tel,
            cpf:"11111111113",
            data_Nascimento: "1000-01-01"
        })
        console.log('Usuário inserido com sucesso!');
    }   catch (error) {                     
        console.error('ERRO ao inserir usuário:', error);
    }        
}

// Função para ler todos os usuários do banco de dados
async function readUsuarios(){
    try{
        const usuarios = await knex('usuarios').select()
        return usuarios
    }
    catch{
        console.error('ERRO ao buscar usuários:', error); 
    }
}

async function readUm(id) {
    try{
        const usuarios = await knex('usuarios').where("id",id).select()
        return usuarios
    }
    catch{
        console.error('ERRO ao buscar usuários:', error);
    }
}

async function updateUsuarios(id, nome, email, tel) {
    try{
        await knex('usuarios').where("id",id).update({
            nome: nome,
            email: email,
            telefone: tel,
            cpf:"11111111113",
            data_Nascimento: "1000-01-01" 
    })

    }catch(error){
        console.log(error)
    }
}

async function deletarUsuario(id) {
    try{
        return await knex('usuarios')
        .where('id', id)
        .del()
    }
    catch(error){
        console.error('ERRO ao deletar usuários:', error);
    }
}

module.exports = {
    usuario: readUm, 
    usuarios: readUsuarios, 
    inserir: insertUsuario, 
    deletar: deletarUsuario, 
    alterar: updateUsuarios
}