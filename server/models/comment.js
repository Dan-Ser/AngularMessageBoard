var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CommentSchema = new mongoose.Schema({
	_post: {type: Schema.Types.ObjectId, ref: 'Message' },
	name: String,
	comment: String, 
	created_at: {type: Date, default: new Date}
});
mongoose.model('Comment', CommentSchema);