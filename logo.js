const email = document.querySelector("#email");
const password = document.querySelector("#password");
const error = document.querySelector(".error");


function userProfile(){

  if(email.value != "" && password.value != ""){
    console.log(email.value);
    console.log(password.value);
    // error.style.visibility = "hidden";

    Redirect();
  }else{
    // console.log(error.nodeValue);
    // error.style.visibility = "visible";
    alert("Invalid username and password");
  }

    email.value = "";
    password.value = "";
}


const sign = document.querySelector("#sign");
const container = document.querySelector(".box-container");

function signup(){
  container.style.visibility = "hidden"
  box_3.style.visibility = "visible";
}


const log = document.querySelector("#login");
const box_3 = document.querySelector(".box-3");

function login(){
  box_3.style.visibility = "hidden";
  container.style.visibility = "visible"
}


const email1 = document.querySelector("#email1");
const password1 = document.querySelector("#password1");


function signProfile(){

  if(email1.value != "" && password1.value != ""){
    console.log(email1.value);
    console.log(password1.value);
    container.style.visibility = "hidden"
    location.href = "https://turbo-funicular-4jwjq594x5r3q57p-5504.app.github.dev/page/index.html"   //not work
  }else{
    alert("Invalid username and password");
  }

    email1.value = "";
    password1.value = "";
}




function Redirect() {
  location.href ="https://turbo-funicular-4jwjq594x5r3q57p-5504.app.github.dev/page/index.html";
  // console.log("Hii");
}
