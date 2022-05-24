// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4AyoD6ie5Myke3LKUx3Pc7UeM4HgRS0c",
  authDomain: "power-tools-3c0c9.firebaseapp.com",
  projectId: "power-tools-3c0c9",
  storageBucket: "power-tools-3c0c9.appspot.com",
  messagingSenderId: "463647971630",
  appId: "1:463647971630:web:7b97ce64d040f9760e82bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;