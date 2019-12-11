function keluar(){
    firebase.auth().signOut().then(function() {
        window.location = "/login";
        console.log("Anda berhasil keluar");
      }).catch(function(error) {
        // An error happened.
        console.log(error);
      });
}