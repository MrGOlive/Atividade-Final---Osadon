const knex = require("./banco_dados/db")
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
module.exports = usuarios