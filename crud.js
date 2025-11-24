const knex = require("./banco_dados/db")

// Função de inserir o usuario
async function insertUsuario(nome, email, tel){
    try {
        await knex('usuarios').insert({
            nome: nome,
            email: email,
            telefone: tel,
            cpf:"11111111114",
            data_Nascimento: "1000-01-01" // adicionar os campos cpf e data de nascimento 
        })
        console.log('Usuário inserido com sucesso!');
    }   catch (error) {                     
        console.error('ERRO ao inserir usuário:', error);
        // Retorna lista vazia para o código que chamou a função
        return [];
    }        
}

// Função para ler todos os usuários do banco de dados
async function readUsuarios(){
    try{
        const usuarios = await knex('usuarios').select()
        return usuarios
    }
    catch (error){
        console.error('ERRO ao buscar usuários:', error);
        // Retorna lista vazia para o código que chamou a função
        return [];
    }
}

// Função pra ler um registro especifico: facilitar o update 
async function readUm(id) {
    try{
        const usuarios = await knex('usuarios').where("id",id).select()
        return usuarios
    }
    catch (error){
        console.error('ERRO ao buscar usuários:', error);
        // Retorna lista vazia para o código que chamou a função
        return [];
    }
}

// Função para atualizar um registro
async function updateUsuarios(id, nome, email, tel) {
    try{
        await knex('usuarios').where("id",id).update({
            nome: nome,
            email: email,
            telefone: tel,
            cpf:"11111111113",
            data_Nascimento: "1000-01-01" 
    })

    }catch (error){
        Console.error('ERRO ao atualizar o usuário:', error);
        // Retorna lista vazia para o código que chamou a função
        return [];
    }
}

// Função para deletar um registro
async function deletarUsuario(id) {
    try{
        return await knex('usuarios')
        .where('id', id)
        .del()
    }
    catch (error){
        // Loga o erro no terminal para o desenvolvedor
        console.error('ERRO ao deletar usuários:', error);
        // Retorna lista vazia para o código que chamou a função
        return [];
    }
}

module.exports = {
    usuario: readUm, 
    usuarios: readUsuarios, 
    inserir: insertUsuario, 
    deletar: deletarUsuario, 
    alterar: updateUsuarios
}