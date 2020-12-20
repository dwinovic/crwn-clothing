import firebase from 'firebase/app';

import 'firebase/storage';
import 'firebase/firestore'

import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCVDOpwIIwv8s9qJaVDXx8w04Wn7GzlSYE",
    authDomain: "crwn-db-d0676.firebaseapp.com",
    projectId: "crwn-db-d0676",
    storageBucket: "crwn-db-d0676.appspot.com",
    messagingSenderId: "371951376352",
    appId: "1:371951376352:web:47543cdb73613dcf037d85",
    measurementId: "G-RKT39PL6BB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider(); // Access to the new Google Auth Provider class from the authentication library

provider.setCustomParameters({ prompt: 'select_account' }) //we want to always trigger the Google pop up when ever we use this Google auth

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;