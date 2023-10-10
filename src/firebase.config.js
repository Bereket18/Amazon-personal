// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5Vp_llu2F1zWGQT58kn66TMN35bQ__Bw",
  authDomain: "ecomerce-amazo-bk.firebaseapp.com",
  projectId: "ecomerce-amazo-bk",
  storageBucket: "ecomerce-amazo-bk.appspot.com",
  messagingSenderId: "290071349507",
  appId: "1:290071349507:web:015174829f353ea8c9c136",
  measurementId: "G-T3ZBYQXXNT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig;
// const analytics = getAnalytics(app);