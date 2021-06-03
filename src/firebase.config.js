import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyCuj8sqZ7cSuNDHXQW5JyR6jZ8nWYkq2zw",
    authDomain: "portfolio-7cee3.firebaseapp.com",
    databaseURL: "https://portfolio-7cee3-default-rtdb.firebaseio.com",
    projectId: "portfolio-7cee3",
    storageBucket: "portfolio-7cee3.appspot.com",
    messagingSenderId: "913733998124",
    appId: "1:913733998124:web:b336b8fb46894ba6812389",
    measurementId: "G-4430PKMYQH"
  };
  
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;