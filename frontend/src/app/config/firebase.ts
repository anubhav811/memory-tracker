// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6xEjABwhL-1UvQGlLcKLgazHPAu7wEBU",
  authDomain: "memory-tracker-b50d7.firebaseapp.com",
  projectId: "memory-tracker-b50d7",
  storageBucket: "memory-tracker-b50d7.firebasestorage.app",
  messagingSenderId: "818974630677",
  appId: "1:818974630677:web:aa67c027bcbe769440bf1c",
  measurementId: "G-C43ZCQ1JXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)