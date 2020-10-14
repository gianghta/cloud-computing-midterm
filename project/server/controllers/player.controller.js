const db = require('../models');
const Quarterbacks = db.quarterbacks;
const WideReceivers = db.wideReceivers;
const TightEnds = db.tightEnds;
const RunningBacks = db.runningBacks;

exports.allQuarterbacks = async (req, res) => {
	try {
		const quarterbackProfiles = await Quarterbacks.find();
		res.json(quarterbackProfiles);
	} catch (error) {
		console.log(error.message);
		res.status(500).send('Server Error');
	}
};

exports.allTightEnds = async (req, res) => {
	try {
		const tightEndProfiles = await TightEnds.find();
		res.json(tightEndProfiles);
	} catch (error) {
		console.log(error.message);
		res.status(500).send('Server Error');
	}
};

exports.allWideReceivers = async (req, res) => {
	try {
		const wideReceiverProfiles = await WideReceivers.find();
		res.json(wideReceiverProfiles);
	} catch (error) {
		console.log(error.message);
		res.status(500).send('Server Error');
	}
};

exports.allRunningBacks = async (req, res) => {
	try {
		const runningBackProfiles = await RunningBacks.find();
		res.json(runningBackProfiles);
	} catch (error) {
		console.log(error.message);
		res.status(500).send('Server Error');
	}
};
