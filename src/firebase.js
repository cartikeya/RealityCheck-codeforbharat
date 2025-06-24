// firebase.js

// Import the core functions you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../API/firebaseConfig";

// Your Firebase configuration
const FireBaseConfig = firebaseConfig;

// Initialize Firebase
const app = initializeApp(FireBaseConfig);

// ✅ Set up Firebase services you’ll use
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
