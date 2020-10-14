const db = require('../models');
const User = db.user;

exports.allAccess = (req, res) => {
	res.status(200).send('Public Content.');
};

exports.userBoard = (req, res) => {
	res.status(200).send('User Content.');
};

exports.currentUser = (req, res) => {
	try {
		const userProfile = User.findOne({ username: req.username }, 'team');
		res.json(userProfile);
	} catch (error) {
		console.log(error.message);
		res.status(500).send('Server Error');
	}
};

exports.allUsers = (req, res) => {
	try {
		const allUserProfiles = User.find({}, 'team');
		res.json(allUserProfile);
	} catch (error) {
		console.log(error.message);
		res.status(500).send('Server Error');
	}
};
