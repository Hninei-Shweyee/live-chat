import firebase from 'firebase/app'
import "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBNqJiC6oFVL4cyPlpmVCNoDogeZCANdMk",
  authDomain: "tm-accounts-space.firebaseapp.com",
  projectId: "tm-accounts-space",
  storageBucket: "tm-accounts-space.firebasestorage.app",
  messagingSenderId: "926881338176",
  appId: "1:926881338176:web:dac1cb64f8cb7da92260a5"
};

firebase.initializeApp(firebaseConfig)
let db=firebase.firestore();
let timestamp=firebase.firestore.FieldValue.severTimestamp;

export{db,timestamp}