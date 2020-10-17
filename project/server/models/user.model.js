const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');

// TODO: default values are attached to default values in 'weekly-scores.model.js'
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
				ref: 'Quarterbacks',
				default: ObjectId('5f80a68660db5488b0d03a76'),
			},
			runningBack1: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Running-Backs',
				default: ObjectId('5f80bf871053ba3e50c6ea22'),
			},
			runningBack2: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Running-Backs',
				default: ObjectId('5f80bf871053ba3e50c6ea23'),
			},
			tightEnd: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Tight-Ends',
				default: ObjectId('5f80a781847a2e2180daa9d7'),
			},
			wideReceiver1: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Wide-Receivers',
				default: ObjectId('5f80a7b25dd001f001785b93'),
			},
			wideReceiver2: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Wide-Receivers',
				default: ObjectId('5f80a7b25dd001f001785b98'),
			}
		}
	})
);

module.exports = User;
