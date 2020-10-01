
var firebaseConfig = {
    apiKey: "AIzaSyCxy2xpOPy9kbda1TeOD6dhOER6y1JKb5s",
    authDomain: "acemedianow-b41d7.firebaseapp.com",
    databaseURL: "https://acemedianow-b41d7.firebaseio.com",
    projectId: "acemedianow-b41d7",
    storageBucket: "acemedianow-b41d7.appspot.com",
    messagingSenderId: "165734631280",
    appId: "1:165734631280:web:ce15beaf078c67937171b5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
 
const submitBtn = document.getElementById('submit');

  //  to get the name
let firstname = document.getElementById('firstname');

// to get the last name
let lastname = document.getElementById('lastname');

// to get the e-mail
let email = document.getElementById('email');

// to get the phone-number
let phonenumber = document.getElementById('phone-number');

// to get message
let message = document.getElementById('message');

const db = firestore.collection("AcemediaData");

submitBtn.addEventListener('click', function(e){
    e.preventDefault();


        let userFirstName    = firstname.value;
    let userLastName    = lastname.value;
    let userEmail    = email.value;
    let userPhoneNumber    = phonenumber.value;
    let userMessage    = message.value;

    // Access the database collection
    db.doc().set({
        Firstname: userFirstName,
        Lastname:userLastName,
        Email:userEmail,
        Phonenumber:userPhoneNumber,
        Message:userMessage
    })
    .then(function(){
        // show alert
        document.querySelector(".alert").style.display = "block";
        // hide after 3 seconds
        setTimeout(function(){
            document.querySelector(".alert").style.display = "none";
        }, 3000)
    })
    .catch(function(error){
        console.log(error);
    });
    
});

