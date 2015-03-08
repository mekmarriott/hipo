/*jshint node:true*/

// app.js
// This file contains the server side JavaScript code for your application.
// This sample application uses express as web application framework (http://expressjs.com/),
// and jade as template engine (http://jade-lang.com/).

var express = require('express'),
	bluemix = require('./config/bluemix'),
	TradeoffAnalytics = require('./tradeoff-analytics'),
	auth = require('./config/auth'),
	extend = require('util')._extend,
	app = express(),
	socketio = require('socket.io'),
	socket = require('./socket.js'),
	http = require('http'),
	request = require('request');

// setup middleware
app.use(app.router);
app.use(express.errorHandler());
app.use(express.static(__dirname + '/public')); //setup static public directory
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); //optional since express defaults to CWD/views


// There are many useful environment variables available in process.env.
// VCAP_APPLICATION contains useful information about a deployed application.
var appInfo = JSON.parse(process.env.VCAP_APPLICATION || "{}");

// render index page
app.get('/', function(req, res){
	res.render('home.ejs');
});

// VCAP_SERVICES contains all the credentials of services bound to
// this application. For details of its content, please refer to
// the document or sample of each service.
// var services = JSON.parse(process.env.VCAP_SERVICES || "{}");
//service name, check the VCAP_SERVICES in Bluemix to get the name of the services you have
  // var service_name = 'tradeoff_analytics';
 
  // if (services[service_name]) {
  //   var svc = services[service_name][0].credentials;
  //   service_url = svc.url;
  //   service_username = svc.username;
  //   service_password = svc.password;
  // } else {
  //   console.log('The service '+ service_name +' is not in the VCAP_SERVICES. Did you forget to bind it?');
  // }

// The IP address of the Cloud Foundry DEA (Droplet Execution Agent) that hosts this application:
var host = (process.env.VCAP_APP_HOST || 'localhost');
// The port on the DEA for communication with the application:
var port = (process.env.VCAP_APP_PORT || 3000);
// Start server
server = http.createServer(app).listen(port, function () {
	console.log('App started on port ' + port);
});

socket.listen(server);
// app.listen(port, host);
// console.log('App started on port ' + port);

