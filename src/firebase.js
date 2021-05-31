import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCaw9rAdJ5tqUqoNTw0SwEXVvQxxX85Lb0",
  authDomain: "linkedin-clone-7cb68.firebaseapp.com",
  projectId: "linkedin-clone-7cb68",
  storageBucket: "linkedin-clone-7cb68.appspot.com",
  messagingSenderId: "724447621845",
  appId: "1:724447621845:web:6a8f4302c4222ed10f685c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); // firebase app get firestore
const auth = firebase.auth();

export { db, auth };
