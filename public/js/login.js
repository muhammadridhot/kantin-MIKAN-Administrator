firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
	  // User is signed in.
	  var user = firebase.auth().currentUser;
	  if (user.uid == "Ai6uvYa68nMKVycL808rCCbhZ893") {
		window.location="/beranda";
	  }else{
		  firebase.auth().signOut();
	  }
	} else {
	  // No user is signed in.
	}
  });
function login(){
	var email = document.getElementById("txtEmail").value;
	var password = document.getElementById("txtPass").value;

	if (email != "" && password != "") {
		console.log(email + password);
		firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {

		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
				if (errorCode === 'auth/wrong-password') {
					console.log('Wrong password.');
				} else if(errorCode === 'auth/invalid-email'){
					console.log('Email not valid')
				} else if(errorCode === 'auth/user-not-found'){
					console.log('Pengguna tidak ada');
				} else {
					console.log(errorMessage);
				}
		});
	}
}

