const express = require('express');
const bodyParser = require('body-parser');

// Set the port to 3000 OR let the process set the port (if deployed to Heroku)
const PORT = process.env.PORT || 3000;

// Initialize Express
const app = express();

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({
    extended: true
}));
// Use express.static to serve the public folder as a static directory
app.use(express.static('public'));

// Routes
// API Routes (require from routes file and pass in Express app)
require('./routes/api-routes')(app);
// HTML Routes (require from routes file and pass in Express app)
require('./routes/html-routes')(app);

// Start the server
app.listen(PORT, function () {
    console.log(`App running on port ${PORT}`);
});