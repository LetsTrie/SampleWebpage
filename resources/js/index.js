function go() {
	let user = firebase.auth().currentUser;
	if(user) location = "resources/homepage.html";
	else location = "resources/login.html";
}