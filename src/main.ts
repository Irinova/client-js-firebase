// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const root = document.querySelector('#root');

if (root) {
    root.textContent = 'HELLO WORLD!'
}

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAoir4n-kR7Bcw1jmUs2dclGP_k86kw-dQ",
    authDomain: "client-js-firebase.firebaseapp.com",
    projectId: "client-js-firebase",
    storageBucket: "client-js-firebase.appspot.com",
    messagingSenderId: "268868901296",
    appId: "1:268868901296:web:1f405a907bb9fb2bf31e75",
    measurementId: "G-4WSXE40HG6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();