// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBQqE6-nRG1u-hsggMm9Vn-0m0emaBJfM",
  authDomain: "assignment-10-73fc4.firebaseapp.com",
  projectId: "assignment-10-73fc4",
  storageBucket: "assignment-10-73fc4.appspot.com",
  messagingSenderId: "111476322373",
  appId: "1:111476322373:web:cca7050cae18810b99f32c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;