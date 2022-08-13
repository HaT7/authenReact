import firebase from 'firebase/compat/app';

// your web app's firebase configuration
const firebaseConfig = { 
    apiKey : "AIzaSyDGTePyes1GMVNrEhTfsFiT10VAooshNm4" , 
    authDomain : "authenticaionhat7.firebaseapp.com" , 
    projectId : "authenticationhat7" , 
    storageBucket : "authenticaionhat7.appspot.com" , 
    messagingSenderId : "700771051453" , 
    appId : "1:700771051453:web:510685157699a3a8a454d4" , 
    measurementId : "G-6BY47SP5ND" 
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();