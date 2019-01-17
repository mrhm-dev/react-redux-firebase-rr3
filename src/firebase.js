import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyCokYhy1UbgM0kUMRnHWymH-OmVV9Ti3-U",
  authDomain: "rr3-giveaway.firebaseapp.com",
  databaseURL: "https://rr3-giveaway.firebaseio.com",
  projectId: "rr3-giveaway",
  storageBucket: "rr3-giveaway.appspot.com",
  messagingSenderId: "400835425374"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
