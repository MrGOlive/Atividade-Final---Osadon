const express = require("express") // Chamando a classe "express"
const path = require('path');
const { usuarios } = require("./crud");
const bodyParser = require('body-parser')


const app = express() // Instanciando a classe "express" como o objeto "app" 

app.use(bodyParser.json()); // To parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'));
// Configura o EJS como o mecanismo de template
app.set('view engine', 'ejs');
// Define o diretório onde os templates HTML estarão localizados
app.set('views', path.join(__dirname, 'views'));

app.get("/home", async (req, res)=>{;
    const users = await usuarios
    res.render('index', {usuarios: users})
})

app.get("/cadastro", (req, res)=>{
    res.render('cadastro')
})

app.get("/alteracao", (req, res)=>{
    res.render('alteracao')
})

app.get("/cadastrar", (req, res)=>{
    const nome = req.body
    console.log(nome)
})

app.post("/alterar", (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'editar:id'));
})

app.listen(3000)