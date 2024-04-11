import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv4DCom38KaYhr3afIK0qWle9Zg0Eb17I",
  authDomain: "nguyenhongha-ef3c3.firebaseapp.com",
  projectId: "nguyenhongha-ef3c3",
  storageBucket: "nguyenhongha-ef3c3.appspot.com",
  messagingSenderId: "160175388818",
  appId: "1:160175388818:web:d11e171c698f38a5154e4b",
  measurementId: "G-HVNXJLCYYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
