import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBS5b7KEg-3sglBDc_yZF3n7cUCsqnyArw",
  authDomain: "pelrio-challenge.firebaseapp.com",
  projectId: "pelrio-challenge",
  storageBucket: "pelrio-challenge.appspot.com",
  messagingSenderId: "584457421890",
  appId: "1:584457421890:web:ee2785637d2c0d2fd059db",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
