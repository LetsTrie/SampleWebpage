function login(){
  let userEmail = document.getElementById("loginEmailID").value;
  let userPassword = document.getElementById("LoginPasswordID").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).then(function(user) {
      user = firebase.auth().currentUser;
      console.log("in Login")
      console.log(user);
      window.location = "homepage.html";
  }, function(error) {

      let errorCode = error.code;
      let errorMessage = error.message;
      window.alert("Error Code: " + errorCode);
      window.alert("Error Message: " + errorMessage);   
  }); 
}