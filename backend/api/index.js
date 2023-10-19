require("dotenv").config();
const db = require("./db");
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());




  
    app.post('/login', async(request, response) => {
        const {email,senha} = request.body;
    const results = await db.authUser(email,senha);  
    console.log(results,email,senha);  
    response.json(results);
    });

/* ------------------------------------------------------------------------------ */

app.get("/dadosfunc", async (request, response) => {
    const results = await db.selectDadosfuncs();
    response.json(results);
})

app.get("/dadosfunc/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const results = await db.selectDadosfunc(id);
    response.json(results);
})

app.patch("/dadosfunc/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const usuarios = request.body;
    db.updateDadosfunc(id, usuarios);
    response.sendStatus(200);
})



/* ------------------------------------------------------------------------------ */

app.get("/redes", async (request, response) => {
    const results = await db.selectRedess();
    response.json(results);
})

app.get("/redes/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const results = await db.selectRedes(id);
    response.json(results);
})

app.patch("/redes/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const usuarios = request.body;
    db.updateRedes(id, usuarios);
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

module.exports = router;