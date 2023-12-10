// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1AwxY0VVPJANpc88AWN-PtGUOHoGwKhc",
  authDomain: "amzon-clone-4f591.firebaseapp.com",
  projectId: "amzon-clone-4f591",
  storageBucket: "amzon-clone-4f591.appspot.com",
  messagingSenderId: "260778224421",
  appId: "1:260778224421:web:c0cb20482da46311da48cc",
  measurementId: "G-0MMGDBTDVZ",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };
