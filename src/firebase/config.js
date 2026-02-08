// import firebase from 'firebase/app'
// import "firebase/firestore"
// import "firebase/auth";
// const firebaseConfig = {
//   apiKey: "AIzaSyBNqJiC6oFVL4cyPlpmVCNoDogeZCANdMk",
//   authDomain: "tm-accounts-space.firebaseapp.com",
//   projectId: "tm-accounts-space",
//   storageBucket: "tm-accounts-space.firebasestorage.app",
//   messagingSenderId: "926881338176",
//   appId: "1:926881338176:web:dac1cb64f8cb7da92260a5"
// };

// firebase.initializeApp(firebaseConfig)
// let db=firebase.firestore();
// let auth=firebase.auth();
// let timestamp=firebase.firestore.FieldValue.severTimestamp;

// export{db,timestamp,auth};

// firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNqJiC6oFVL4cyPlpmVCNoDogeZCANdMk",
  authDomain: "tm-accounts-space.firebaseapp.com",
  projectId: "tm-accounts-space",
  storageBucket: "tm-accounts-space.firebasestorage.app",
  messagingSenderId: "926881338176",
  appId: "1:926881338176:web:dac1cb64f8cb7da92260a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
const auth = getAuth(app);

export { app, auth };
