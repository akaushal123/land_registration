// const firebase = require("firebase");
// Required for side-effects
import * as firebase from "firebase";

const config ={
    apiKey: "AIzaSyBuUgIwNvQap8Qcl6IScaTyykDgFVq1dO8",
    authDomain: "landregistration-49ea3.firebaseapp.com",
    databaseURL: "https://landregistration-49ea3.firebaseio.com",
    projectId: "landregistration-49ea3",
    storageBucket: "landregistration-49ea3.appspot.com",
    messagingSenderId: "154467493700",
    appId: "1:154467493700:web:a64a1e55d57f70cbe71911",
    measurementId: "G-NX1J3THL2M"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();


