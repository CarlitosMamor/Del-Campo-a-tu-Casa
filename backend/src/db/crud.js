const db = require('./firebase.js');

// CRUD Usuarios

//Get all Usuarios

function getUsers(callback) {
    return db.collection("Users").get().then((docs) => {
        var arrayUsers = []
        docs.forEach((User) => {
            //console.log(user.data());
            const obj = User.data();
            obj.uid = User.id; 
            arrayUsers.push(obj);

        })
        //cuando llegamos aca se debe enviar la respuesta al Get Request
        callback(arrayUsers);
    }).catch((error) => {
        callback(`Error to get users ${error}`);
    })
}
 //Obtener un usuario específico
function getUser(uid, callback) {
    return db.collection("Users").doc(uid).get()
    .then((refDoc) =>{
        callback(refDoc.data())
    })
}

//Crear un usuario
function addUser(User, callback) {
    return db.collection("Users").add(User)
    ,then(() =>{
        callback("Success");
    })
    .catch((error) => {
        callback(`Error to get users ${error}`);
    })
}

//Actualizar usuario
function updateUserTotally(uid, User, callback){
    return db.collection("Users").doc(uid).set(User)
    .then(() => {
        callback("Success");
    })
    .catch((error) => {
        callback(`Error to get users ${error}`);
    })
}

function updateUserPartially(uid, User, callback){
    return db.collection ("Users").doc(uid).update(User)
    .then(() =>{
        callback("Success");
    })
    .catch((error) =>{
        callback(`Error to get users ${error}`);
    })
}

//Eliminar usuario
function deleteUser(uid, callback){
    return db.collection ("Users").doc(uid).delete()
    .then(() =>{
        callback("Success");
    })
    .catch((error) => {
        callback(`Error to get users ${error}`);
    })
}

//Buscar usuarios
function searchUser(location, callback){
    return db.collection ("Users").where("location", "==", location).get()
    .then((refDoc) =>{
        var arrayUsers = [];
        refDoc.forEach(doc =>{
            arrayUsers.push(doc.data());
        })
        callback(arrayUsers);
    })
    .catch((err) =>{
        callback("Error to search user ", err)
    })
}

module.exports = {
    getUsers, 
    getUser, 
    addUser, 
    updateUserPartially, 
    updateUserTotally,
    deleteUser,
    searchUser
}

// PARA PROBAR LOS METODOS
// correr node crudExperts.js

/*
// Obtener un doc, pasando un id
getUser("EiCurHlCXhSvqRDi1QR",(result) =>{
    console.log(result);
})

// Crear un nuevo documento
const expert = {
    "name": "Ciro",
    "location": "Bucaramanga, Colombia",
    "occupation": "Programador"
}

addExpert(expert, (status)=>{
    console.log(status);
})


const expert = {
    "location" : "Cartagena",
    "occupation": "Artista"
}

// Actualizar totalmente un documento
updateExpertTotally("Ellz8i4XbcwwlDhujAdO", expert, function(status){
    console.log(status);
})

// Actualizar parcialmente un documento
updateExpertPartially("Ellz8i4XbcwwlDhujAdO", expert, function(status){
    console.log(status);
})

// Borrar documento usando el id
deleteExpert("kH9pnrlHoFCuruwDv9a5", (status) =>{
    console.log(status);
})
*/


