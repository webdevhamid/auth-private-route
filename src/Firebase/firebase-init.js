// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK2qXPdCXQqRYoeMkicSSfPHhTLu0bid0",
  authDomain: "auth-private-route-31bde.firebaseapp.com",
  projectId: "auth-private-route-31bde",
  storageBucket: "auth-private-route-31bde.firebasestorage.app",
  messagingSenderId: "181950611438",
  appId: "1:181950611438:web:04955c342c81f2f3dd98ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
