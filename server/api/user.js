var express = require('express');
var moment = require('moment');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const async = require('async');
const bcrypt = require('bcryptjs');
const Uuid = require('cassandra-driver').types.Uuid;
const models = require('../settings');

var publicKEY = fs.readFileSync('./ssl/jwtpublic.pem', 'utf8');
var router = express.Router();
router.get('/user', function(req, res, next) {
  res.send({ status: 'oke' });
});
module.exports = router;
