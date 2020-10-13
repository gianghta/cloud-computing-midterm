const mongoose = require('mongoose');

const RunningBacks = mongoose.model(
	'RunningBacks',
	new mongoose.Schema({
		Rk: Number,
		Player: String,
		Tm: String,
		Age: Number,
		Pos: String,
		G: Number,
		GS: Number,
		Att: Number,
		Yds: Number,
		TD: Number,
		'1D': Number,
		Lng: Number,
		'Y/A': Number,
		'Y/G': Number,
		Fmb: Number
	})
);

module.exports = RunningBacks;
