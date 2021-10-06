import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const app = initializeApp(firebaseConfig);

const authProvider = new GoogleAuthProvider();



