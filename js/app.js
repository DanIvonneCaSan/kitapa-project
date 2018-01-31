var database = firebase.database();

/*Iniciando Firebase de acceso*/
var config = {
  apiKey: "AIzaSyAy7co7LbOf_1p72w7MkoXdMwA7bN4wv1o",
        authDomain: "kitapa-6f600.firebaseapp.com",
        databaseURL: "https://kitapa-6f600.firebaseio.com",
        projectId: "kitapa-6f600",
        storageBucket: "kitapa-6f600.appspot.com",
        messagingSenderId: "1087383758717"
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
  // Se tienen permisos para acceder al correo
  firebase.auth().signInWithPopup(provider).then(function(result) {
    saveData(result.user);
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  window.location.href="../views/profile.html";
  console.log(user);
  $("#userprof").append("<img scr='"+result.user.photoURL+"'/>")
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

} //Fin autenticación función

function saveData(user){
  var usuario = {
      uid:user.uid,
      nombre: user.displayName,
      email:user.email,
      foto:user.photoURL
    }
    // agrega datos
    firebase.database().ref("datosUser" ).push(usuario)
    // agrega datos usuarios existentes
    firebase.database().ref("datosUser/" + user.uid).set(usuario)
}
// Función que guarda el Texto
$("#btnsend").click(function(){
  // crea ramas
  firebase.database().ref("mensajes").set({
  // funcion que jala el texto del input
  })
})
// Extraer datos de la BD

firebase.database().ref("datosUser").on("child_added",function(s){
  var user = s.val();
  $("#userprof").append("<img width='150px' scr='"+ user.foto+"'/>")
})
// función nav view

$(function() {
    $('nav, .nav-controller').on('click', function(event) {
        $('nav').toggleClass('focus');
    });
    $('nav, .nav-controller').on('mouseover', function(event) {
        $('nav').addClass('focus');
    }).on('mouseout', function(event) {
        $('nav').removeClass('focus');
    })
})



// Función Usuarios
$(document).ready(function() {
    var panels = $('.user-infos');
    var panelsButton = $('.dropdown-user');
    panels.hide();


    //Click dropdown
    panelsButton.click(function() {
        //get data-for attribute
        var dataFor = $(this).attr('data-for');
        var idFor = $(dataFor);

        //current button
        var currentButton = $(this);
        idFor.slideToggle(400, function() {
            //Completed slidetoggle
            if(idFor.is(':visible'))
            {
                currentButton.html('<i class="glyphicon glyphicon-chevron-up text-muted"></i>');
            }
            else
            {
                currentButton.html('<i class="glyphicon glyphicon-chevron-down text-muted"></i>');
            }
        })
    });


    $('[data-toggle="tooltip"]').tooltip();

    // $('button').click(function(e) {
    //     e.preventDefault();
    //     $("#iconsmenu").show();
    // });
});

$(document).on('ready', function() {
    $("#input-b5").fileinput({showCaption: false});
});
