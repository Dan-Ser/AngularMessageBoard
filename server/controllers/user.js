var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var User = mongoose.model('User');

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
					var newUser = new User(req.body);
					newUser.role = ['student'];
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