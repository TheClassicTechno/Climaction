const firebaseConfig = {
  apiKey: "AIzaSyASQLQCAtsuspUkSdSmaBQFDBASZhPLdYU",
  authDomain: "climaction-b96b0.firebaseapp.com",
  databaseURL: "https://climaction-b96b0-default-rtdb.firebaseio.com",
  projectId: "climaction-b96b0",
  storageBucket: "climaction-b96b0.appspot.com",
  messagingSenderId: "146436995363",
  appId: "1:146436995363:web:3c3dca72a80bc34a443496",
  measurementId: "G-MC4BFJ5L4Q"
};
firebase.initializeApp(firebaseConfig);


//Get values
var name = document.getElementById(id).value;
var date = document.getElementById(id).value;
var newBooking = document.getElementById(id).value;


function create_event(name,date,newBooking){
    var event = firebase.database().ref()
    event.update({
        [name]:{
            name:name,
            date:date,
            party:party,
            newBooking:newBooking,
        }
    })
    
}
