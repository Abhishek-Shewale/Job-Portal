// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFQpiSw03yy1yqbTbOKLZJtvHrbmQEm3s",
  authDomain: "job-portal-98927.firebaseapp.com",
  projectId: "job-portal-98927",
  storageBucket: "job-portal-98927.appspot.com",
  messagingSenderId: "262043210368",
  appId: "1:262043210368:web:32089440fe3096d600cc65",
  measurementId: "G-VKY9EZ4BE2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
