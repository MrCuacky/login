import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDMd9--EwMGcyF9t1KPdD-QdyPtbgMvYz8",
    authDomain: "login-549e0.firebaseapp.com",
    projectId: "login-549e0",
    storageBucket: "login-549e0.appspot.com",
    messagingSenderId: "956283487201",
    appId: "1:956283487201:web:379df0b02ea98193d788a0",
    measurementId: "G-02YGQ36QP7"
  };

  const app = initializeApp(firebaseConfig)

  export const auth = getAuth(app)
  
  export default firebaseConfig