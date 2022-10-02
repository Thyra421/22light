// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeBgEJqa9zT5dy8Q9wNWPjZIuoVCtFz2U",
  authDomain: "light22-architecture.firebaseapp.com",
  projectId: "light22-architecture",
  storageBucket: "light22-architecture.appspot.com",
  messagingSenderId: "669819667314",
  appId: "1:669819667314:web:b92b90c51f7f86c2aa13eb",
  measurementId: "G-T1CCZ9T0L4"
};

let appInit = initializeApp(firebaseConfig);

export const auth = getAuth(appInit);
const db = getFirestore(appInit);
export default db;
export const app = appInit;
