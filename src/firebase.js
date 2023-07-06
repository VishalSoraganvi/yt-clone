import firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBUc-dpeGluDou0OX8ylmiISXhR1wCBMNQ",
  authDomain: "yt-clone-vishal.firebaseapp.com",
  projectId: "yt-clone-vishal",
  storageBucket: "yt-clone-vishal.appspot.com",
  messagingSenderId: "498670931201",
  appId: "1:498670931201:web:43aa74030f830971c7df00",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
