var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var routes = require('./server/routes/routes');
var fs = require('fs');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var dbConfig = require('./server/config/database.js');

// log requests to console
app.use(morgan('dev'));

// POST request body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set public folder
app.use(express.static(__dirname + '/public'));

// set view engine as simple html reader
app.set('view engine', 'html');
app.engine('html', function(path, options, cb) {
    fs.readFile(path, 'utf-8', cb);
});

// connect to database
mongoose.createConnection(dbConfig.uri);

// add routes
app.use('/', routes);

// general error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
});

// set port, listen and log 
app.listen(port, function() {
    console.log("running at localhost:" + port);
});

module.exports = app;