// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD8g1RQsZbvRs1LfBnHErhOPabSHDfk_YA',
  authDomain: 'chat-app-cdd30.firebaseapp.com',
  projectId: 'chat-app-cdd30',
  storageBucket: 'chat-app-cdd30.appspot.com',
  messagingSenderId: '200067058140',
  appId: '1:200067058140:web:06e511d40d2b73c9a1e719',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
