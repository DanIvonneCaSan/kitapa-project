

/* ++++++++++++ Initialize Firebase ++++++++++ */
var config = {
  apiKey: "AIzaSyB1B7rAPM7jix31K4eMhbhwrtj6__nrN4c",
  authDomain: "kitapa-ab4a0.firebaseapp.com",
  databaseURL: "https://kitapa-ab4a0.firebaseio.com",
  projectId: "kitapa-ab4a0",
  storageBucket: "kitapa-ab4a0.appspot.com",
  messagingSenderId: "33751788858"
};
firebase.initializeApp(config);

$("#btnGoogle").click(function () {
  authGoogle();

});

 function authGoogle () {
  var provider = new firebase.auth.GoogleAuthProvider();
  authentication(provider);
}

function authentication(provider) {
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  console.log(user);
})
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

}