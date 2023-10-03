// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCld1tWwYu_lNFJiwNKJJz7aZrrgRoUGHo",
  authDomain: "react-app-1ebc5.firebaseapp.com",
  projectId: "react-app-1ebc5",
  storageBucket: "react-app-1ebc5.appspot.com",
  messagingSenderId: "868773068154",
  appId: "1:868773068154:web:a7df4d460bae84c2e8aac3"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
