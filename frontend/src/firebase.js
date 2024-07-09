// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
// };
 const firebaseConfig = {
  apiKey: "AIzaSyBBq9Pa7jDyEtb19qjx6W4A5kJNQA3w26E",
  authDomain: "livecurrency.firebaseapp.com",
  projectId: "livecurrency",
  storageBucket: "livecurrency.appspot.com",
  messagingSenderId: "293150948938",
  appId: "1:293150948938:web:7899db5dbd1d9ed4e2f0b3",
  measurementId: "G-4HLN7EYGLD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
