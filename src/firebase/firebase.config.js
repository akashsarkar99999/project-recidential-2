// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKUNRRMGwRvtSB8QVKJlXazvBFqLpAUBk",
  authDomain: "project-recidential.firebaseapp.com",
  projectId: "project-recidential",
  storageBucket: "project-recidential.appspot.com",
  messagingSenderId: "988199076506",
  appId: "1:988199076506:web:0e4ec0fd7aa8849e4fd523"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;