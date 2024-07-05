// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflix-gemini-cc01a.firebaseapp.com",
  projectId: "netflix-gemini-cc01a",
  storageBucket: "netflix-gemini-cc01a.appspot.com",
  messagingSenderId: "889911423350",
  appId: "1:889911423350:web:721f4ac27ac3bc50600a57",
  measurementId: "G-RMKQ31PWGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
