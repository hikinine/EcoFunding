// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwBS1o1DjFiuYSQ7nqVPfDW8UjmoOdLYQ",
  authDomain: "ecofunding-development.firebaseapp.com",
  projectId: "ecofunding-development",
  storageBucket: "ecofunding-development.appspot.com",
  messagingSenderId: "92941665071",
  appId: "1:92941665071:web:b84850468c5941053d17da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const googleProvider = new GoogleAuthProvider();