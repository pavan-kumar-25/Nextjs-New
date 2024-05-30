// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYPmbPuZQYDcMYYoq9Du3Tm3sapyVmJV8",
  authDomain: "capture-fde44.firebaseapp.com",
  projectId: "capture-fde44",
  storageBucket: "capture-fde44.appspot.com",
  messagingSenderId: "507473287321",
  appId: "1:507473287321:web:b44b49cf2dd56bb1130008",
  measurementId: "G-70CSRTJ4M5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};