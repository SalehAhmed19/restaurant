// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWrHF5wLpRZM8XUxBX_YL_TC04k5F0EKg",
  authDomain: "restaurants-e7203.firebaseapp.com",
  projectId: "restaurants-e7203",
  storageBucket: "restaurants-e7203.appspot.com",
  messagingSenderId: "432443644105",
  appId: "1:432443644105:web:bf9999ac7d12c72ad5d518",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
