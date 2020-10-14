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
				type: ObjectId
			},
			runningBack: {
				type: ObjectId
			},
			tightEnd: {
				type: ObjectId
			},
			wideReceiver: {
				type: ObjectId
			}
		}
	})
);

module.exports = User;
