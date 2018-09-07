import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

var config = {
  apiKey: "AIzaSyA5qKgJPz37_lFmMQjEgXcUiDs_pjZ78YE",
  authDomain: "server-756d1.firebaseapp.com",
  databaseURL: "https://server-756d1.firebaseio.com",
  projectId: "server-756d1",
  storageBucket: "server-756d1.appspot.com",
  messagingSenderId: "309089235893"
};

!firebase.apps.length ? firebase.initializeApp(config) : "";
export const auth = firebase.auth();
export const DB = firebase.database();
export const StoreDB = firebase.firestore();
export default firebase;
