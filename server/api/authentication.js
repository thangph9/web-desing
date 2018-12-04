/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef-init */
/* eslint-disable no-underscore-dangle */
/* eslint-disable new-cap */
/* eslint-disable camelcase */
/* eslint-disable no-else-return */
/* eslint-disable array-callback-return */
/* eslint-disable arrow-body-style */
/* eslint-disable spaced-comment */
/* eslint-disable no-plusplus */
/* eslint-disable no-redeclare */
/* eslint-disable eqeqeq */
/* eslint-disable one-var */
/* eslint-disable no-multi-assign */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable no-undef */
/* eslint-disable no-useless-return */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-destructuring */
/* eslint-disable object-shorthand */
/* eslint-disable prefer-template */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable dot-notation */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable prefer-const */
/* eslint-disable import/order */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/no-extraneous-dependencies */
const async = require('async');
const models = require('../settings');
const fs = require('fs');
const sharp = require('sharp');
const Uuid = require('cassandra-driver').types.Uuid;
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var jwtpublic = fs.readFileSync('./ssl/jwtpublic.pem', 'utf8');
var jwtprivate = fs.readFileSync('./ssl/jwtprivate.pem', 'utf8');

const MESSAGE = {
  USER_NOT_MATCH: 'Tài khoản hoặc mật khẩu không đúng',
  USER_NOT_FOUND: 'Tài khoản này không tồn tại!',
  USER_HAD_BANNED: 'Tài khoản đang bị khoá',
  SYSTEM_BUSY: 'Hệ thống bận!',
  PAYMENT_NOT_SEND_OTP: 'Bạn chưa nhắn tin xác thực! Hãy nhắn tin tới tổng đài.',
  PAYMENT_OTP_OK: 'Xác thực thành công!',
  PAYMENT_OTP_WRONG: 'OTP không chính xác.',
};
function register(req, res) {
  var params = req.body;
  let user_id = Uuid.random();
  let saltRounds = 10;
  var queries = [];
  let token = undefined;
  var _salt = '';
  var _hash = '';
  var PARAM_IS_VALID = {};
  async.series(
    [
      function(callback) {
        PARAM_IS_VALID['phone'] = params.phone;
        PARAM_IS_VALID['email'] = params.email;
        PARAM_IS_VALID['fullname'] = params.fullname;
        PARAM_IS_VALID['username'] = params.username;
        PARAM_IS_VALID['address'] = params.address;
        PARAM_IS_VALID['password'] = params.password;
        PARAM_IS_VALID['user_id'] = user_id;
        PARAM_IS_VALID['enabled'] = true;
        PARAM_IS_VALID['createat'] = new Date().getTime();
        callback(null, null);
      },
      function(callback) {
        bcrypt.genSalt(saltRounds, function(err, salt) {
          _salt = salt;
          callback(err, null);
        });
      },
      function(callback) {
        bcrypt.hash(params.password, _salt, function(err, hash) {
          _hash = hash;
          callback(err, null);
        });
      },
      function(callback) {
        let account_object = {
          user_id: PARAM_IS_VALID['user_id'],
          address: PARAM_IS_VALID['address'],
          email: PARAM_IS_VALID['email'],
          createat: PARAM_IS_VALID['createat'],
          name: PARAM_IS_VALID['fullname'],
          phone: PARAM_IS_VALID['phone'],
          username: PARAM_IS_VALID['username'],
        };
        let account_login_object = {
          username: PARAM_IS_VALID['username'],
          enabled: PARAM_IS_VALID['enabled'],
          password: _hash,
          password_hash_algorithm: 'bcrypt',
          password_salt: _salt,
          user_id: PARAM_IS_VALID.user_id,
        };
        const account = () => {
          let object = account_object;
          let instance = new models.instance.account(object);
          let save = instance.save({ if_exist: true, return_query: true });
          return save;
        };
        queries.push(account());
        const account_login = () => {
          let object = account_login_object;
          let instance = new models.instance.account_login(object);
          let save = instance.save({ if_exist: true, return_query: true });
          return save;
        };
        queries.push(account_login());
        callback(null, null);
      },
    ],
    function(err, result) {
      if (err) res.json({ status: false });
      try {
        token = jwt.sign(
          { username: PARAM_IS_VALID.username, user_id: PARAM_IS_VALID.user_id },
          jwtprivate,
          {
            expiresIn: '30d', // expires in 30 day
            algorithm: 'RS256',
          }
        );
      } catch (e) {
        console.log(e);
      }
      let isLogin = false;
      if (token != undefined) {
        isLogin = true;
      }
      let currentAuthority = { auth: isLogin, token: token };
      models.doBatch(queries, function(err) {
        // if (err) throw err;
        //console.log(queries);
        if (err) return res.json({ status: false });
        else res.json({ status: true, currentAuthority: currentAuthority });
      });
    }
  );
}
function login(req, res) {
  var params = req.body;
  var PARAM_IS_VALID = {};
  var user = {};
  var hashPassword = '';
  var isLogin = false;
  var token = '';
  var msg = '';
  async.series(
    [
      function(callback) {
        PARAM_IS_VALID['username'] = params.username;
        PARAM_IS_VALID['password'] = params.password;
        callback(null, null);
      },
      function(callback) {
        models.instance.account_login.find({ username: PARAM_IS_VALID['username'] }, function(
          err,
          _user
        ) {
          if (_user != undefined && _user.length > 0) {
            _user[0].enabled ? (hashPassword = _user[0].password) : (msg = MESSAGE.USER_HAD_BANNED);
            user = _user;
          } else {
            msg = MESSAGE.USER_NOT_FOUND;
          }
          callback(err, null);
        });
      },
      function(callback) {
        if (hashPassword != '') {
          bcrypt.compare(PARAM_IS_VALID['password'], hashPassword, function(err, result) {
            // res == true
            result ? (isLogin = result) : (msg = MESSAGE.USER_NOT_MATCH);
            callback(err, null);
          });
        } else callback(null, null);
      },
      function(callback) {
        if (isLogin) {
          try {
            token = jwt.sign({ username: user[0].username, user_id: user[0].user_id }, jwtprivate, {
              expiresIn: '30d', // expires in 30 day
              algorithm: 'RS256',
            });
          } catch (e) {
            console.log(e);
          }
        }
        callback(null, null);
      },
    ],
    function(err, result) {
      let currentAuthority = { auth: isLogin, token: token };
      if (err) {
        res.json({ status: false, message: msg, currentAuthority: currentAuthority });
      } else
        msg != ''
          ? res.json({ status: false, message: msg, currentAuthority: currentAuthority })
          : res.json({
              status: true,
              currentAuthority: currentAuthority,
              username: user[0].username,
            });
    }
  );
}
var router = express.Router();
router.post('/register', register);
router.post('/login', login);
module.exports = router;
