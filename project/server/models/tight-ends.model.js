const mongoose = require('mongoose');

const TightEnds = mongoose.model(
	'Tight-Ends',
	new mongoose.Schema({
		Rk: Number,
		Player: String,
		Tm: String,
		Age: Number,
		Pos: String,
		G: Number,
		GS: Number,
		Tgt: Number,
		Rec: Number,
		'Ctch%': String,
		Yds: Number,
		'Y/R': Number,
		TD: Number,
		'1D': Number,
		Lng: Number,
		'Y/Tgt': Number,
		'R/G': Number,
		'Y/G': Number,
		Fmb: Number
	})
);

module.exports = TightEnds;
