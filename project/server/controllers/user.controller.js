const { user } = require('../models');
const db = require('../models');
const User = db.user;
const ObjectId = require('mongodb').ObjectID;

exports.allAccess = (req, res) => {
	res.status(200).send('Public Content.');
};

exports.userBoard = (req, res) => {
	res.status(200).send('User Content.');
};

exports.currentUser = async (req, res) => {
	try {
		const userProfile = await User.findOne({ username: req.params.username });

		res.json(userProfile);
	} catch (error) {
		console.log(error.message);
		res.status(500).send('Server Error');
	}
};

exports.allUsers = async (req, res) => {
	try {
		const allUserProfiles = await User.find();

		res.json(allUserProfiles);
	} catch (error) {
		console.log(error.message);
		res.status(500).send('Server Error');
	}
};

exports.updateCurrentTeamFormation = async (req, res) => {
	const { quarterback, runningBack1, runningBack2, tightEnd, wideReceiver1, wideReceiver2 } = req.body;

	// Build the team object
	const userInfo = {};
	userInfo.team = {};
	if (quarterback) userInfo.team.quarterback = quarterback;
	if (runningBack1) userInfo.team.runningBack1 = runningBack1;
	if (runningBack2) userInfo.team.runningBack2 = runningBack2;
	if (tightEnd) userInfo.team.tightEnd = tightEnd;
	if (wideReceiver1) userInfo.team.wideReceiver1 = wideReceiver1;
	if (wideReceiver2) userInfo.team.wideReceiver2 = wideReceiver2;

	try {
		let userProfile = await User.findOne({ username: req.params.username });

		if (userProfile) {
			userProfile = await User.findOneAndUpdate({ username: req.params.username }, { $set: userInfo }, { new: true });

			return res.json(userProfile);
		}
	} catch (error) {
		console.log(error.message);
		res.status(500).send('Server Error');
	}
};

const isObjectEmpty = (body, newTeam) => {
	for (var key in body) {
		if (body[key] !== null && body[key] !== '') {
			newTeam[key] = ObjectId(body[key]);
		} else {
			newTeam[key] = '';
		}
	}

	return Object.keys(newTeam).length === 0;
};
