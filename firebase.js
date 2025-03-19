// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore} from "firebase/firestore";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, getAuth, signOut} from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";

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
export const auth = getAuth(app);
const db = getFirestore(app)

// User sign up function
export const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;

        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        });

        // ✅ Show success toast
        toast.success("Account created successfully! Please log in.");
        
        // ✅ Log out user so they go to the login page
        await signOut(auth);

    } catch (e) {
        console.error(e);
        // ❌ Show error toast
        toast.error(e.message);
    }
};

// User login function
export const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Logged in successfully!");
    } catch (e) {
        console.error(e);
        toast.error(e.message);
    }
};

export const logout = () =>{
    signOut(auth)
    toast.success("Logged out successfully")
}