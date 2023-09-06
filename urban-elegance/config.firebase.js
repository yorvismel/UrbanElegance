// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTgUKMJ-d_rVuBme8FK5NpX9MFvDrKjFU",
  authDomain: "urban-elegance.firebaseapp.com",
  projectId: "urban-elegance",
  storageBucket: "urban-elegance.appspot.com",
  messagingSenderId: "703076840100",
  appId: "1:703076840100:web:a8c84e8e2fd8dbda88ac31",
  measurementId: "G-DJZ91ZJ3HV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
