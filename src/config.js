// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7SdrjnQG6xQ8zHoWdTvnBPr-8mhGy6LY",
  authDomain: "ecospak-e644e.firebaseapp.com",
  projectId: "ecospak-e644e",
  storageBucket: "ecospak-e644e.appspot.com",
  messagingSenderId: "604982917250",
  appId: "1:604982917250:web:81b4e9bf13e7f90c999c9b",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
