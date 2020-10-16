const config = require('../config/auth.config');
const db = require('../models');
const User = db.user;
const Role = db.role;
const Scores = db.scores;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { ObjectId } = require('mongodb');

exports.signup = (req, res) => {
	console.log(req.body);

	const user = new User({
		username: req.body.username,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 8),
		team: {
			quarterback: ObjectId('5f80a68660db5488b0d03a76'),
			runningBack1: ObjectId('5f80bf871053ba3e50c6ea22'),
			runningBack2: ObjectId('5f80bf871053ba3e50c6ea23'),
			tightEnd: ObjectId('5f80a781847a2e2180daa9d7'),
			wideReceiver1: ObjectId('5f80a7b25dd001f001785b93'),
			wideReceiver2: ObjectId('5f80a7b25dd001f001785b98')
		}
	});



	user.save((err, user) => {
		if (err) {
			res.status(500).send({ message: err });
			return;
		}

		if (req.body.roles) {
			Role.find(
				{
					name: { $in: req.body.roles }
				},
				(err, roles) => {
					if (err) {
						res.status(500).send({ message: err });
						return;
					}

					user.roles = roles.map((role) => role._id);
					user.save((err, user) => {
						if (err) {
							res.status(500).send({ message: err });
							return;
						}

						const scores = new Scores({
							user_id: user._id,
						});
						scores.save((err) => {
							if (err) {
								res.status(500).send({ message: err });
								return;
							}

							res.send({ message: 'User was registered successfully!' });
						});

						// res.send({ message: 'User was registered successfully!' });
					});
				}
			);
		} else {
			Role.findOne({ name: 'user' }, (err, role) => {
				if (err) {
					res.status(500).send({ message: err });
					return;
				}

				user.roles = [ role._id ];
				user.save((err, user) => {
					if (err) {
						res.status(500).send({ message: err });
						return;
					}

					const scores = new Scores({
						user_id: user._id,
					});
					scores.save((err) => {
						if (err) {
							res.status(500).send({ message: err });
							return;
						}

						res.send({ message: 'User was registered successfully!' });
					});

					// res.send({ message: 'User was registered successfully!' });
				});
			});
		}
	});
};

exports.signin = (req, res) => {
	User.findOne({
		username: req.body.username
	})
		.populate('roles', '-__v')
		.exec((err, user) => {
			if (err) {
				res.status(500).send({ message: err });
				return;
			}

			if (!user) {
				return res.status(404).send({ message: 'User Not found.' });
			}

			var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

			if (!passwordIsValid) {
				return res.status(401).send({
					accessToken: null,
					message: 'Invalid Password!'
				});
			}

			const token = jwt.sign({ id: user.id }, config.secret, {
				expiresIn: 86400 // 24 hours
			});

			const authorities = [];

			for (let i = 0; i < user.roles.length; i++) {
				authorities.push('ROLE_' + user.roles[i].name.toUpperCase());
			}
			res.status(200).send({
				id: user._id,
				username: user.username,
				email: user.email,
				roles: authorities,
				accessToken: token,
				team: user.team
			});
		});
};
