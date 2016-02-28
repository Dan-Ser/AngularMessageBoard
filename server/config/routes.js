var message = require('./../controllers/messages.js');
var user = require('./../controllers/user.js');
var passport = require('passport');

module.exports = function(app) {

	app.get('/message', function(req, res) {
		message.getMessages(req, res);
	})

	app.post('/message', function(req, res) {
		message.create(req, res);
	});

	app.post('/one_message', function(req, res) {
		message.getMessage(req, res);
	})

	app.post('/editMessage', function(req, res) {
		message.editMessage(req, res);
	})

	app.post('/addComment', function(req, res) {
		message.addComment(req, res);
	})

	app.post('/login', passport.authenticate('local'), function(req, res){
		console.log("/login");
		console.log(req.user);
		res.json(req.user);
	})

	app.post("/register", function(req, res){
		console.log(req.body);
		user.register(req, res);
	})

	app.get('/loggedin', function(req, res){
		// isAuthenicated is a method that remembers if a user is already logged in. If 
		// you have already logged in, you don't have to log in again and let's you through
		// if you have. If it's true, it responds with req.user, otherwise it responds with 0
		console.log('inside the /loggedin route', req.isAuthenticated())
		return res.json(req.isAuthenticated() ? req.user : null);
	});

	app.post('/logout', function(req, res){
		req.logOut();
		res.sendStatus(200);
	})
}