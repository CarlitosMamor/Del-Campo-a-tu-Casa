
const dbD = require("./src/db/crud.js");
//getUsuarios();

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // formato predeterminado para las peticiones (json)

//Sirve para traer todos los usuarios
app.get('/Users',function(req, res){
    dbD.getUsers(function(arrayUsers){
        res.json(arrayUsers);
    })
})

//Sirve para traer los datos del un usuario en específico
app.get('/Users/:id',function(req, res){
    const uid = req.params.id;
    dbD.getUser(uid, function(refDoc){
        res.json(refDoc);
    })
})

//Crear un usuario en la base de datos
app.put('/experts',function(req, res){
    const User = req.body;
    console.log(req.params);
    dbD.addUser(User, function(status){
        if(status === 'success'){
            res.status(201).json(status);
        } else {
            res.status(503).json(status);
        }
    })
})

//Actualizar totalmente un usuario en la base de datos 
app.put('/Users/:id', function(req, res){
    const uid = req.params.id;
    const User = req.body;
    dbD.updateUserTotally(uid, User, function(status){
        res.json(status);
    })
})

//Actualizar parcialmente un usuario en la base de datos 
app.patch('/Users/:id', function(req, res){
    const uid = req.params.id;
    const User = req.body;
    dbD.updateUserPartially(uid, User, function(status){
        res.json(status);
    })
})

//Borrar usuario de la DB
app.delete('/Users/:id', function(req, res) {
    const uid = req.params.id;
    dbD.deleteUser(uid, function(status){
        res.json(status);
    })
})

app.listen(port, () => {
    console.log("Running on port " + port);
})

/* 
// Traer un experto por ubicacion
app.get('/Users/search/:location', function(req, res){
    const location = req.params.location;
    dbE.searchExpert(location, function(refDoc){
        res.json(refDoc);
    })
}) */
