import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDHaJmvQUscP1koyMhQxAiDzWwUPtTZaUM",
    authDomain: "hondutronicsdb.firebaseapp.com",
    databaseURL: "https://hondutronicsdb.firebaseio.com",
    projectId: "hondutronicsdb",
    storageBucket: "",
    messagingSenderId: "456791376568",
    appId: "1:456791376568:web:0ea57537cc849ae3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;