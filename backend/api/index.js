require("dotenv").config();
const db = require("./db");
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.post('/login', (require, response) => {
    const { email, senha } = require.body;
    // Consulta SQL para verificar as credenciais do usuário
    const query = 'SELECT * FROM usuario WHERE email = ? AND senha = ?';
    
    db.query(query, [email, senha], (err, results) => {
      if (err) {
        console.error('Erro na consulta ao banco de dados:', err);
        response.status(500).json({ message: 'Erro interno do servidor' });
        return;
      }
      
      if (results.length > 0) {
        response.json({ message: 'Autenticação bem-sucedida' });
      } else {
        response.status(401).json({ message: 'Falha na autenticação' });
      }
    });
  });

/* ------------------------------------------------------------------------------ */

app.get("/profissao", async (request, response) => {
    const results = await db.selectProffs();
    response.json(results);
})

app.get("/profissao/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const results = await db.selectProff(id);
    response.json(results);
})

app.patch("/profissao/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const usuarios = request.body;
    db.updateProff(id, usuarios);
    response.sendStatus(200);
})

/* ------------------------------------------------------------------------------ */

app.get("/localidade", async (request, response) => {
    const results = await db.selectLocais();
    response.json(results);
})

app.get("/localidade/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const results = await db.selectLocal(id);
    response.json(results);
})

app.patch("/localidade/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const usuarios = request.body;
    db.updateLocal(id, usuarios);
    response.sendStatus(200);
})

/* ------------------------------------------------------------------------------ */

app.get("/descricao", async (request, response) => {
    const results = await db.selectBios();
    response.json(results);
})

app.get("/descricao/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const results = await db.selectBio(id);
    response.json(results);
})

app.patch("/descricao/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const usuarios = request.body;
    db.updateBio(id, usuarios);
    response.sendStatus(200);
})

/* ------------------------------------------------------------------------------ */

app.delete("/usuario/:id", (request, response) => {
    const id = parseInt(request.params.id);
    db.deleteUsuario(id);
    response.sendStatus(204);
})

app.patch("/usuario/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const usuarios = request.body;
    db.updateUsuario(id, usuarios);
    response.sendStatus(200);
})

app.post("/usuario", async (request, response) => {
    const usuarios = request.body;
    await db.insertUsuario(usuarios);
    response.sendStatus(201);
})

app.get("/usuario/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const results = await db.selectUsuario(id);
    response.json(results);
})

app.get("/usuario", async (request, response) => {
    const results = await db.selectUsuarios();
    response.json(results);
})

app.get("/", (request, response) => {
    response.json(
        {message:"WORKS"}
    )
})

app.listen(process.env.PORT, () => {
    console.log("APP funcionando");
});