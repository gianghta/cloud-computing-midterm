const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const defaultConnectionString = require('./config/default.json');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';
const CLIENT_BUILD_PATH = path.join(__dirname, '../client/build');

// App
const app = express();
app.use(bodyParser.json()); // parse requests of content-type - application/json
app.use(bodyParser.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded

// Connect to database
// connectDB();
const db = require('./models');
const Role = db.role;

db.mongoose
	.connect(defaultConnectionString.mongoURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log('Successfully connected to MongoDB');
		initial();
	})
	.catch((err) => {
		console.error('Connection error', err);
		process.exit();
	});

function initial() {
	Role.estimatedDocumentCount((err, count) => {
		if (!err && count === 0) {
			new Role({
				name: 'user'
			}).save((err) => {
				if (err) {
					console.log('error', err);
				}

				console.log('added "user" to roles collection');
			});

			new Role({
				name: 'guest'
			}).save((err) => {
				if (err) {
					console.log('error', err);
				}

				console.log('added "guest" to roles collection');
			});
		}
	});
}

// Static files
app.use(express.static(CLIENT_BUILD_PATH));

// Routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/player.routes')(app);

// All remaining requests return the React app, so it can handle routing
app.get('*', function(request, response) {
	response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

app.listen(PORT, HOST);
console.log(`Running NodeJS server on http://${HOST}:${PORT}`);
