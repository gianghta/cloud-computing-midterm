const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';
const CLIENT_BUILD_PATH = path.join(__dirname, '../client/build');

// App
const app = express();
app.use(bodyParser.json());

// Connect to database
connectDB();

// Static files
app.use(express.static(CLIENT_BUILD_PATH));

// API
app.get('/api', (req, res) => {
	res.set('Content-Type', 'application/json');
	let data = {
		message: 'Hello world!!!!'
	};
	res.send(JSON.stringify(data, null, 2));
});

// All remaining requests return the React app, so it can handle routing
app.get('*', function(request, response) {
	response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

app.listen(PORT, HOST);
console.log(`Running NodeJS server on http://${HOST}:${PORT}`);
