import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKjlmxTawRZcFJda_w8nAgGjVsr6nKvSE",
  authDomain: "mymoneysite-e774a.firebaseapp.com",
  projectId: "mymoneysite-e774a",
  storageBucket: "mymoneysite-e774a.appspot.com",
  messagingSenderId: "788376753936",
  appId: "1:788376753936:web:d600518db3ac31de2cb795",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp };
