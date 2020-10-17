const mongoose = require('mongoose');

// TODO: these default values are attached to 'user.model.js'
const Scores = mongoose.model(
	'Weekly-Scores',
	new mongoose.Schema({
		user_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
		'week-1': {
			type: Number,
			default: 4
		},
		'week-2': {
			type: Number,
			default: 3
		},
		'week-3': {
			type: Number,
			default: 3
		},
		'week-4': {
			type: Number,
			default: 4
		},
		'week-5': {
			type: Number,
			default: 2
		},
		'week-6': {
			type: Number,
			default: 2
		},
		'week-7': {
			type: Number,
			default: 4
		},
		'week-8': {
			type: Number,
			default: 2
		},
		'week-9': {
			type: Number,
			default: 4
		},
		'week-10': {
			type: Number,
			default: 2
		},
		'week-11': {
			type: Number,
			default: 2
		},
		'week-12': {
			type: Number,
			default: 2
		},
		'week-13': {
			type: Number,
			default: 3
		},
		'week-14': {
			type: Number,
			default: 2
		},
		'week-15': {
			type: Number,
			default: 4
		},
		'week-16': {
			type: Number,
			default: 2
		},
		'week-17': {
			type: Number,
			default: 3
		}
	})
);

module.exports = Scores;
