const mongoose = require('mongoose');

const WeeklyOutcome = mongoose.model(
	'Weekly-Outcome',
	new mongoose.Schema({
		Week: Number,
		Day: String,
		Date: Date,
		Time: String,
		'Winner/tie': String,
		'': String,
		'Loser/tie': String,
		__1: String,
		PtsW: Number,
		PtsL: Number,
		YdsW: Number,
		TOW: Number,
		YdsL: Number,
		TOL: Number
	})
);

module.exports = WeeklyOutcome;
