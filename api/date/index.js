'use strict';

var express = require('express');
var controller = require('./date.controller');

var router = express.Router();

router.get('/:date', controller.parse);

module.exports = router;