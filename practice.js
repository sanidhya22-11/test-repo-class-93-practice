//ADD YOUR FIREBASE LINKS//
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAH7ZDg5is77JOu6Hb3XQCS7hmxjiXpTvM",
    authDomain: "kwitter-1233.firebaseapp.com",
    databaseURL: "https://kwitter-1233-default-rtdb.firebaseio.com",
    projectId: "kwitter-1233",
    storageBucket: "kwitter-1233.appspot.com",
    messagingSenderId: "151734555893",
    appId: "1:151734555893:web:ba69f8686cfe04e821e1bc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
    purpose:"adding user"});
}
