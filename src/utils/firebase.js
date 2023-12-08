// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
//  Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ9kZwSOwPcl2G6HKiW9lt4skzWoV9GLQ",
  authDomain: "netflix-gpt-c4605.firebaseapp.com",
  projectId: "netflix-gpt-c4605",
  storageBucket: "netflix-gpt-c4605.appspot.com",
  messagingSenderId: "809922838990",
  appId: "1:809922838990:web:c4cf341cf41dedd4802b9f",
  measurementId: "G-JVFCGF5PPC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
