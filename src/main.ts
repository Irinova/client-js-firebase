// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import { App } from "./app";

const root = document.querySelector('#root');
const signButton = document.querySelector('#click');


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
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

const auth = firebase.auth()
const firestore = firebase.firestore()

const login = async () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  const { user } = await auth.signInWithPopup(provider)
  console.log('Provider', provider)
  console.log('user', user)
}
if (signButton) {
  signButton.addEventListener('click', login)
}

export const app = new App();
app.setConfig({
  root
})
app.run();
