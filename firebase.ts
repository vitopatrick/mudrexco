import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTTEC0tBwwNubcap8Kb-y9Z32UDJAoawg",
  authDomain: "mudrex-770a3.firebaseapp.com",
  projectId: "mudrex-770a3",
  storageBucket: "mudrex-770a3.appspot.com",
  messagingSenderId: "812936028680",
  appId: "1:812936028680:web:886fd428d005d7ab91e7bd",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
