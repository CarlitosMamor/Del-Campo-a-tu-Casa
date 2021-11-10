const db = require('./firebase.js');

// CRUD Usuarios

//Get all Usuarios

function getUsuarios(callback) {
    db.collection("Usuarios").get().then((docs) => {
        var arrayUsuarios = []
        docs.forEach((user) => {
            //console.log(user.data());
            arrayUsuarios.push(user.data());

        })
        //cuando llegamos aca se debe enviar la respuesta al Get Request
        callback(arrayUsuarios);
    });
}

module.exports = getUsuarios;



