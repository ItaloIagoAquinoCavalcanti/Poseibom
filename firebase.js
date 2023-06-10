// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS7cBoN4zzLm8mYHDUDDP-WeQXKyMVZH4",
  authDomain: "poseibom-a1457.firebaseapp.com",
  databaseURL: "https://poseibom-a1457-default-rtdb.firebaseio.com",
  projectId: "poseibom-a1457",
  storageBucket: "poseibom-a1457.appspot.com",
  messagingSenderId: "243367149540",
  appId: "1:243367149540:web:b3596ac2fb429398f111f1",
  measurementId: "G-MCZ9QGS4JE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(app);

export const Firestore = getFirestore(app);