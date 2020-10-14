const mongoose = require('mongoose');

const WeeklyOutcome = mongoose.model(
	'Weekly-Outcome',
	new mongoose.Schema({
		week: String,
		day: String,
		date: Date,
		time: String,
		winnerTie: String,
		loserTie: String,
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
