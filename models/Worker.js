const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const WorkerSchema = new Schema({
	user_id: {type: String, required: true},
	lastname: {type: String, required: true},
	major: {type: String, required: true},
	department: {type: String, required: true},
	username: {type: String, required: true},
	password: {type: String, required: true},
	insertDate: {type: Date, default: Date.now}
});

module.exports = Worker = mongoose.model('workers', WorkerSchema);
