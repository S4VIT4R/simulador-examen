// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8un9ZceaoQgKY69CdM4jGm6Hx_7r4e7k",
  authDomain: "simulador2-ae109.firebaseapp.com",
  projectId: "simulador2-ae109",
  storageBucket: "simulador2-ae109.appspot.com",
  messagingSenderId: "364881267383",
  appId: "1:364881267383:web:7d2702af99fd46ae569b32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const docs = doc;
export const firestore = getFirestore;
export const collections = collection;
export const addDocs = addDoc;
export const getDoc = getDocs;
