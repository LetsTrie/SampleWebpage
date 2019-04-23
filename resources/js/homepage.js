let globalID = 0;

firebase.database().ref('/UserPost').orderByChild("postTime").on('value', function(snapshot) {
	snapshot.forEach(function(childSnapshot) {  
		let childData = childSnapshot.val();

		cloneBlock = document.querySelector("#HereWeGo").cloneNode(true);
  	cloneBlock.id = globalID++;
  	console.log(globalID); 
  	document.querySelector("#HereWeGo").parentNode.insertBefore(cloneBlock, document.querySelector("#HereWeGo"));
      	
    let postID = childSnapshot.key;
    let currentBlockID = cloneBlock.id;
    let myBlock = document.getElementById(currentBlockID);
    myBlock.style.visibility = "visible";

    myBlock.querySelector('#myPostTitle').innerHTML = childData.Title;
    myBlock.querySelector('#myPostUserName').innerHTML = childData.Author_Name;
    myBlock.querySelector('#myPostDetails').innerHTML = childData.Description;
	});
});

let user = firebase.auth().currentUser;
let name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;  
  console.log(name + " " + email + " " + photoUrl + " " + emailVerified + " " + uid);
} else {
  console.log("No User");
}

function logout(){
  firebase.auth().signOut();
}