const getUsuarios = require("./src/db/crud.js");
//getUsuarios();

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/get-Usuarios', function(req, res){
    getUsuarios(function(arrayUsuarios){
        res.json(arrayUsuarios);
    })
})

app.get('/Usuarios',function(req, res){
    res.send('Bienvenidos al servidor de Del campo a tu casa!, esta es una lista de usuarios');
})

app.listen(port, () => { 
    console.log("Running on port" + port);
})