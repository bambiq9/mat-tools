import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMuE0dUG9ceJ4JWqDUmn7Pxpt6nLy6g-g",
  authDomain: "mat-tools-dfd27.firebaseapp.com",
  projectId: "mat-tools-dfd27",
  storageBucket: "mat-tools-dfd27.firebasestorage.app",
  messagingSenderId: "726102699168",
  appId: "1:726102699168:web:be785459de861bd705adc5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
