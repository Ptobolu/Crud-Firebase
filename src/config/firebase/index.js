import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyDk3qoKvXld6H3FN-eUmlVG61KDafAkPco",
    authDomain: "exercise6-64361.firebaseapp.com",
    projectId: "exercise6-64361",
    storageBucket: "exercise6-64361.appspot.com",
    messagingSenderId: "588614748004",
    appId: "1:588614748004:web:7db3c14d6528cb20d11c71"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;