const express = require("express") // Chamando a classe "express"
const path = require('path');
const crud = require("./crud");
const bodyParser = require('body-parser');
const PORT = 3000; // Porta do Servidor
const popup = require('node-popup');

const app = express() // Instanciando a classe "express" como o objeto "app" 

app.use(bodyParser.json()); // To parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'));

// Configura o EJS como o mecanismo de template
app.set('view engine', 'ejs');

// Define o diretório onde os templates HTML estarão localizados
app.set('views', path.join(__dirname, 'views'));

//rota que chama a rota principal
app.get("/",(req, res)=>{
    res.redirect("/home")
})

app.get("/home", async (req, res)=>{
    try{
        const users = await crud.usuarios()
        res.render('index', {usuarios: users})
    } 
    catch(error){
        console.error(error)
    }
})

app.get("/cadastro", (req, res)=>{
    res.render('cadastro')
})

app.post("/cadastrar", async (req, res)=>{
    const txNome = req.body.nome;
    const txEmail = req.body.email;
    const txTel = req.body.tel;

    try {
        await crud.inserir(txNome, txEmail, txTel)
        //pop up - usuario cadastrado com sucesso - MARINA
    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
        //pop up - erro ao cadastrar usuario - MARINA
    }
    res.redirect('/home')

})

app.post('/alteracao/:id', async (req, res)=>{
    const UserID = req.params.id
    try{
        const users = await crud.usuario(UserID)
        res.render('alteracao', {usuario: users[0]})
    }
    catch(error){
        console.error(error)
    }
})

app.post("/alterar/:id", async(req, res)=>{
    const UserID = req.params.id
    const txNome = req.body.nome;
    const txEmail = req.body.email;
    const txTel = req.body.tel;
    try{
        //pop up - usuario alterado com sucesso - MARINA
        await crud.alterar(UserID, txNome, txEmail, txTel)
    }catch(error){
        //pop up - erro ao alterar usuario - MARINA
        console.error(error)
    }
    res.redirect('/home')
})

app.post("/deletar/:id", async (req, res)=>{
    const userID = req.params.id
    try{
        //pop up - usuario alterado com sucesso - MARINA
        await crud.deletar(userID)
    }catch(error){
        alert('Erro ao deletar usuário');//pop up - erro ao cadastrar usuario - MARINA
        console.error("Erro ao deletar usuário:", error);
    }
    res.redirect('/home')
})

// Comando para manter o servidor ligado
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.use(express.static(path.join(__dirname, 'public')));