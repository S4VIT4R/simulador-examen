// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABjR_K3Uvb8soLwQXIa2kUeMnY389GH_I",
  authDomain: "sistemaexamen-aadf6.firebaseapp.com",
  projectId: "sistemaexamen-aadf6",
  storageBucket: "sistemaexamen-aadf6.appspot.com",
  messagingSenderId: "931170315662",
  appId: "1:931170315662:web:a030b90fe36a0a062f88df"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const docs = doc;
export const firestore = getFirestore;
export const collections = collection;
export const addDocs = addDoc;
export const getDoc = getDocs;
export const setDocs = setDoc;

