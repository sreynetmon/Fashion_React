// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCdqMTmEyrT14HH_r0QyZ-Kcc8XlM6R2w",
  authDomain: "social-login-react-2b87d.firebaseapp.com",
  projectId: "social-login-react-2b87d",
  storageBucket: "social-login-react-2b87d.firebasestorage.app",
  messagingSenderId: "344633370651",
  appId: "1:344633370651:web:2d048c97fd38034e7e70be",
  measurementId: "G-DQ7KHDS4W9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);