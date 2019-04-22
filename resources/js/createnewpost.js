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