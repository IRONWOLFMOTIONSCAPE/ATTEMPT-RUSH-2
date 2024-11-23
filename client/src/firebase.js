import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACujLLkwCPZKMNW0GzpE9lHXi_Megck80",
  authDomain: "rush-test-10550.firebaseapp.com",
  projectId: "rush-test-10550",
  storageBucket: "rush-test-10550.firebasestorage.app",
  messagingSenderId: "310407037082",
  appId: "1:310407037082:web:ce6a27d2b23cad8f4e5f23",
  measurementId: "G-55K73PTD7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };