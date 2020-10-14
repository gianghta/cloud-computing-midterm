const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require('./user.model');
db.role = require('./role.model');
db.quarterbacks = require('./quarterbacks.model');
db.runningBacks = require('./running-backs.model');
db.tightEnds = require('./tight-ends.model');
db.wideReceivers = require('./wide-receivers.model');
db.weeklyOutcome = require('./weekly-outcome.model');

db.ROLES = [ 'guest', 'user' ];

module.exports = db;
