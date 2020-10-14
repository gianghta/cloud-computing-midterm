const db = require('../models');
const User = db.user;

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
