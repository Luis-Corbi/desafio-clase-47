import admin from 'firebase-admin';
import config from './llave-firebase.json' assert {type: "json"};

let serviceAccount = config

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://proyectoprobadordeconexion.firebaseio.com"
});

const CRUD = async () =>{
    const db = admin.firestore();
    let batch = db.batch();
    const query = db.collection(productos)
    let products =[
        
    ]
}