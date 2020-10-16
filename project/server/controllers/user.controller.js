const { user } = require('../models');
const db = require('../models');
const Quarterbacks = db.quarterbacks;
const WideReceivers = db.wideReceivers;
const TightEnds = db.tightEnds;
const RunningBacks = db.runningBacks;
const User = db.user;
const WeeklyOutcome = db.weeklyOutcome;
const Score = db.scores;

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

	let finalScore = 0;

	// Build the team object
	const userInfo = {};
	userInfo.team = {};
	if (quarterback) userInfo.team.quarterback = quarterback;
	if (runningBack1) userInfo.team.runningBack1 = runningBack1;
	if (runningBack2) userInfo.team.runningBack2 = runningBack2;
	if (tightEnd) userInfo.team.tightEnd = tightEnd;
	if (wideReceiver1) userInfo.team.wideReceiver1 = wideReceiver1;
	if (wideReceiver2) userInfo.team.wideReceiver2 = wideReceiver2;

	const quarterbackRecord = await Quarterbacks.findOne({ _id: quarterback });
	const runningBack1Record = await RunningBacks.findOne({ _id: runningBack1 });
	const runningBack2Record = await RunningBacks.findOne({ _id: runningBack2 });
	const tightEndRecord = await TightEnds.findOne({ _id: tightEnd });
	const wideReceiver1Record = await WideReceivers.findOne({ _id: wideReceiver1 });
	const wideReceiver2Record = await WideReceivers.findOne({ _id: wideReceiver2 });

	try {
		let userProfile = await User.findOne({ username: req.params.username });
		let scores = await Score.findOne({ user: userProfile._id });

		for (let i = 1; i <= 17; i++) {
			let winOrLose = 1;
			let quarterbackResult = await WeeklyOutcome.findOne({
				week: i,
				winnerTie: { $regex: quarterbackRecord.Tm, $options: 'i' }
			});
			if (!quarterbackResult) {
				quarterbackResult = await WeeklyOutcome.findOne({
					week: i,
					loserTie: { $regex: quarterbackRecord.Tm, $options: 'i' }
				});
				winOrLose = 0;
			}

			if (quarterbackResult && winOrLose === 1) {
				if (quarterbackResult.PtsW === quarterbackResult.PtsL) {
					finalScore += 0.5;
				} else if (quarterbackResult.PtsW > quarterbackResult.PtsL) {
					finalScore += 1;
				}
			} else if (quarterbackResult && winOrLose === 0) {
				if (quarterbackResult.PtsW === quarterbackResult.PtsL) {
					finalScore += 0.5;
				}
			}

			scores[`week-${i}`] = finalScore;
		}

		if (userProfile) {
			userProfile = await User.findOneAndUpdate({ username: req.params.username }, { $set: userInfo }, { new: true });

			return res.json(userProfile);
		}
	} catch (error) {
		console.log(error.message);
		res.status(500).send('Server Error');
	}
};
