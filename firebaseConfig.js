// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getReactNativePersistence, initializeAuth } from 'firebase/auth';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { getFirestore, collection } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// TODO: Replace the following with your app's Firebase project configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSR8egJ_2TFz3tKy3eZRLMDkb29yoGcBI",
  authDomain: "fir-chat-webapp.firebaseapp.com",
  projectId: "fir-chat-webapp",
  storageBucket: "fir-chat-webapp.appspot.com",
  messagingSenderId: "999178566371",
  appId: "1:999178566371:web:10c69fc26d966b10d5e3d6"
};

// export { firebase };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);
export const usersRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms');


