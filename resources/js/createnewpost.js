// let user = firebase.auth().currentUser;
// let name, email, photoUrl, uid, emailVerified;
//   if (user != null) {
//   name = user.displayName;
//   email = user.email;
//   photoUrl = user.photoURL;
//   emailVerified = user.emailVerified;
//   uid = user.uid;  
//   console.log(name + " " + email + " " + photoUrl + " " + emailVerified + " " + uid);
// } else {
//   console.log("No User");
// }

function post_now() {
  var post_author_Name = firebase.auth().currentUser.displayName;
  var post_title = document.getElementById("createPostTitleId").value;
  var post_description = document.getElementById("createPostDescriptionId").value;
  var post_postTime = new Date().toString();
  var newPostKey = firebase.database().ref().child('UserPost').push().key;

  firebase.database().ref('/UserPost/' + newPostKey).set({
    Author_Name     : post_author_Name,
    Title           : post_title,
    Description     : post_description,
    postTime        : post_postTime
  }).then(function() {
    window.location = "homepage.html";
  });
}