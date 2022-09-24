// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh6oQxeqPQ0ZFYWbxtagPJaCX2ufbja7w",
  authDomain: "memento-a5aa0.firebaseapp.com",
  projectId: "memento-a5aa0",
  storageBucket: "memento-a5aa0.appspot.com",
  messagingSenderId: "476389401387",
  appId: "1:476389401387:web:8a6b2cd35321e29a59db6e",
  measurementId: "G-SCXT8EJ1K4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();
