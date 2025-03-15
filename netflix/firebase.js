// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import {createUserWithEmailAndPassword, getAuth} from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZwiEVQX6zUokVpHIJdh8omdtMF4JOB44",
  authDomain: "netflix-c4408.firebaseapp.com",
  projectId: "netflix-c4408",
  storageBucket: "netflix-c4408.firebasestorage.app",
  messagingSenderId: "132793243442",
  appId: "1:132793243442:web:48f1b59951d290d647692b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

//User sign up function

const signup = async (name,email,password) =>{
    try{
        await createUserWithEmailAndPassword(auth,email,password);

    }catch(e){

    }

}