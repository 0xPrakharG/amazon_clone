import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBDjEUTAbzlU1kkVwshjEIBpbsaiEoY-Xo",
  authDomain: "clone-5af93.firebaseapp.com",
  projectId: "clone-5af93",
  storageBucket: "clone-5af93.appspot.com",
  messagingSenderId: "520026818759",
  appId: "1:520026818759:web:944656ef820d917cc096e2",
  measurementId: "G-S4PHMCKGSS"
});
// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };