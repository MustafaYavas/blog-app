// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.end.FIREBASE,
  authDomain: 'blog-app-ad70e.firebaseapp.com',
  projectId: 'blog-app-ad70e',
  storageBucket: 'blog-app-ad70e.appspot.com',
  messagingSenderId: '626583046827',
  appId: '1:626583046827:web:0653608bf196bf919185ee',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
