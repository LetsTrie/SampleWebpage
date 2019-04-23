let globalID = 0;

firebase.database().ref('/UserPost').orderByChild("postTime").on('value', function(snapshot) {
	snapshot.forEach(function(childSnapshot) {  
		let childData = childSnapshot.val();

		cloneBlock = document.querySelector("#HereWeGo").cloneNode(true);
      	cloneBlock.id = globalID++;
      	console.log(globalID); 
      	document.querySelector("#HereWeGo").parentNode.insertBefore(cloneBlock, document.querySelector("#HereWeGo"));
      	
		// document.getElementById(globalID).style.visibility = "visible";

        let postID = childSnapshot.key;
        let currentBlockID = cloneBlock.id;
        // let formattedDate = dateFormat(childData.postTime);
        // document.getElementById(globalID).style.visibility = "visible";
        let myBlock = document.getElementById(currentBlockID);
        myBlock.style.visibility = "visible";
		myBlock.querySelector('#myPostTitle').innerHTML = childData.Title;
        myBlock.querySelector('#myPostUserName').innerHTML = childData.Author_Name;
        // myBlock.querySelector('#myPostTime').innerHTML = childData.formattedDate;
        myBlock.querySelector('#myPostDetails').innerHTML = childData.Description;
		
        // document.getElementById(currentBlockID).getElementById('myPostTitle').innerHTML = childData.Title;
	
	});
});
function logout(){
  firebase.auth().signOut();
}