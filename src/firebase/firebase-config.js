import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCc045AI4e6CeTSVUdU-9WQu0PxlOKpnZg",
  authDomain: "react-app-cursos-c2cd7.firebaseapp.com",
  projectId: "react-app-cursos-c2cd7",
  storageBucket: "react-app-cursos-c2cd7.appspot.com",
  messagingSenderId: "434888003541",
  appId: "1:434888003541:web:ea550932a59d4b6693b75c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();  
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
  db, 
  googleAuthProvider,
  firebase
}