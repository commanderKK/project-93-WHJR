

var firebaseConfig = {
      apiKey: "AIzaSyBmTTyPzdjihrb1ea-wCgXS5DwPaMAsg2M",
      authDomain: "lets-chat-web-app-c8055.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-c8055-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-c8055",
      storageBucket: "lets-chat-web-app-c8055.appspot.com",
      messagingSenderId: "813917371162",
      appId: "1:813917371162:web:1932c0d3b4464583314aa3"
    };

    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      });});}
getData();
