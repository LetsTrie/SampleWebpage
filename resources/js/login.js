function login(){
  var userEmail = document.getElementById("loginEmailID").value;
  var userPassword = document.getElementById("LoginPasswordID").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).then(function(user) {
      var user = firebase.auth().currentUser;
      window.location = "homepage.html";
  }, function(error) {

      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error Code: " + errorCode);
      window.alert("Error Message: " + errorMessage);   
  }); 
}