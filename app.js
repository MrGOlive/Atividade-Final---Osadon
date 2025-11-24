const express = require("express") // Chamando a classe "express"
const path = require('path');
const crud = require("./crud");
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
        // Status 200 é o padrão do render
        res.status(200).render('index', {usuarios: users});
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
    const { nome, email, tel } = req.body;

    try {
        await crud.inserir(nome, email, tel);
        // Redireciona para home (Status 302 automático)
        res.redirect('/home/home?msg=sucesso');
    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
        // ERRO: Definimos status 500 e mandamos uma mensagem (ou renderizamos página de erro)
        // O return é importante pois garante que o código pare aqui
        return res.status(500).send("Ocorreu um erro ao cadastrar o usuário: " + error.message);
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
    const { nome, email, tel } = req.body;

    try{
        await crud.alterar(UserID, nome, email, tel);
        // SUCESSO
        res.redirect('/home/home?msg=sucesso');
    } catch(error){
        //pop up - erro ao alterar usuario - MARINA
        console.error(error);
        // ERRO
        return res.status(500).send("Erro ao alterar usuário: " + error.message);
    }
})

// Rota para deletar
app.post("/deletar/:id", async (req, res)=>{
    const userID = req.params.id
    try{
        await crud.deletar(userID);
        // SUCESSO
        res.redirect('/home/home?msg=sucesso');
    } catch (error){
        console.error("Erro ao deletar usuário:", error);
        // ERRO
        return res.status(500).send("Erro ao deletar usuário. Detalhes: " + error.message);
    }
})

// Comando para manter o servidor ligado
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.use(express.static(path.join(__dirname, 'public')));