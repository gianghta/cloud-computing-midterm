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
		scores: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Weekly-Scores'
		},
		team: {
			quarterback: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Quarterbacks'
			},
			runningBack1: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Running-Backs'
			},
			runningBack2: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Running-Backs'
			},
			tightEnd: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Tight-Ends'
			},
			wideReceiver1: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Wide-Receivers'
			},
			wideReceiver2: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Wide-Receivers'
			}
		}
	})
);

module.exports = User;
