// src/firebase.js
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/messaging";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBUanv6Yxtr6hed3VaHD6eOHbvPvNU1-O4",
  authDomain: "test-78584.firebaseapp.com",
  projectId: "test-78584",
  storageBucket: "test-78584.appspot.com",
  messagingSenderId: "598989999497",
  appId: "1:598989999497:web:47b04bc34cdd470d072558"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
