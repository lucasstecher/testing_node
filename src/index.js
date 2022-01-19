const express = require("express");
const PORT = 3333;
const app = express();

// Middleware para o express aceitar JSON, como por exemplo no body_params
app.use(express.json());

let accounts = [{
    name: 'Sulac',
    last_name: 'Nemti Conto',
    age: 26,
    hobbies: ['read manga', 'surf on the internet', 'code']
},
{
    name: 'Vishnu',
    last_name: 'Bcome Deth',
    age: 9000,
    hobbies: ['Destroy Worlds', 'Talk to princes']
}];

app.get('/', (req, res) =>{
    return res.json({message: "Hello, there!"});
})

// Tipos de parâmetros:

// Route Params => Identificar um recurso editar/deletar/buscar\
// Rota: http://localhost:3333/route_params/1
app.post('/route_params/:id', (req, res) => {
    console.log(req.params);
    return res.json(accounts);
});

// Query Params => Paginação / Filtro
// Rota: http://localhost:3333/query_params/?page=1&order=asc
app.post('/query_params', (req, res) => {
    console.log(req.query);
    return res.json(accounts);
});

// Body Params  => Os objetos inserção / Alteração (JSON)
// Rota: http://localhost:3333/body_params -> O parâmetro será passado dentro do body, em forma de JSON, ou outro formato
app.post('/body_params', (req, res) => {
    console.log(req.body);
    return res.json(accounts);
});

// Pegar informação através dos headers
app.post('/headers', (req, res) => {
    const { cpf } = req.headers;
    if( cpf ) {
        console.log(cpf);
        return res.status(201).send({message: "success"});
    }
    return res.status(400).send({message: "Error"});
})


app.listen(PORT);
console.log("Server started at PORT:" + PORT);