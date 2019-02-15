/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-continue */
/* eslint-disable no-useless-escape */
/* eslint-disable spaced-comment */
/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-redeclare */
/* eslint-disable arrow-body-style */
/* eslint-disable one-var */
/* eslint-disable no-else-return */
/* eslint-disable no-use-before-define */
/* eslint-disable no-empty */
/* eslint-disable eqeqeq */
/* eslint-disable vars-on-top */
/* eslint-disable object-shorthand */
/* eslint-disable prefer-template */
/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable dot-notation */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable prefer-const */
/* eslint-disable import/order */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
var moment = require('moment');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const async = require('async');
const bcrypt = require('bcryptjs');
const Uuid = require('cassandra-driver').types.Uuid;
const models = require('../settings');
var jwtpublic = fs.readFileSync('./ssl/jwtpublic.pem', 'utf8');
var jwtprivate = fs.readFileSync('./ssl/jwtprivate.pem', 'utf8');
var express = require('express');
const sharp = require('sharp');
var read = filename => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};
function uploadFile(req, res) {
  let dimensions = '';
  let isValid = true;
  upload.single('file')(req, res, function(err) {
    if (err) {
      console.log(err);
      return res.send({ status: 'error' });
    }
    let imageid = Uuid.random();
    try {
      let file = req.file;
      let image = file.buffer;
      let options = {
        filename: file.originalname,
        size: file.size + '',
        encoding: file.encoding,
        mimetype: file.mimetype,
      };
      var image_object = {
        imageid: imageid,
        image: image,
        options: options,
        createat: new Date(),
        active: false,
      };
      dimensions = sizeOf(image);
      let object = image_object;
      let instance = new models.instance.images_by_tri(object);
      let save = instance.save(function(err) {});
    } catch (e) {
      console.log(e);
      return res.send({ status: 'error' });
    }
    res.send({ status: 'ok', file: { imageid, isValid } });
  });
}
function uploadFileAvatar(req, res) {
  let dimensions = '';
  let isValid = true;
  upload.single('file')(req, res, function(err) {
    if (err) {
      console.log(err);
      return res.send({ status: 'error' });
    }
    let imageid = Uuid.random();
    try {
      let file = req.file;
      let image = file.buffer;
      let options = {
        filename: file.originalname,
        size: file.size + '',
        encoding: file.encoding,
        mimetype: file.mimetype,
      };
      var image_object = {
        imageid: imageid,
        image: image,
        options: options,
        createat: new Date(),
        active: false,
      };
      dimensions = sizeOf(image);
      let object = image_object;
      let instance = new models.instance.images_by_tri(object);
      let save = instance.save(function(err) {});
    } catch (e) {
      console.log(e);
      return res.send({ status: 'error' });
    }
    res.send({ status: 'ok', file: { imageid, isValid } });
  });
}
var router = express.Router();
router.post('/upload', uploadFile);
router.post('/upload/avatar', uploadFileAvatar);
module.exports = router;
