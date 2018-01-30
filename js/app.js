
/*Iniciando Firebase de acceso*/
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
  $("#modal-1").modal("hide");
  authGoogle();

});

 function authGoogle () {
  var provider = new firebase.auth.GoogleAuthProvider();
  authentication(provider);
}

function authentication(provider) {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    saveData(result.user);
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
  console.log(errorMessage);
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

} //Fin autenticación fucnión

function saveData(user){
  var usuario = {
    uid: user.uid,
    name: user.displayName,
    email: user.email,
    photo: user.photoUrl
  }
  firebase.databse().ref("Datos/" + user.uid).set(usuario);
}
