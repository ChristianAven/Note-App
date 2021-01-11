import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCZZd8wtgMmozxBi9Du1ddNzwxQvJdEXD8",
    authDomain: "react-app-aprender.firebaseapp.com",
    projectId: "react-app-aprender",
    storageBucket: "react-app-aprender.appspot.com",
    messagingSenderId: "121573069684",
    appId: "1:121573069684:web:96470e48eee1e33ae55221"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
    db, 
    googleAuthProvider,
    firebase
}