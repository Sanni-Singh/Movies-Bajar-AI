// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIKzE-BAI-71SV1aEQk0SMs1fPPfSsciw",
  authDomain: "moviebajar-16198.firebaseapp.com",
  projectId: "moviebajar-16198",
  storageBucket: "moviebajar-16198.firebasestorage.app",
  messagingSenderId: "952189669339",
  appId: "1:952189669339:web:37ea8b7c2e80809cf6a1fe",
  measurementId: "G-4KZEGK8FDJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();