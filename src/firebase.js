
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDfXaQZhEWWxt7aTJ4IGBDrHz1EwDOHLFE",
    authDomain: "react-twitter-clone-4eb18.firebaseapp.com",
    projectId: "react-twitter-clone-4eb18",
    databaseURL: "https://react-twitter-clone-4eb18.firebaseio.com",
    storageBucket: "react-twitter-clone-4eb18.appspot.com",
    messagingSenderId: "102023823426",
    appId: "1:102023823426:web:9dd255d99b973d0e0e6ddb",
    measurementId: "G-2RS8E131F3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;