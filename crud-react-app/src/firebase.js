import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGTePyes1GMVNrEhTfsFiT10VAooshNm4",
  authDomain: "authenticaionhat7.firebaseapp.com",
  projectId: "authenticationhat7",
  storageBucket: "authenticaionhat7.appspot.com",
  messagingSenderId: "700771051453",
  appId: "1:700771051453:web:510685157699a3a8a454d4",
  measurementId: "G-6BY47SP5ND",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();