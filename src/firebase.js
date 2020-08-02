import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBScOHKZd6PTHcURLq3tkeZ1Fsfh5DT8-w",
  authDomain: "edvard-link.firebaseapp.com",
  databaseURL: "https://edvard-link.firebaseio.com",
  projectId: "edvard-link",
  storageBucket: "edvard-link.appspot.com",
  messagingSenderId: "690682106211",
  appId: "1:690682106211:web:d75b4f0d63ef9adfd24356",
  measurementId: "G-TSY91SEFB3"
});

const db = firebaseApp.firestore();

export { db };
