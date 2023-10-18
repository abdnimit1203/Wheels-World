// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1pzYwKrAvhdx_bEswjXRATOTRNC16Mlk",
  authDomain: "brand-shop-automotive-b8a10.firebaseapp.com",
  projectId: "brand-shop-automotive-b8a10",
  storageBucket: "brand-shop-automotive-b8a10.appspot.com",
  messagingSenderId: "744630386430",
  appId: "1:744630386430:web:70ea04678ac7fac4dcefaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth