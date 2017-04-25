'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./configuration/environment');

// Setup server
var app = express();
var server = require('http').createServer(app);
require('./configuration/express_config')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function() {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;