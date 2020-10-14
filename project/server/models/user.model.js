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
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Quarterbacks'
			},
			runningBack: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Running-Backs'
			},
			tightEnd: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Tight-Ends'
			},
			wideReceiver: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Wide-Receivers'
			}
		}
	})
);

module.exports = User;
