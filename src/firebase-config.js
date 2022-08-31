// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP3nwPecJvaKRQEv2RolLLK5jI6jkbcnQ",
  authDomain: "fir-tutorial-39440.firebaseapp.com",
  projectId: "fir-tutorial-39440",
  storageBucket: "fir-tutorial-39440.appspot.com",
  messagingSenderId: "857296123822",
  appId: "1:857296123822:web:50b50f513f6e1caeed3a3f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
