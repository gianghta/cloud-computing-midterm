const mongoose = require('mongoose');

const Quarterbacks = mongoose.model(
	'Quarterbacks',
	new mongoose.Schema({
		Rk: Number,
		Player: String,
		Tm: String,
		Age: Number,
		Pos: String,
		G: Number,
		GS: Number,
		QBrec: String,
		Cmp: Number,
		Att: Number,
		'Cmp%': Number,
		Yds: Number,
		TD: Number,
		'TD%': Number,
		Int: Number,
		'Int%': Number,
		'1D': Number,
		Lng: Number,
		'Y/A': Number,
		'AY/A': Number,
		'Y/C': Number,
		'Y/G': Number,
		Rate: Number,
		QBR: Number,
		Sk: Number,
		Yds__1: Number,
		'NY/A': Number,
		'ANY/A': Number,
		'Sk%': Number,
		'4QC': String,
		GWD: String
	})
);

module.exports = Quarterbacks;
