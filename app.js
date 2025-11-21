const express = require("express") // Chamando a classe "express"
const path = require('path');
const usuarios = require('./crud')

const app = express() // Instanciando a classe "express" como o objeto "app" 
app.use(express.static('public'));

app.get("/home", (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    console.log(usuarios)
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

app.use(express.static(path.join(__dirname, 'public')));