const knex = require("./banco_dados/db");

async function insertBoi(numero_brinco, nome, registro, pai, mae, peso, dataNasc, fotoUrl){
    try {
        await knex('bois').insert({
            numero_brinco: numero_brinco,
            nome: nome,        // Novo
            registro: registro, // Novo
            pai: pai,          // Novo
            mae: mae,          // Novo
            // raca: 'Mestiço', // Removi raça da tela, pode deixar fixo ou null se o banco permitir
            peso: peso,
            data_nascimento: dataNasc,
            foto_url: fotoUrl
        });
        console.log('Boi inserido com sucesso!');
    } catch (error) {                      
        console.error('ERRO ao inserir:', error);
        throw error;
    }        
}

async function readBois(){
    try{
        return await knex('bois').select();
    } catch (error){
        console.error('ERRO ao buscar bois:', error);
        return [];
    }
}

async function readUm(id) {
    try{
        return await knex('bois').where("id", id).select();
    } catch (error){
        console.error('ERRO ao buscar boi:', error);
        return [];
    }
}

async function updateBoi(id, numero_brinco, raca, peso, dataNasc, fotoUrl) {
    try{
        const dadosParaAtualizar = {
            numero_brinco: numero_brinco,
            raca: raca,
            peso: peso,
            data_nascimento: dataNasc
        };
        // Só atualiza a foto se veio uma nova
        if(fotoUrl) {
            dadosParaAtualizar.foto_url = fotoUrl;
        }

        await knex('bois').where("id", id).update(dadosParaAtualizar);
    } catch (error){
        console.error('ERRO ao atualizar:', error);
        throw error;
    }
}

async function deletarBoi(id) {
    try{
        return await knex('bois').where('id', id).del();
    } catch (error){
        console.error('ERRO ao deletar:', error);
        throw error;
    }
}

module.exports = {
    buscarBoi: readUm, 
    listarBois: readBois, 
    inserir: insertBoi, 
    deletar: deletarBoi, 
    alterar: updateBoi
}