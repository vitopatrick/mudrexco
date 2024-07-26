import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// these are the firebase config files
const firebaseConfig = {
  apiKey: "AIzaSyAdOnku_4QmSDtIpyDChnAG28CnlKXHvC4",
  authDomain: "eightcap-e3774.firebaseapp.com",
  projectId: "eightcap-e3774",
  storageBucket: "eightcap-e3774.appspot.com",
  messagingSenderId: "539698828514",
  appId: "1:539698828514:web:97465213a08f3244847abb",
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
