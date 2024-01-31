// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxyngFi5O355nNltjXqDzhrqRybK86KxI",
  authDomain: "maspa1-7c78f.firebaseapp.com",
  databaseURL: "https://maspa1-7c78f-default-rtdb.firebaseio.com",
  projectId: "maspa1-7c78f",
  storageBucket: "maspa1-7c78f.appspot.com",
  messagingSenderId: "883477685811",
  appId: "1:883477685811:web:429da1b38be5245a792546",
  measurementId: "G-NEPV5T1837"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };