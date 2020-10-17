const db = require('../models');
const { ObjectId } = require('mongodb');
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

	// Build each team member record for querying and calculating weekly scores
	const quarterbackRecord = await Quarterbacks.findOne({ _id: quarterback });
	const runningBack1Record = await RunningBacks.findOne({ _id: runningBack1 });
	const runningBack2Record = await RunningBacks.findOne({ _id: runningBack2 });
	const tightEndRecord = await TightEnds.findOne({ _id: tightEnd });
	const wideReceiver1Record = await WideReceivers.findOne({ _id: wideReceiver1 });
	const wideReceiver2Record = await WideReceivers.findOne({ _id: wideReceiver2 });

	try {
		let userProfile = await User.findOne({ username: req.params.username });
		let newScores = {};

		for (let i = 1; i <= 17; i++) {
			// Quarterback score
			let winOrLose = 1;
			let quarterbackResult = await WeeklyOutcome.findOne({
				Week: `${i}`,
				'Winner/tie': { $regex: quarterbackRecord.Tm, $options: 'i' }
			});
			// console.log(quarterbackResult);
			if (!quarterbackResult) {
				quarterbackResult = await WeeklyOutcome.findOne({
					Week: i,
					'Loser/tie': { $regex: quarterbackRecord.Tm, $options: 'i' }
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

			// Running Back 1 score
			winOrLose = 1;
			let runningBack1Result = await WeeklyOutcome.findOne({
				Week: i,
				'Winner/tie': { $regex: runningBack1Record.Tm, $options: 'i' }
			});
			if (!runningBack1Result) {
				runningBack1Result = await WeeklyOutcome.findOne({
					Week: i,
					'Loser/tie': { $regex: runningBack1Record.Tm, $options: 'i' }
				});
				winOrLose = 0;
			}

			if (runningBack1Result && winOrLose === 1) {
				if (runningBack1Result.PtsW === runningBack1Result.PtsL) {
					finalScore += 0.5;
				} else if (runningBack1Result.PtsW > runningBack1Result.PtsL) {
					finalScore += 1;
				}
			} else if (runningBack1Result && winOrLose === 0) {
				if (runningBack1Result.PtsW === runningBack1Result.PtsL) {
					finalScore += 0.5;
				}
			}

			// Running back 2 score
			winOrLose = 1;
			let runningBack2Result = await WeeklyOutcome.findOne({
				Week: i,
				'Winner/tie': { $regex: runningBack2Record.Tm, $options: 'i' }
			});
			if (!runningBack2Result) {
				runningBack2Result = await WeeklyOutcome.findOne({
					Week: i,
					'Loser/tie': { $regex: runningBack2Record.Tm, $options: 'i' }
				});
				winOrLose = 0;
			}

			if (runningBack2Result && winOrLose === 1) {
				if (runningBack2Result.PtsW === runningBack2Result.PtsL) {
					finalScore += 0.5;
				} else if (runningBack2Result.PtsW > runningBack2Result.PtsL) {
					finalScore += 1;
				}
			} else if (runningBack2Result && winOrLose === 0) {
				if (runningBack2Result.PtsW === runningBack2Result.PtsL) {
					finalScore += 0.5;
				}
			}

			// Tight End score
			winOrLose = 1;
			let tightEndResult = await WeeklyOutcome.findOne({
				Week: i,
				'Winner/tie': { $regex: tightEndRecord.Tm, $options: 'i' }
			});
			if (!tightEndResult) {
				tightEndResult = await WeeklyOutcome.findOne({
					Week: i,
					'Loser/tie': { $regex: tightEndRecord.Tm, $options: 'i' }
				});
				winOrLose = 0;
			}

			if (tightEndResult && winOrLose === 1) {
				if (tightEndResult.PtsW === tightEndResult.PtsL) {
					finalScore += 0.5;
				} else if (tightEndResult.PtsW > tightEndResult.PtsL) {
					finalScore += 1;
				}
			} else if (tightEndResult && winOrLose === 0) {
				if (tightEndResult.PtsW === tightEndResult.PtsL) {
					finalScore += 0.5;
				}
			}

			// Wide receiver 1 score
			winOrLose = 1;
			let wideReceiver1Result = await WeeklyOutcome.findOne({
				Week: i,
				'Winner/tie': { $regex: wideReceiver1Record.Tm, $options: 'i' }
			});
			if (!wideReceiver1Result) {
				wideReceiver1Result = await WeeklyOutcome.findOne({
					Week: i,
					'Loser/tie': { $regex: wideReceiver1Record.Tm, $options: 'i' }
				});
				winOrLose = 0;
			}

			if (wideReceiver1Result && winOrLose === 1) {
				if (wideReceiver1Result.PtsW === wideReceiver1Result.PtsL) {
					finalScore += 0.5;
				} else if (wideReceiver1Result.PtsW > wideReceiver1Result.PtsL) {
					finalScore += 1;
				}
			} else if (wideReceiver1Result && winOrLose === 0) {
				if (wideReceiver1Result.PtsW === wideReceiver1Result.PtsL) {
					finalScore += 0.5;
				}
			}

			// Tight End score
			winOrLose = 1;
			let wideReceiver2Result = await WeeklyOutcome.findOne({
				Week: i,
				'Winner/tie': { $regex: wideReceiver2Record.Tm, $options: 'i' }
			});
			if (!wideReceiver2Result) {
				wideReceiver2Result = await WeeklyOutcome.findOne({
					Week: i,
					'Loser/tie': { $regex: wideReceiver2Record.Tm, $options: 'i' }
				});
				winOrLose = 0;
			}

			if (wideReceiver2Result && winOrLose === 1) {
				if (wideReceiver2Result.PtsW === wideReceiver2Result.PtsL) {
					finalScore += 0.5;
				} else if (wideReceiver2Result.PtsW > wideReceiver2Result.PtsL) {
					finalScore += 1;
				}
			} else if (wideReceiver2Result && winOrLose === 0) {
				if (wideReceiver2Result.PtsW === wideReceiver2Result.PtsL) {
					finalScore += 0.5;
				}
			}

			newScores[`week-${i}`] = finalScore;
			finalScore = 0;
		}

		// Save new scores
		await Score.findOneAndUpdate({ user_id: userProfile._id }, newScores, { new: true }, function(err, result) {
			if (err) {
				return console.error(err);
			}
		});

		if (userProfile) {
			userProfile = await User.findOneAndUpdate({ username: req.params.username }, { $set: userInfo }, { new: true });

			return res.json(userProfile);
		}
	} catch (error) {
		console.log(error.message);
		res.status(500).send('Server Error');
	}
};

exports.returnAllAccountsScores = async (req, res) => {
	try {
		const allAccountsScores = await Score.find().populate('user_id', [ 'username', 'email' ]);

		if (!allAccountsScores) {
			return res.status(400).json({ msg: 'Cannot find account scores' });
		}

		res.json(allAccountsScores);
	} catch (error) {
		console.log(error.message);
		res.status(500).send('Server Error');
	}
};
