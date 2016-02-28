var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
	password: String,
	email: String,
	username: String,
	roles: []
});
mongoose.model('User', UserSchema);