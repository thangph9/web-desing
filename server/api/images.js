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
var publicKEY = fs.readFileSync('./ssl/jwtpublic.pem', 'utf8');
const sharp = require('sharp');

function image(req, res) {
  let image = null;
  let imageid = '';
  async.series(
    [
      function(callback) {
        try {
          let rawImage = req.params.imageid.substring(0, 32);
          let uuid =
            rawImage.substring(0, 7) +
            '-' +
            rawImage.substring(7, 11) +
            '-' +
            rawImage.substring(11, 15) +
            '-' +
            rawImage.substring(15, 20) +
            '-' +
            rawImage.substring(20, 32);

          imageid = models.uuidFromString(uuid);
        } catch (e) {
          res.contentType('image/jpeg');
          return res.end('', 'binary');
        }
        callback(null, null);
      },
      function(callback) {
        models.instance.images.find({ imageid: imageid }, function(err, img) {
          if (img && img.length > 0) {
            image = img[0].image;
          }
          callback(err, null);
        });
      },
    ],
    function(err, result) {
      if (err) {
        res.contentType('image/jpeg');
        res.end('', 'binary');
      } else if (image != null) {
        res.writeHead(200, { 'Content-Type': 'image/jpg' });
        res.end(image, 'binary');
      } else {
        res.contentType('image/jpeg');
        res.end('', 'binary');
      }
    }
  );
}
function image320w(req, res) {
  let image = null;
  let imageid = '';
  let resizedata = '';
  async.series(
    [
      function(callback) {
        try {
          let rawImage = req.params.imageid.substring(0, 32);
          let uuid =
            rawImage.substring(0, 7) +
            '-' +
            rawImage.substring(7, 11) +
            '-' +
            rawImage.substring(11, 15) +
            '-' +
            rawImage.substring(15, 20) +
            '-' +
            rawImage.substring(20, 32);

          imageid = models.uuidFromString(uuid);
        } catch (e) {
          res.contentType('image/jpeg');
          return res.end('', 'binary');
        }
        callback(null, null);
      },
      function(callback) {
        models.instance.images.find({ imageid: imageid }, function(err, img) {
          if (img && img.length > 0) {
            image = img[0].image;
          }
          callback(err, null);
        });
      },
      function(callback) {
        if (image) {
          resize(image, 456, 202, function(err, img) {
            resizedata = img;
            callback(err, null);
          });
        } else {
          callback(null, null);
        }
      },
    ],
    function(err, result) {
      if (err) {
        res.contentType('image/jpeg');
        res.end('', 'binary');
      } else if (image != null) {
        res.writeHead(200, { 'Content-Type': 'image/jpg' });
        res.end(resizedata, 'binary');
      } else {
        res.contentType('image/jpeg');
        res.end('', 'binary');
      }
    }
  );
}
function resize(image, w, h, callback) {
  sharp(image)
    .resize(w, h)
    .toBuffer()
    .then(data => {
      callback(null, data);
    })
    .catch(err => callback(err, null));
}
function image1178w(req, res) {
  res.send({ status: 'ok' });
}
function image1280w(req, res) {
  let image = null;
  let imageid = '';
  let resizedata = '';
  async.series(
    [
      function(callback) {
        try {
          let rawImage = req.params.imageid.substring(0, 32);
          let uuid =
            rawImage.substring(0, 7) +
            '-' +
            rawImage.substring(7, 11) +
            '-' +
            rawImage.substring(11, 15) +
            '-' +
            rawImage.substring(15, 20) +
            '-' +
            rawImage.substring(20, 32);

          imageid = models.uuidFromString(uuid);
        } catch (e) {
          res.contentType('image/jpeg');
          return res.end('', 'binary');
        }
        callback(null, null);
      },
      function(callback) {
        models.instance.images.find({ imageid: imageid }, function(err, img) {
          if (img && img.length > 0) {
            image = img[0].image;
          }
          callback(err, null);
        });
      },
      function(callback) {
        if (image) {
          resize(image, 1500, 1000, function(err, img) {
            resizedata = img;
            callback(err, null);
          });
        } else {
          callback(null, null);
        }
      },
    ],
    function(err, result) {
      if (err) {
        res.contentType('image/jpeg');
        res.end('', 'binary');
      } else if (image != null) {
        res.writeHead(200, { 'Content-Type': 'image/jpg' });
        res.end(resizedata, 'binary');
      } else {
        res.contentType('image/jpeg');
        res.end('', 'binary');
      }
    }
  );
}
function imagew(req, res) {
  res.send({ status: 'ok' });
}
function image90w(req, res) {
  let image = null;
  let imageid = '';
  let resizedata = '';
  async.series(
    [
      function(callback) {
        try {
          let rawImage = req.params.imageid.substring(0, 32);
          let uuid =
            rawImage.substring(0, 7) +
            '-' +
            rawImage.substring(7, 11) +
            '-' +
            rawImage.substring(11, 15) +
            '-' +
            rawImage.substring(15, 20) +
            '-' +
            rawImage.substring(20, 32);

          imageid = models.uuidFromString(uuid);
        } catch (e) {
          res.contentType('image/jpeg');
          return res.end('', 'binary');
        }
        callback(null, null);
      },
      function(callback) {
        models.instance.images.find({ imageid: imageid }, function(err, img) {
          if (img && img.length > 0) {
            image = img[0].image;
          }
          callback(err, null);
        });
      },
      function(callback) {
        if (image) {
          resize(image, 80, 100, function(err, img) {
            resizedata = img;
            callback(err, null);
          });
        } else {
          callback(null, null);
        }
      },
    ],
    function(err, result) {
      if (err) {
        res.contentType('image/jpeg');
        res.end('', 'binary');
      } else if (image != null) {
        res.writeHead(200, { 'Content-Type': 'image/jpg' });
        res.end(resizedata, 'binary');
      } else {
        res.contentType('image/jpeg');
        res.end('', 'binary');
      }
    }
  );
}
function imageByTri(req, res) {
  let image = null;
  let imageid = '';
  async.series(
    [
      function(callback) {
        try {
          let rawImage = req.params.imageid.substring(0, 32);
          let uuid =
            rawImage.substring(0, 7) +
            '-' +
            rawImage.substring(7, 11) +
            '-' +
            rawImage.substring(11, 15) +
            '-' +
            rawImage.substring(15, 20) +
            '-' +
            rawImage.substring(20, 32);

          imageid = models.uuidFromString(uuid);
        } catch (e) {
          res.contentType('image/jpeg');
          return res.end('', 'binary');
        }
        callback(null, null);
      },
      function(callback) {
        try {
          models.instance.images_by_tri.find({ imageid: imageid }, function(err, img) {
            if (img && img.length > 0) {
              image = img[0].image;
            }
            callback(err, null);
          });
        } catch (error) {
          exceptionError(error);
        }
      },
    ],
    function(err, result) {
      try {
        if (err) {
          res.contentType('image/jpeg');
          res.end('', 'binary');
        } else if (image != null) {
          res.writeHead(200, { 'Content-Type': 'image/jpg' });
          res.end(image, 'binary');
        } else {
          res.contentType('image/jpeg');
          res.end('', 'binary');
        }
      } catch (error) {
        exceptionError(error);
      }
    }
  );
}

var express = require('express');
var router = express.Router();

router.get('/images/f/:imageid', image);
router.get('/images/w320/:imageid', image320w);
router.get('/images/w1178/:imageid', image1178w);
router.get('/images/w1280/:imageid', image1280w);
router.get('/images/w/:imageid', imagew);
router.get('/images/w90/:imageid', image90w);
router.get('/images/ft/:imageid', imageByTri);
module.exports = router;
