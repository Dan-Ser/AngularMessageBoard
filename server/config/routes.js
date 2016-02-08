var message = require('./../controllers/messages.js');

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
}