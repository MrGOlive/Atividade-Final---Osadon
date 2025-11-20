const express = require("express") // Chamando a classe "express"
const path = require('path');
const usuariosOBJ = require('./crud')

const app = express() // Instanciando a classe "express" como o objeto "app" 
app.use(express.static('public'));
// Configura o EJS como o mecanismo de template
app.set('view engine', 'ejs');
// Define o diretório onde os templates HTML estarão localizados
app.set('views', path.join(__dirname, 'views'));

app.get("/home", async (req, res)=>{;
    const usuarios = await usuariosOBJ
    res.render('index', {usuarios: usuarios})
})

app.get("/cadastro", (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'cadastro.html'));
})

app.get("/alteracao", (req, res)=>{
    res.render('alteracao')
})

app.post("/cadastrar", (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'cadastrar:id'));
})

app.post("/alterar", (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'editar:id'));
})

app.listen(3000)