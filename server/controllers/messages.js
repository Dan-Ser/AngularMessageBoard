var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

module.exports = (function() {
	return {
		create: function(req, res) {
			console.log("in the mmessage controller!")
			var message = new Message({
				name: req.body.name,
				message: req.body.message
			});
			message.save(function(err, results) {
				if(err) {
					console.log(err);
				} else {
					res.json(true);
				}
			})
		},

		// getMessages: function(req, res) {
		// 	Message.find({}, function(err, results) {
		// 		if(err) {
		// 			console.log(err);
		// 		} else {
		// 			console.log(results);
		// 			res.json(results);
		// 		}
		// 	})
		// },

		getMessages: function(req, res) {
			Message.find({}).populate("comments").exec(function(err, messages){
				if(err) {
					console.log(err);
				} else {
					res.json(messages);
				}
			})
		}, 

		getMessage: function(req, res) {
			Message.findOne({ _id: req.body.id }, function(err, results) {
				if(err) {
					console.log(err);
				} else {
					console.log(results);
					res.json(results);
				}
			})
		},

		editMessage: function(req, res) {
			console.log("here in the controller");
			console.log(req.body);
			var query = { _id: req.body._id };
			var values = {name: req.body.name, message:req.body.message}
			Message.update( query, values, function(err, results) {
				if(err){
					console.log(err)
				} else {
					res.json(true);
				}
			})
		},

		addComment: function(req, res){
			console.log("here in the server controller");
			console.log(req.body);
			Message.findOne({ _id: req.body.messageId }, function(err, result){
				var comment = new Comment({
					name: req.body.name,
					comment: req.body.comment,
				});
				comment._post = result._id;
				result.comments.push(comment);
				comment.save(function(err){
					result.save(function(err) {
						if(err) {
						console.log(err);
					} else {
						res.json(true);
					}
					})
				})
			})
		}
	}
})();

// //  just a sample route.  Post request to update a post.
//  //  your routes will probably look different.
//  app.post('/posts/:id', function (req, res){
//     Post.findOne({_id: req.params.id}, function(err, post){
//         // data from form on the front end
//         var comment = new Comment(req.body);
//         //  set the reference like this:
//         comment._post = post._id;
//         post.comments.push(comment);
//         // now save both to the DB
//         comment.save(function(err){
//             post.save(function(err){
//         if(err) {
//                    console.log('Error');
//        } else {
//               res.redirect('/');
//               }
//             });
//         });
//     });
//  });
