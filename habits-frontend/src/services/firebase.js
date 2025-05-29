// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBY65A6aS-WfJEEm5ufhqPfTaAqrST2BeE",
  authDomain: "habits-app-951ed.firebaseapp.com",
  projectId: "habits-app-951ed",
  storageBucket: "habits-app-951ed.firebasestorage.app",
  messagingSenderId: "910790666271",
  appId: "1:910790666271:web:2f2f1e4e0fcd62bd034d2a",
  measurementId: "G-95C82N43L0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);




  