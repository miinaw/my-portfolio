import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDgmX5DH_5eq75CXGxgyN9le_eZDya8WWQ",
  authDomain: "mail-for-my-portfolio.firebaseapp.com",
  databaseURL: "xxxxxx.firebaseio.com",
  projectId: "mail-for-my-portfolio",
  storageBucket: "xxxxxx.appspot.com",
  messagingSenderId: "xxxxxx"
};
firebase.initializeApp(config);
export const functions = firebase.functions();