var express = require('express'),
	bluemix = require('./config/bluemix'),
	TradeoffAnalytics = require('./tradeoff-analytics'),
	auth = require('./config/auth'),
	extend = require('util')._extend,
	app = express(),
	socketio = require('socket.io'),
	request = require('request');

// if bluemix credentials exists, then override local
var credentials = extend({
  url: auth.bluemix.url,
  username: auth.bluemix.username,
  password: auth.bluemix.password
}, bluemix.getServiceCreds('tradeoff_analytics')); // VCAP_SERVICES

// Create the service wrapper
var tradeoffAnalytics = new TradeoffAnalytics(credentials);

module.exports.listen = function (server) {
	console.log("running this");
	io = socketio.listen(server);
	io.set('log level', 1);

  	io.sockets.on('connection', function (socket) {
    	console.log("connected");
    	socket.emit('welcome', {message: 'connected'});
    });
}