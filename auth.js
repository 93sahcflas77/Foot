  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
  import { firebase } from "https://www.gstatic.com/firebasejs/ui/10.0.1/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDvTep2QMoKHbF0AGZEg4lmsSIrPc_qbxY",
    authDomain: "fir-learn-f1bd7.firebaseapp.com",
    databaseURL: "https://fir-learn-f1bd7-default-rtdb.firebaseio.com",
    projectId: "fir-learn-f1bd7",
    storageBucket: "fir-learn-f1bd7.appspot.com",
    messagingSenderId: "700542419517",
    appId: "1:700542419517:web:13d784ce8ecb9d803c6054",
    measurementId: "G-68X15RKWM2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


console.log(analytics);


const email = document.querySelector("#email");
const password = document.querySelector("#password");
const btn = document.querySelector("#btn");

btn.addEventListener('click', () => {

    console.log("hii")

firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage)
    // ..
  });

});