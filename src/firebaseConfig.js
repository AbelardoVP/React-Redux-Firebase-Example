// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase";


// TODO: Replace the following with your app's Firebase project configuration
const config = {
    apiKey: "AIzaSyCDhxWRNLRMd1oKRdrqRs0lrtyjek0NY2E",
    authDomain: "react-redux-firebase-exa-1e782.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-exa-1e782.firebaseio.com",
    projectId: "react-redux-firebase-exa-1e782",
    storageBucket: "react-redux-firebase-exa-1e782.appspot.com",
    messagingSenderId: "590257448639",
    appId: "1:590257448639:web:d4fd6a14fb1f0ac11d480a"
};

// Initialize Firebase
let firebaseConfig = firebase.initializeApp(config);

export default firebaseConfig