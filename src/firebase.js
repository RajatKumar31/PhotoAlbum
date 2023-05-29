// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHKdonbevPrE6wFfE37qCJjYiIpVeYu1A",
  authDomain: "photfolio-dd36a.firebaseapp.com",
  projectId: "photfolio-dd36a",
  storageBucket: "photfolio-dd36a.appspot.com",
  messagingSenderId: "1099262394492",
  appId: "1:1099262394492:web:ee3c11a202ad82396b49f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
