import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
// import firebase from "firebase/app";
// import "firebase/";

const firebaseConfig = {
  apiKey: 'AIzaSyA9ThjYlMOuhMIFZ3TTp5EAC6l-uisTcvo',
  authDomain: 'caffeine-cafe.firebaseapp.com',
  projectId: 'caffeine-cafe',
  storageBucket: 'caffeine-cafe.appspot.com',
  messagingSenderId: '829170355148',
  appId: '1:829170355148:web:1b39b5556de0d702112b69'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
