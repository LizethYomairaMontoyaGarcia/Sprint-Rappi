// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaQPLzWSG_b2NxG_Z8jUsaq5p85h7yXjA",
  authDomain: "loginrappirestaurant.firebaseapp.com",
  projectId: "loginrappirestaurant",
  storageBucket: "loginrappirestaurant.appspot.com",
  messagingSenderId: "128320615188",
  appId: "1:128320615188:web:6879c8d488ea82a345c801",
  measurementId: "G-E5Q8Z1D12M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const dataBase = getFirestore(app);
