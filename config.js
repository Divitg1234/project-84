import firebase from "firebase";

export const firebaseConfig = {
    apiKey: "AIzaSyAOBJoF069M1TMkwDL5XqlthucGqURuzYs",
    authDomain: "spectagram-b8eda.firebaseapp.com",
    databaseURL: "https://spectagram-b8eda-default-rtdb.firebaseio.com",
    projectId: "spectagram-b8eda",
    storageBucket: "spectagram-b8eda.appspot.com",
    messagingSenderId: "320322489488",
    appId: "1:320322489488:web:fb1469393f0c3636f45c15"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);