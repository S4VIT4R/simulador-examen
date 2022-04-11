// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm-a7st6yoQt60rThEQ3uV5aR6H5J2u4o",
  authDomain: "simuladoexamen.firebaseapp.com",
  projectId: "simuladoexamen",
  storageBucket: "simuladoexamen.appspot.com",
  messagingSenderId: "1093593392337",
  appId: "1:1093593392337:web:14c5801e31107a82a5d1f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const collections = collection;
export const addDocs = addDoc;
export const getDoc = getDocs;
