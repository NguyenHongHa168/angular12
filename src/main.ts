import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase config
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
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

// Bootstrap Angular
bootstrapApplication(AppComponent);

import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
