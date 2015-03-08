/*jshint node:true*/

// app.js
// This file contains the server side JavaScript code for your application.
// This sample application uses express as web application framework (http://expressjs.com/),
// and jade as template engine (http://jade-lang.com/).

var express = require('express'),
	bluemix = require('./config/bluemix'),
	TradeoffAnalytics = require('./tradeoff-analytics'),
	// auth = require('./config/auth'),
	extend = require('util')._extend,
	app = express(),
	socketio = require('socket.io'),
	socket = require('./socket.js'),
	http = require('http'),
	request = require('request');

// setup middleware
app.use(app.router);
app.use(express.errorHandler());
app.use(express.bodyParser());
app.use(express.static(__dirname + '/public')); //setup static public directory
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); //optional since express defaults to CWD/views


// There are many useful environment variables available in process.env.
// VCAP_APPLICATION contains useful information about a deployed application.
var appInfo = JSON.parse(process.env.VCAP_APPLICATION || "{}");

// // if bluemix credentials exists, then override local
// var credentials = extend({
//   url: auth.bluemix.url,
//   username: auth.bluemix.username,
//   password: auth.bluemix.password
// }, bluemix.getServiceCreds('tradeoff_analytics')); // VCAP_SERVICES

// // Create the service wrapper
// var tradeoffAnalytics = new TradeoffAnalytics(credentials);

// render index page
app.get('/', function(req, res){
	res.render('home.ejs');
});

app.post('/glucose', express.bodyParser(), function(req, res){
	console.log(req.body);
});

// The IP address of the Cloud Foundry DEA (Droplet Execution Agent) that hosts this application:
var host = (process.env.VCAP_APP_HOST || 'localhost');
// The port on the DEA for communication with the application:
var port = (process.env.VCAP_APP_PORT || 3000);
// Start server
// server = http.createServer(app).listen(port, function () {
// 	console.log('App started on port ' + port);
// });

// socket.listen(server);
app.listen(port, host);
console.log('App started on port ' + port);

