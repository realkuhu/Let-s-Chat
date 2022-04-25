const firebaseConfig = {
    apiKey: "AIzaSyAnFkhTH55tfQ7Wmer-cGT6eSLrZfloLas",
    authDomain: "let-s-chat-3a28d.firebaseapp.com",
    databaseURL: "https://let-s-chat-3a28d-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-3a28d",
    storageBucket: "let-s-chat-3a28d.appspot.com",
    messagingSenderId: "321366530451",
    appId: "1:321366530451:web:f131795ea6b33d78f8f066"
  };

  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
    }

room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");

    function send(){
        msg = document.getElementById("msg").ariaValueMax;
        firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
        });
        document.getElementById("msg").value = "";
    }