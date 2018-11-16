/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable prefer-destructuring */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
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
router.get('/category', function(req, res, next) {
  let result = [];

  async.series(
    [
      function(callback) {
        callback(null, null);
      },
      function(callback) {
        models.instance.product_detail({}, function(err, res) {
          if (res) {
            result = res;
          }
          callback(err, null);
        });
      },
    ],
    function(err, results) {
      if (err) return res.send({ status: 'error' });
      res.send({ status: 'oke', data: result });
    }
  );
});
module.exports = router;
