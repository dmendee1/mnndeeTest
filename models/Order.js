const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ts = new Date();

// Create Schema
const OrderSchema = new Schema({
	order_id: {type: String, required: true},
	user_id: {type: String, required: true},
	username: {type: String, required: true},
	major: {type: String, required: true},
	department: {type: String, required: true},
	insertDate: {type: String, default: Date.now}
});

module.exports = Order = mongoose.model('orders', OrderSchema);
