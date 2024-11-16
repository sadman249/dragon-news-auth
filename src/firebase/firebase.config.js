// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOwH9rRkyMN2mrS1GE-vmVRL1kbZpoceE",
  authDomain: "dragon-news-c308b.firebaseapp.com",
  projectId: "dragon-news-c308b",
  storageBucket: "dragon-news-c308b.firebasestorage.app",
  messagingSenderId: "149386458122",
  appId: "1:149386458122:web:a3aa3baf7803cf2a5a1bf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;