import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAbZulfg63T4a_mK0COLy_cU7s06WLdeXM",
  authDomain: "food-63f19.firebaseapp.com",
  projectId: "food-63f19",
  storageBucket: "food-63f19.appspot.com",
  messagingSenderId: "282240626022",
  appId: "1:282240626022:web:3eb98b6b92aab73f6baca7",
  measurementId: "G-V726VJL9VZ"
};

const app = initializeApp(firebaseConfig);



const auth = getAuth(app);

function signProfile() {

    // get data
    const gmail = document.querySelector("#email1").value;
    const password = document.querySelector("#password1").value;

    // auth
    createUserWithEmailAndPassword(auth, gmail, password)
      .then((userCredential) => {
        let user = userCredential.user.uid;
        console.log(user);

        Redirect();

      })
      .catch((e) => {
        console.log(e.code);
        console.log(e.message);
      });

}

