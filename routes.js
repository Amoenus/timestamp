'use strict';

var path = require('path');

module.exports = function(app) {

  app.use('/', require('./api/date'));

  app.route('/')
     .get(function(req, res) {
       res.sendFile(path.resolve(path.dirname(require.main.filename) + '/client/index.html'));
     });
};