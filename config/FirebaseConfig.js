// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
    authDomain: "pet-adopt-63663.firebaseapp.com",
    projectId: "pet-adopt-63663",
    storageBucket: "pet-adopt-63663.firebasestorage.app",
    messagingSenderId: "738692540551",
    appId: "1:738692540551:web:2953095d6cdacf75443022"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);