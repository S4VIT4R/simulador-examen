// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqBPnBWNVuagtcVfFy9jconmFnf6_T90c",
  authDomain: "simulador-examen-e422d.firebaseapp.com",
  projectId: "simulador-examen-e422d",
  storageBucket: "simulador-examen-e422d.appspot.com",
  messagingSenderId: "31120484479",
  appId: "1:31120484479:web:0f37286b5cb1e32b6eb74a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const docs = doc;
export const firestore = getFirestore;
export const collections = collection;
export const addDocs = addDoc;
export const getDoc = getDocs;
