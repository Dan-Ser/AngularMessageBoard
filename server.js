var cookieParser = require('cookie-parser');
var express = require("express");
var path = require("path");
var app = express();
app.use(express.static(path.join(__dirname, './client')));
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bodyParser = require("body-parser");
var multer = require("multer");
var expressSession = require('express-session');


app.use(expressSession({ secret: 'mySecretKey', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true }));
app.use(cookieParser())
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

var mongoose = require('mongoose');
var User = mongoose.model('User');

passport.use(new LocalStrategy(
	function(username, password, done)
	{
		User.findOne({username: username, password: password}, function(err, user){
			if(user)
			{
				return done(null, user);
			}
		return done(null, false, {message: "unable to login!"});
	});
}));

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});

app.listen(8000, function() {
	console.log('listening on port 8000');
})


