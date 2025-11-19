const express = require("express") // Chamando a classe "express"
const path = require('path');
const knex = require("./banco_dados/db")

const app = express() // Instanciando a classe "express" como o objeto "app" 

app.get("/home", (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    knex('usuarios').then(data => {
        console.log(data)
    });
})

app.get("/cadastro", (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'cadastrar.html'));
})

app.get("/alteracao", (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'editar.html'));
})

app.post("/cadastrar", (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'cadastrar:id'));
})

app.post("/alterar", (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'editar:id'));
})

app.listen(3000)