const mongoose = require('mongoose');

const User = mongoose.model(
	'User',
	new mongoose.Schema({
		username: String,
		email: String,
		password: String,
		roles: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Role'
			}
		],
		team: {
			quarterback: {
				type: mongoose.Schema.Types.ObjectId
			},
			runningBack: {
				type: mongoose.Schema.Types.ObjectId
			},
			tightEnd: {
				type: mongoose.Schema.Types.ObjectId
			},
			wideReceiver: {
				type: mongoose.Schema.Types.ObjectId
			}
		}
	})
);

module.exports = User;
