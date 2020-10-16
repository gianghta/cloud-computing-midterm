const mongoose = require('mongoose');

const Scores = mongoose.model(
	'Weekly-Scores',
	new mongoose.Schema({
		user_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
		'week-1': {
			type: Number,
			default: 0
		},
		'week-2': {
			type: Number,
			default: 0
		},
		'week-3': {
			type: Number,
			default: 0
		},
		'week-4': {
			type: Number,
			default: 0
		},
		'week-5': {
			type: Number,
			default: 0
		},
		'week-6': {
			type: Number,
			default: 0
		},
		'week-7': {
			type: Number,
			default: 0
		},
		'week-8': {
			type: Number,
			default: 0
		},
		'week-9': {
			type: Number,
			default: 0
		},
		'week-10': {
			type: Number,
			default: 0
		},
		'week-11': {
			type: Number,
			default: 0
		},
		'week-12': {
			type: Number,
			default: 0
		},
		'week-13': {
			type: Number,
			default: 0
		},
		'week-14': {
			type: Number,
			default: 0
		},
		'week-15': {
			type: Number,
			default: 0
		},
		'week-16': {
			type: Number,
			default: 0
		},
		'week-17': {
			type: Number,
			default: 0
		}
	})
);

module.exports = Scores;
