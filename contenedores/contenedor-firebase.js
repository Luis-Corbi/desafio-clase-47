import admin from 'firebase-admin';
import config from '../llave-firebase.json' assert {type: "json"};

let serviceAccount = config

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pruebaproyecto-b24b5.firebaseio.com"
});

const CRUD = async () =>{
    const db = admin.firestore();
    let batch = db.batch();
    const query = db.collection('productos')
    let products = [
      { name: "Apple IPhone 13 Pro", price: 1299.99, color: "silver", categoria: "celulares", img: "https://http2.mlstatic.com/D_NQ_NP_840175-MLA47779316482_102021-O.webp", stock: 100},
      { name: "Apple IPhone 12 Pro", price: 1099.99, color: "silver", categoria: "celulares", img: "https://http2.mlstatic.com/D_NQ_NP_824876-MLA43975720984_112020-O.webp", stock: 100},
      { name: "Samsung Galaxy S22 ultra", price: 1199.99, color: "phantom white", categoria: "celulares", img: "https://ss7.vzw.com/is/image/VerizonWireless/samsung-galaxy-s22-ultra-phantomwhite?hei=400", stock: 100},
      { name: "Samsung Galaxy Z Fold3 5G", price: 1799.99, color: "phantom black", categoria: "celulares", img: "https://http2.mlstatic.com/D_NQ_NP_831253-MLA47891251953_102021-O.webp", stock: 100},
      { name: "Gigabyte Aorus I7 11va 32gb Ssd Rtx3080 16gb 240hz", price: 1999.99, color: "black", categoria: "notebooks", img: "https://http2.mlstatic.com/D_NQ_NP_853223-MLA46752326941_072021-O.webp", stock: 100},
      { name: "Gigabyte Aero 17 I7 Rtx 3060p 16gb 1tb M.2", price: 2099.99, color: "black", categoria: "notebooks", img: "https://http2.mlstatic.com/D_NQ_NP_946917-MLA45656496951_042021-O.webp", stock: 100},
      { name: "Asus Rog Duo 15.6+14 Uhd I9 Ssd 2tb 32gb Rtx 2080", price: 4019.99, color: "black", categoria: "notebooks", img: "https://http2.mlstatic.com/D_NQ_NP_716951-MLA47492162666_092021-O.webp", stock: 0},
      { name: "Asus Tuf Dash Rtx 3060 I7 11th Gen 16gb 512gb Ssd 144hz Ips", price: 1399.99, color: "black", categoria: "notebooks", img: "https://http2.mlstatic.com/D_NQ_NP_788352-MLA45481349887_042021-O.webp", stock: 100}
    ]
}
CRUD();