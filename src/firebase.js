// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHyfjbGL1WfgL0YC2cS0Hpgi4vJxND8GA",
  authDomain: "jaychat-e70ac.firebaseapp.com",
  projectId: "jaychat-e70ac",
  storageBucket: "jaychat-e70ac.appspot.com",
  messagingSenderId: "926118503501",
  appId: "1:926118503501:web:04f841589a12ba35c7a804",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
