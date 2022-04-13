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
user_name = localStorage.getItem("user_name")

  function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });

    
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
row = '<div class="room_name" id='+Room_names+'onclick="redirectToRoomName(this.id)"> #' + Room_names +'</div><hr>'
document.getelement
//End code
});});}
getData();

function redirectToRoomName (name){
  localStorage.setItem("room_name", name);
window.location = "chat_page.html";
}