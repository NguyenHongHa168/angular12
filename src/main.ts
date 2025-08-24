// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRR0QP1cxCYSdl-zpVk1l7MewODP3e5wo",
  authDomain: "nguyenhongha-9e68c.firebaseapp.com",
  projectId: "nguyenhongha-9e68c",
  storageBucket: "nguyenhongha-9e68c.firebasestorage.app",
  messagingSenderId: "899249835127",
  appId: "1:899249835127:web:28aa0723fe1aa4e7a4ca72",
  measurementId: "G-QT54KF1T3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);