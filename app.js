const express = require("express") // Chamando a classe "express"
const path = require('path');

const app = express() // Instanciando a classe "express" como o objeto "app" 

app.get("/home", (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(3000)