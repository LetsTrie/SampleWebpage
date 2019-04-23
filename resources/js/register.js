function register(){
	var userName = document.getElementById("signupNameID").value;
	var userEmail = document.getElementById("signupEmailID").value;
	var userPassword = document.getElementById("signupPasswordID").value;
	var userConfirmPassword = document.getElementById("signupConfirmPasswordID").value;
	if(userPassword != userConfirmPassword) {
		window.alert("Password is not matching.");
		return;
	}
	if(userPassword.length < 6 || userConfirmPassword.length < 6 ) {
		window.alert("Password must be greater than 5 characters.");
		return;	
	}
	if(userEmail.length < 6) {
		window.alert("Invalid Email");
		return;
	}
	firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).then(function(user) {
	    var user = firebase.auth().currentUser;
	    var userId = user.uid;

	    user.updateProfile({
		  displayName: userName
		}).then(function() {
		  // Update successful.
		}).catch(function(error) {
		  // An error happened.
		});

		firebase.database().ref('users/' + userId).set({
			UserName : userName,
			Email : userEmail,
			UserID : userId
		})
		.then(function() {
			firebase.auth().signOut();
			window.location = "login.html";
		})
		.catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			window.alert("Error Code: " + errorCode);
			window.alert("Error Message: " + errorMessage);
		});
	}, function(error) {
	 	var errorCode = error.code;
		var errorMessage = error.message;
	  	window.alert("Error Code: " + errorCode);
	  	window.alert("Error Message: " + errorMessage);		
	});	
}
