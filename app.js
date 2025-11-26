const express = require("express");
const path = require('path');
const crud = require("./crud");
// const formato = require("./formato"); // Não vamos precisar formatar CPF/Tel de boi
const bodyParser = require('body-parser');
const multer = require('multer'); // Importando o Multer
const PORT = 3000;

const app = express();

// Configuração do Multer (Upload de Imagens)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/') // Pasta onde salva
    },
    filename: function (req, file, cb) {
        // Salva com data atual + nome original para não substituir arquivos iguais
        cb(null, Date.now() + path.extname(file.originalname)) 
    }
});
const upload = multer({ storage: storage });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rota raiz
app.get("/", (req, res) => {
    res.redirect("/home");
});

// Rota HOME (Listar Bois)
app.get("/home", async (req, res) => {
    try {
        const bois = await crud.listarBois();
        // Formatando a data para exibição (DD/MM/AAAA)
        const boisFormatados = bois.map(boi => ({
            ...boi,
            data_nascimento: boi.data_nascimento ? new Date(boi.data_nascimento).toLocaleDateString('pt-BR') : ''
        }));
        res.status(200).render('index', { usuarios: boisFormatados }); // Mantive a variável 'usuarios' pra você não ter que mudar o EJS inteiro agora, mas o ideal seria 'bois'
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao carregar a lista.");
    }
});

// Rota Cadastro (Formulário)
app.get("/cadastro", (req, res) => {
    res.render('cadastro');
});

// PROCESSAR Cadastro (Com upload de foto)
// 'foto' é o name="foto" que você vai colocar no input do HTML
app.post("/cadastrar", upload.single('foto'), async (req, res) => {
    // Pegando os dados novos do formulário
    const { numero_brinco, nome, registro, pai, mae, peso, data_nascimento } = req.body;
    
    const foto_url = req.file ? `/uploads/${req.file.filename}` : null;
    
    try {
        // Passando tudo para o CRUD
        await crud.inserir(numero_brinco, nome, registro, pai, mae, peso, data_nascimento, foto_url);
        res.redirect('/home?status=success&action=cadastro');
    } catch (error) {
        console.error("Erro:", error);
        res.redirect(`/home?status=error&message=${encodeURIComponent(error.message)}`);
    }
});

// Rota Alteração (Formulário)
app.get('/alteracao/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const bois = await crud.buscarBoi(id);
        if (!bois || bois.length === 0) return res.status(404).send("Boi não encontrado.");
        res.render('alteracao', { usuario: bois[0] });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao buscar dados.");
    }
});

// PROCESSAR Alteração
app.post("/alterar/:id", upload.single('foto'), async (req, res) => {
    const id = req.params.id;
    const { numero_brinco, raca, peso, data_nascimento } = req.body;
    
    // Lógica: Se o usuário enviou nova foto, atualiza. Se não, teríamos que manter a antiga (no crud simples vamos só ignorar se vier vazio)
    const foto_url = req.file ? `/uploads/${req.file.filename}` : undefined;

    try {
        await crud.alterar(id, numero_brinco, raca, peso, data_nascimento, foto_url);
        res.redirect('/home?status=success&action=edicao');
    } catch (error) {
        console.error("Erro:", error);
        res.redirect(`/home?status=error&message=${encodeURIComponent(error.message)}`);
    }
});

// Rota Deletar
app.post("/deletar/:id", async (req, res) => {
    try {
        await crud.deletar(req.params.id);
        res.redirect('/home?status=success&action=exclusao');
    } catch (error) {
        console.error("Erro:", error);
        res.redirect(`/home?status=error&message=${encodeURIComponent(error.message)}`);
    }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});