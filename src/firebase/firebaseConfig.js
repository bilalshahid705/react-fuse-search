import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBOytDVBDcV42IvwjRN3F_MpV8mg-rU3iQ",
  authDomain: "react-firebase-7622d.firebaseapp.com",
  databaseURL: "https://react-firebase-7622d.firebaseio.com",
  projectId: "react-firebase-7622d",
  storageBucket: "react-firebase-7622d.appspot.com",
  messagingSenderId: "134406758217",
  appId: "1:134406758217:web:8f4a4add2e7f1dcd3e0498",
  measurementId: "G-QEMXWDHPK2",
};

console.log("firebaseConfig", firebaseConfig);

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
export { firebaseConfig };
