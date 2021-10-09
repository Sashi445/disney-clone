import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "@firebase/firestore";
import movieData from "./movieData";

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const authProvider = new GoogleAuthProvider();

export const db = getFirestore();

function writeToDatabase() {
  const movies = movieData.movies;

  Object.entries(movies).map((entry) => {
    const [key, value] = entry;
    addDoc(collection(db, "movies"), {
      ...value,
      key: key,
    }).then((res) => {
      console.log(res.id);
    });
  });
}
