var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var User = mongoose.model('User');
var bcrypt = require('bcryptjs');

module.exports = (function(){
	return {
		register: function(req, res){
			console.log("inside the register function")
			console.log(req.body);
			User.findOne({username: req.body.username}, function(error, user){
				if(user) {
					res.json(null);
					return;
				}
				else{
					console.log(req.body)
					var salt = bcrypt.genSaltSync(10);
					var hash = bcrypt.hashSync(req.body.password, salt);

					var newUser = new User(req.body);
					newUser.roles = ['student'];
					newUser.username = req.body.username;
					newUser.password = hash;
					newUser.save(function(err, user) {
						req.login(user, function(err) {
							if(err) { return next(err); }
							res.json(user);
						});
					});
				}
			});
		}
	}
})();