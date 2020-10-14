const { authJwt } = require('../middlewares');
const controller = require('../controllers/player.controller');

module.exports = function(app) {
	app.use(function(req, res, next) {
		res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
		next();
	});

	app.get('/api/quarterbacks/all', [ authJwt.verifyToken ], controller.allQuarterbacks);

	app.get('/api/wideReceivers/all', [ authJwt.verifyToken ], controller.allWideReceivers);

	app.get('/api/runningBacks/all', [ authJwt.verifyToken ], controller.allRunningBacks);

	app.get('/api/tightEnds/all', [ authJwt.verifyToken ], controller.allTightEnds);
};
