// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "doantichhop1.firebaseapp.com",
  projectId: "doantichhop1",
  storageBucket: "doantichhop1.appspot.com",
  messagingSenderId: "891054690733",
  appId: "1:891054690733:web:7cb6eedcc89ec29e4b9124"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);