var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
	name: String,
	message: String,
	created_at: {type: Date, default: new Date},
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});
mongoose.model('Message', MessageSchema);