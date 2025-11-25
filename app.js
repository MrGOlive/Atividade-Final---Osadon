const express = require("express") // Chamando a classe "express"
const path = require('path');
const crud = require("./crud");
const formato = require("./formato")
const bodyParser = require('body-parser');
const PORT = 3000; // Porta do Servidor

const app = express() // Instanciando a classe "express" como o objeto "app"

app.use(bodyParser.json()); // To parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Configura o EJS como o mecanismo de template
app.set('view engine', 'ejs');
// Define o diretório onde os templates HTML estarão localizados
app.set('views', path.join(__dirname, 'views'));

// Rota raiz redireciona para home
app.get("/",(req, res)=>{
    res.redirect("/home")
})

// Rota HOME
app.get("/home", async (req, res)=>{
    try{
        const users = await crud.usuarios();
        const usersFormatados = users.map(user => ({
            ...user,
            cpf: formato.cpf(user.cpf),
            telefone: formato.telefone(user.telefone),
            data_nascimento: formato.dataNasc(user.data_nascimento)
        }));
        // Status 200 é o padrão do render
        res.status(200).render('index', {usuarios: usersFormatados});
    }
    catch(error){
        console.error(error)
        // ERRO 500: Erro interno do servidor
        res.status(500).send("Erro ao carregar a página inicial. Tente novamente mais tarde.");
    }
})

// Rota para mostrar o formulário de cadastro
app.get("/cadastro", (req, res)=>{
    res.render('cadastro')
})

// Rota que PROCESSA o cadastro
app.post("/cadastrar", async (req, res)=>{
    const { nome, email, tel, cpf, data_nascimento } = req.body;
    
    try {
        await crud.inserir(nome, email, tel, cpf, data_nascimento);
        // Envia sinal de sucesso na URL
        res.redirect('/home?status=success&action=cadastro');
    } catch (error) {
        console.error("Erro:", error);
        // Envia sinal de erro na URL com a mensagem técnica (segura para URL)
        const errorMsg = encodeURIComponent(error.message);
        res.redirect(`/home?status=error&message=${errorMsg}`);
    }

})

// Rota para buscar usuário para edição
app.get('/alteracao/:id', async (req, res)=>{
    const UserID = req.params.id
    try{
        const users = await crud.usuario(UserID);

        if (!users || users.length === 0) {
            // ERRO 404: Não encontrado
            return res.status(404).send("Usuário não encontrado.");
        }

        res.render('alteracao', {usuario: users[0]});
    } catch(error){
        console.error("Erro ao buscar usuário: ", error);
        res.status(500).send("Erro ao buscar dados do usuário.");
    }
})

// Rota que EFETIVA a alteração
app.post("/alterar/:id", async(req, res)=>{
    const UserID = req.params.id
    const { nome, email, tel, cpf, data_nascimento } = req.body;

    try{
        await crud.alterar(UserID, nome, email, tel, cpf, data_nascimento);
        // SUCESSO
        res.redirect('/home?status=success&action=edicao');
    } catch(error){
        console.error("Erro:", error);
        const errorMsg = encodeURIComponent(error.message);
        res.redirect(`/home?status=error&message=${errorMsg}`);
    }
})

// Rota para deletar
app.post("/deletar/:id", async (req, res)=>{
    const userID = req.params.id
    try{
        await crud.deletar(userID);
        // SUCESSO
        res.redirect('/home?status=success&action=exclusao');
    } catch (error){
        console.error("Erro:", error);
        const errorMsg = encodeURIComponent(error.message);
        res.redirect(`/home?status=error&message=${errorMsg}`);
    }
})

// Comando para manter o servidor ligado
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.use(express.static(path.join(__dirname, 'public')));