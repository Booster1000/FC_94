var firebaseConfig = {
    apiKey: "AIzaSyA7124jP2G_eM2AhJJ9jmukayXSwVkZwmk",
    authDomain: "c-93-8ed10.firebaseapp.com",
    databaseURL: "https://c-93-8ed10-default-rtdb.firebaseio.com",
    projectId: "c-93-8ed10",
    storageBucket: "c-93-8ed10.appspot.com",
    messagingSenderId: "533440922390",
    appId: "1:533440922390:web:a4dca6e92745e7ca968637"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("name").innerHTML = "Welcome " + user_name + "!!!";

  
