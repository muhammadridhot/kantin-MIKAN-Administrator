module.exports = {
	isAuthenticated: function(req,res,next){
		var user = firebase.auth().currentUser;
		if (user != null){
			req.user = user;
			next();
		}else{
			res.redirect('/login');
		}
	}
}