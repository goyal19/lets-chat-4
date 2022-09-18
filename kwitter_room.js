

var firebaseConfig = {
    apiKey: "AIzaSyAQbQrKu74Axaz2sDC2apaa8-stkbqzMNk",
    authDomain: "appkwitter-dddc9.firebaseapp.com",
    databaseURL: "https://appkwitter-dddc9-default-rtdb.firebaseio.com",
    projectId: "appkwitter-dddc9",
    storageBucket: "appkwitter-dddc9.appspot.com",
    messagingSenderId: "34240753420",
    appId: "1:34240753420:web:c3214208de275a2767e329"
  };


  
  
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name;

function addRoom(){
    room_name=document.getElementById("room_name").value ;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
    
    });});}
getData();

