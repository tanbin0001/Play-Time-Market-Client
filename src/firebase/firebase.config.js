// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBoSXORzn5kaXd0cjBJSSMRjmJwal-HsUE",
    authDomain: "play-time-market.firebaseapp.com",
    projectId: "play-time-market",
    storageBucket: "play-time-market.appspot.com",
    messagingSenderId: "965481618609",
    appId: "1:965481618609:web:66b5858ace651c7bd09690"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);