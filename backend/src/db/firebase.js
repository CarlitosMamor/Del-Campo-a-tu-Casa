const admin = require('firebase-admin');
const serviceAccount = require('./del-campo-a-tu-casa-912cf-528fc4a96117.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
    });

const db = admin.firestore();

module.exports = db;
