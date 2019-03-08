/* eslint-disable no-param-reassign */
/* eslint-disable no-params-reassign */
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
var nodemailer = require('nodemailer');
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
  USER_EXISTS: 'Tài khoản đã được sử dụng',
  CONFIRM_TOKEN: 'Vui lòng kiểm tra Email của bạn để xác thực tài khoản',
};
function register(req, res) {
  var params = req.body;
  let user_id = Uuid.random();
  let saltRounds = 10;
  var _salt = '';
  var _hash = '';
  var queries = [];
  var otpRandom = Math.floor(10000000000 + Math.random() * 90000000000);
  var PARAM_IS_VALID = {};
  var link = '';
  var tokenVerify = '';
  async.series(
    [
      function(callback) {
        PARAM_IS_VALID['phone'] = params.phone;
        PARAM_IS_VALID['email'] = params.email;
        PARAM_IS_VALID['fullname'] = params.fullname;
        PARAM_IS_VALID['username'] = params.email;
        PARAM_IS_VALID['address'] = params.address;
        PARAM_IS_VALID['password'] = params.password;
        PARAM_IS_VALID['user_id'] = user_id;
        PARAM_IS_VALID['enabled'] = true;
        PARAM_IS_VALID['createat'] = new Date().getTime();
        PARAM_IS_VALID['createatOTP'] = new Date().getTime() + 2592000000;
        callback(null, null);
      },
      function(callback) {
        models.instance.account_login.find({ username: PARAM_IS_VALID['username'] }, function(
          err,
          _user
        ) {
          if (_user != undefined && _user.length > 0) {
            return res.json({ status: 'error', message: 'Tài khoản đã tồn tại!' });
          }
          callback(err, null);
        });
      },
      /*
        function (callback) {
        try {
          tokenVerify = jwt.sign(
            { username: PARAM_IS_VALID.username, tokenVerify: otpRandom + '', phone: PARAM_IS_VALID['phone'], email: PARAM_IS_VALID['email'], fullname: PARAM_IS_VALID['fullname'], address: PARAM_IS_VALID['address'], password: PARAM_IS_VALID['password'], },
            jwtprivate,
            {
              expiresIn: '30d', // expires in 30 day
              algorithm: 'RS256',
            }
          );
        } catch (e) {
          console.log(e);
        }
        callback(null, null)
      },
      function (callback) {
        let otp_object = {
          username: PARAM_IS_VALID.username,
          tokenverify: otpRandom + '',
          time: PARAM_IS_VALID['createatOTP']
        };
        const token = () => {
          try {
            let object = otp_object;
            let instance = new models.instance.user_by_tokenverify(object);
            let save = instance.save({ if_exist: true, return_query: true });
            return save;
          } catch (error) {
            console.log(error)
          }
        };
        queries.push(token());
        callback(null, null)
      },
      function (callback) {

        link = "http://localhost:8000/verifyemail?otp=" + tokenVerify;
        callback(null, null);
      },
      function (callback) {
        transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'trjvjp1997@gmail.com',
            pass: 'concho1234'
          }
        });
        callback(null, null)
      },
      function (callback) {
        mailOptions = {
          from: 'trjvjp1997@gmail.com',
          to: PARAM_IS_VALID.username,
          subject: 'Verify Email',
          html: '<table border="0" cellspacing="0" cellpadding="0" style="max-width:600px"><tbody><tr><td><table width="100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td align="left"><img width="92" height="32" src="https://ci4.googleusercontent.com/proxy/2Aq8EEZmur-HMDuHJac8keX3JRh-9ErM47lWIV3YoWn3QXPh0iftgqzcV1V6YC9G0-VCfMKXocE6LfU0aybfJzQukHYc-PEOK7BSzcLfCA1yPmIxyLaCEXbWsKyafaASD2LIdcFL=s0-d-e1-ft#https://ssl.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_188x64dp.png" style="display:block;width:92px;height:32px" class="CToWUd"></td><td align="right"><img width="32" height="32" style="display:block;width:32px;height:32px" src="https://ci3.googleusercontent.com/proxy/12rTzUTfWWCBJcvBcXJwQVKJIoKWWntqD08OrTXdjt7fq1-LLHD4oI_HQpgdZC1Gx7dX6vqHiGVE_VTOkZWq_yGhaViaMBlMd9o=s0-d-e1-ft#https://ssl.gstatic.com/accountalerts/email/keyhole.png" class="CToWUd"></td></tr></tbody></table></td></tr><tr height="16"></tr><tr><td><table bgcolor="#4184F3" width="100%" border="0" cellspacing="0" cellpadding="0" style="min-width:332px;max-width:600px;border:1px solid #e0e0e0;border-bottom:0;border-top-left-radius:3px;border-top-right-radius:3px"><tbody><tr><td height="72px" colspan="3"></td></tr><tr><td width="32px"></td><td style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:24px;color:#ffffff;line-height:1.25">Google Verification Email</td><td width="32px"></td></tr><tr><td height="18px" colspan="3"></td></tr></tbody></table></td></tr><tr><td><table bgcolor="#FAFAFA" width="100%" border="0" cellspacing="0" cellpadding="0" style="min-width:332px;max-width:600px;border:1px solid #f0f0f0;border-bottom:1px solid #c0c0c0;border-top:0;border-bottom-left-radius:3px;border-bottom-right-radius:3px"><tbody><tr height="16px"><td width="32px" rowspan="3"></td><td></td><td width="32px" rowspan="3"></td></tr><tr><td><p>Xác thực tài khoản Email<span style="color:#659cef" dir="ltr"><a href="' + link + '" target="_blank">Click vào đây</a></span>để xác thực tài khoản của bạn.</p><p></p><p></p></td></tr><tr height="32px"></tr></tbody></table></td></tr><tr height="16"></tr><tr><td style="max-width:600px;font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:10px;color:#bcbcbc;line-height:1.5"></td></tr><tr><td><table style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:10px;color:#666666;line-height:18px;padding-bottom:10px"></table></td></tr></tbody></table>'
        };
        callback(null, null)
      },
      function (callback) {
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error)
            callback(error, null)
          }
          else {
            info = info.response;
            callback(null, null)
          }
        });
      },
      */
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
          permissionid: 2,
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
      if (err) res.json({ status: 'error', message: err + '' });
      models.doBatch(queries, function(err) {
        if (err) return res.json({ status: 'error', message: err + '' });
        else {
          res.json({
            status: 'ok',
            message: 'Đăng ký tài khoản thành công! Vui lòng đăng nhập!',
          });
        }
      });
    }
  );
}
function registerfb(req, res) {
  var params = req.body;
  let user_id = Uuid.random();
  var queries = [];
  var user = [];
  let token = undefined;
  var PARAM_IS_VALID = {};
  var msgCheckcaptcha = '';
  async.series(
    [
      function(callback) {
        if (params.with3rd) {
          PARAM_IS_VALID.user_id = user_id;
          PARAM_IS_VALID['preview_thumbnail'] = params.with3rd.dataObject.picture
            ? params.with3rd.dataObject.picture
            : null;
          PARAM_IS_VALID['accessToken'] = params.with3rd.dataObject.accessToken
            ? params.with3rd.dataObject.accessToken
            : null;
          PARAM_IS_VALID['3rd_by'] = params.with3rd.dataObject.bypage
            ? params.with3rd.dataObject.bypage
            : null;
          PARAM_IS_VALID['3rd_id'] = params.with3rd.id ? params.with3rd.id : null;
          PARAM_IS_VALID['email'] = params.with3rd.email ? params.with3rd.email : null;
          PARAM_IS_VALID.fullname = params.with3rd.dataObject.fullname
            ? params.with3rd.dataObject.fullname
            : null;
        }
        callback(null, null);
      },
      function(callback) {
        models.instance.account_login.find({ id: PARAM_IS_VALID['3rd_id'] }, function(err, _user) {
          if (_user != undefined && _user.length > 0) {
            user = _user;
          }
          callback(err, null);
        });
      },
      function(callback) {
        var user_by_3rd_object = {};
        if (params.with3rd) {
          user_by_3rd_object = {
            id: PARAM_IS_VALID['3rd_id'],
            email: PARAM_IS_VALID.email,
            user_id: PARAM_IS_VALID.user_id,
            name: PARAM_IS_VALID.fullname,
            picture: PARAM_IS_VALID.preview_thumbnail,
            bypage: PARAM_IS_VALID['3rd_by'],
          };
          if (user.length == 0) {
            const user_by_3rd = () => {
              let object = user_by_3rd_object;
              let instance = new models.instance.user_by_3rd(object);
              let save = instance.save({ if_exist: true, return_query: true });
              return save;
            };
            queries.push(user_by_3rd());
          }
        }
        callback(null, null);
      },
    ],
    function(err, result) {
      try {
        token = jwt.sign(
          { username: PARAM_IS_VALID.email, name: PARAM_IS_VALID.fullname },
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
        if (err) return res.json({ status: 'error' });
        else
          return res.json({
            status: 'ok',
            currentAuthority: currentAuthority,
            by: PARAM_IS_VALID['3rd_by'],
          });
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
  var userInfo = [];
  async.series(
    [
      function(callback) {
        PARAM_IS_VALID['username'] = params.username;
        PARAM_IS_VALID['password'] = params.password;
        callback(null, null);
      },
      function(callback) {
        models.instance.account.find(
          { username: PARAM_IS_VALID['username'] },
          { allow_filtering: true },
          function(err, _user) {
            if (_user != undefined && _user.length > 0) {
              userInfo = _user;
            }
            callback(err, null);
          }
        );
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
            result ? (isLogin = result) : (msg = MESSAGE.USER_NOT_MATCH);
            callback(err, null);
          });
        } else callback(null, null);
      },
      function(callback) {
        if (isLogin) {
          try {
            token = jwt.sign(
              {
                userid: user[0].user_id,
                username: user[0].username,
                name: userInfo[0].name,
                phone: userInfo[0].phone,
                address: userInfo[0].address,
                permissionid: userInfo[0].permissionid,
              },
              jwtprivate,
              {
                expiresIn: '30d', // expires in 30 day
                algorithm: 'RS256',
              }
            );
          } catch (e) {
            console.log(e);
          }
        }
        callback(null, null);
      },
      /*
        function(callback) {
        if (!params.captcha) {
          return res.json({ responseCode: 1, responseDesc: 'Please select captcha' });
        }
        verificationUrl =
          'https://www.google.com/recaptcha/api/siteverify?secret=6Ld1534UAAAAAFF8A3KCBEAfcfjS6COX9obBJrWV&response=' +
          params.captcha +
          '&remoteip=' +
          req.connection.remoteAddress;
        callback(null, null);
      },
      */
    ],
    function(err, result) {
      let currentAuthority = { auth: isLogin, token: token };
      if (err) {
        res.json({ status: 'error', message: msg });
      } else {
        msg != ''
          ? res.json({ status: 'error', message: msg })
          : res.json({
              status: 'ok',
              currentAuthority: currentAuthority,
            });
      }
    }
  );
}
function checkEmail(req, res) {
  var params = req.body;
  var PARAM_IS_VALID = {};
  var user = [];
  var msg = '';
  async.series(
    [
      function(callback) {
        PARAM_IS_VALID.email = params.email;
        callback(null, null);
      },
      function(callback) {
        models.instance.account_login.find({ username: PARAM_IS_VALID.email }, function(
          err,
          _user
        ) {
          user = _user;
          callback(err, null);
        });
      },
      function(callback) {
        if (user.length > 0) {
          msg = MESSAGE.USER_EXISTS;
        }
        callback(null, null);
      },
    ],
    function(err, result) {
      if (err) {
        return res.json({ status: 'error' });
      } else {
        user.length > 0
          ? res.json({ status: 'error', message: msg })
          : res.json({ status: 'ok', message: '' });
      }
    }
  );
}
function changePass(req, res) {
  var params = req.body;
  var PARAM_IS_VALID = {};
  var msg = '';
  var hashPassword = '';
  var _salt = '';
  var _hash = '';
  var saltRounds = 10;
  var queries = [];
  var token = req.headers['x-access-token'];
  var verifyOptions = {
    expiresIn: '30d',
    algorithm: ['RS256'],
  };
  var legit = {};
  try {
    legit = jwt.verify(token, jwtpublic, verifyOptions);
  } catch (e) {
    return res.send({
      status: 'error',
      message: 'Có lỗi xảy ra! vui lòng đăng nhập lại trước khi đổi mật khẩu',
    });
  }
  async.series(
    [
      function(callback) {
        PARAM_IS_VALID.username = legit.username;
        PARAM_IS_VALID.password = params.password;
        PARAM_IS_VALID.newpassword = params.newpassword;
        callback(null, null);
      },
      function(callback) {
        models.instance.account_login.find({ username: PARAM_IS_VALID['username'] }, function(
          err,
          _user
        ) {
          if (_user != undefined && _user.length > 0) {
            _user[0].enabled ? (hashPassword = _user[0].password) : (msg = MESSAGE.USER_HAD_BANNED);
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
            if (result == false) {
              return res.json({ status: 'error', message: 'Mật khẩu cũ không chính xác' });
            }
            callback(err, null);
          });
        } else callback(null, null);
      },
      function(callback) {
        bcrypt.genSalt(saltRounds, function(err, salt) {
          _salt = salt;
          callback(err, null);
        });
      },
      function(callback) {
        bcrypt.hash(params.newpassword, _salt, function(err, hash) {
          _hash = hash;
          callback(err, null);
        });
      },
      function(callback) {
        let update_password_object = {
          password: _hash,
          password_salt: _salt,
        };
        var update_password = () => {
          let object = update_password_object;
          let update = models.instance.account_login.update(
            { username: PARAM_IS_VALID.username },
            object,
            { if_exist: true, return_query: true }
          );
          return update;
        };
        queries.push(update_password());
        callback(null, null);
      },
    ],
    function(err, result) {
      if (err) return res.json({ status: 'error' });
      models.doBatch(queries, function(err) {
        if (err) return res.json({ status: 'error' });
        else {
          return res.json({
            status: 'ok',
            message: 'Thay đổi mật khẩu thành công',
          });
        }
      });
    }
  );
}
function getInfoUser(req, res) {
  var token = req.headers['x-access-token'];
  var verifyOptions = {
    expiresIn: '30d',
    algorithm: ['RS256'],
  };
  var legit = {};
  try {
    legit = jwt.verify(token, jwtpublic, verifyOptions);
  } catch (e) {
    return res.send({ status: 'error' });
  }
  return res.json({
    status: 'ok',
    info: {
      username: legit.username,
      name: legit.name,
      phone: legit.phone,
      address: legit.address,
    },
  });
}
function forgotPassword(req, res) {
  var params = req.body;
  var PARAM_IS_VALID = {};
  var mailOptions = {};
  var transporter = {};
  var otpRandom = Math.floor(100000 + Math.random() * 900000);
  var queries = [];
  var info = '';
  async.series(
    [
      function(callback) {
        PARAM_IS_VALID.username = params.username;
        PARAM_IS_VALID['createat'] = new Date().getTime() + 300 * 1000;
        callback(null, null);
      },
      function(callback) {
        models.instance.account_login.find({ username: PARAM_IS_VALID['username'] }, function(
          err,
          _user
        ) {
          if (_user == undefined || _user.length == 0) {
            return res.json({ status: 'error', message: 'Tài khoản không đúng' });
          }
          callback(err, null);
        });
      },
      function(callback) {
        let otp_object = {
          username: PARAM_IS_VALID.username,
          otp: otpRandom,
          time: PARAM_IS_VALID['createat'],
        };
        const otp = () => {
          let object = otp_object;
          let instance = new models.instance.user_by_otp(object);
          let save = instance.save({ if_exist: true, return_query: true });
          return save;
        };
        queries.push(otp());
        callback(null, null);
      },
      function(callback) {
        transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'trjvjp1997@gmail.com',
            pass: 'concho1234',
          },
        });
        callback(null, null);
      },
      function(callback) {
        mailOptions = {
          from: 'trjvjp1997@gmail.com',
          to: PARAM_IS_VALID.username,
          subject: 'Confirm OTP',
          text: otpRandom + '',
        };
        callback(null, null);
      },
      function(callback) {
        transporter.sendMail(mailOptions, function(error, info) {
          if (error) {
            console.log(error);
            callback(error, null);
          } else {
            info = info.response;
            callback(null, null);
          }
        });
      },
    ],
    function(err, result) {
      if (err) return res.json({ status: 'error' });
      models.doBatch(queries, function(err) {
        if (err) return res.json({ status: 'error' });
        else {
          return res.json({ status: 'ok', info: info });
        }
      });
    }
  );
}
function confirmOtp(req, res) {
  var params = req.body;
  var PARAM_IS_VALID = {};
  var checkOtp = false;
  var _salt = '';
  var _hash = '';
  var queries = [];
  var saltRounds = 10;
  async.series(
    [
      function(callback) {
        PARAM_IS_VALID.username = params.username;
        PARAM_IS_VALID.otp = params.otp;
        PARAM_IS_VALID.newpassword = params.newpassword;
        PARAM_IS_VALID.createat = new Date().getTime();
        callback(null, null);
      },
      function(callback) {
        models.instance.user_by_otp.find(
          { username: PARAM_IS_VALID['username'] },
          { allow_filtering: true },
          function(err, _user) {
            if (_user != undefined && _user.length > 0) {
              let timeOtp = Date.parse(_user[0].time);
              let timenow = PARAM_IS_VALID.createat;
              let valueOtpByUser = _user[0].otp;
              let valueOtp = Number(PARAM_IS_VALID.otp);
              if (timeOtp - timenow > 0 && valueOtpByUser == valueOtp) checkOtp = true;
            } else {
              return res.json({
                status: 'error',
                message: 'Vui lòng nhập lại email để thực hiện chức năng này!',
              });
            }
            callback(err, null);
          }
        );
      },
      function(callback) {
        bcrypt.genSalt(saltRounds, function(err, salt) {
          _salt = salt;
          callback(err, null);
        });
      },
      function(callback) {
        bcrypt.hash(params.newpassword, _salt, function(err, hash) {
          _hash = hash;
          callback(err, null);
        });
      },
      function(callback) {
        if (checkOtp == true) {
          let update_password_object = {
            password: _hash,
            password_salt: _salt,
          };
          var update_password = () => {
            let object = update_password_object;
            let update = models.instance.account_login.update(
              { username: PARAM_IS_VALID.username },
              object,
              { if_exist: true, return_query: true }
            );
            return update;
          };
          queries.push(update_password());
        }
        callback(null, null);
      },
    ],
    function(err, result) {
      if (err) return res.json({ status: 'error', err: err });
      models.doBatch(queries, function(err) {
        if (err) return res.json({ status: 'error', batch: err });
        else {
          checkOtp == true
            ? res.json({ status: 'ok', message: 'Đổi mật khẩu thành công' })
            : res.json({ status: 'error', message: 'Mã OTP không đúng hoặc hết hạn' });
        }
      });
    }
  );
}
function changeInfo(req, res) {
  var params = req.body;
  var PARAM_IS_VALID = {};
  var queries = [];
  var uuid = undefined;
  var token = req.headers['x-access-token'];
  var verifyOptions = {
    expiresIn: '30d',
    algorithm: ['RS256'],
  };
  var legit = {};
  try {
    legit = jwt.verify(token, jwtpublic, verifyOptions);
  } catch (e) {
    return res.send({ status: 'error' });
  }
  async.series(
    [
      function(callback) {
        PARAM_IS_VALID.userid = legit.userid;
        PARAM_IS_VALID.username = legit.username;
        PARAM_IS_VALID.address = params.address;
        PARAM_IS_VALID.fullname = params.fullname;
        PARAM_IS_VALID.phone = params.phone;
        callback(null, null);
      },
      function(callback) {
        let update_info_object = {
          address: PARAM_IS_VALID.address,
          phone: PARAM_IS_VALID.phone,
          name: PARAM_IS_VALID.fullname,
          updateat: new Date().getTime(),
        };

        var update_info = () => {
          let object = update_info_object;

          uuid = models.uuidFromString(PARAM_IS_VALID.userid);
          let update = models.instance.account.update({ user_id: uuid }, object, {
            if_exist: true,
            return_query: true,
            allow_filtering: true,
          });
          return update;
        };
        queries.push(update_info());
        callback(null, null);
      },
    ],
    function(err, result) {
      if (err) return res.json({ status: 'error' });
      try {
        token = jwt.sign(
          {
            userid: uuid,
            username: PARAM_IS_VALID.username,
            name: PARAM_IS_VALID.fullname,
            phone: PARAM_IS_VALID.phone,
            address: PARAM_IS_VALID.address,
          },
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
        if (err) {
          console.log(err);
          return res.json({ status: 'error' });
        } else {
          return res.json({
            status: 'ok',
            currentAuthority: currentAuthority,
          });
        }
      });
    }
  );
}
function getOTP(req, res) {
  var params = req.body;
  var PARAM_IS_VALID = {};
  var mailOptions = {};
  var transporter = {};
  var otpRandom = Math.floor(100000 + Math.random() * 900000);
  var queries = [];
  async.series(
    [
      function(callback) {
        PARAM_IS_VALID.username = params.username;
        PARAM_IS_VALID['createat'] = new Date().getTime() + 300000;
        callback(null, null);
      },
      function(callback) {
        let otp_object = {
          username: PARAM_IS_VALID.username,
          otp: otpRandom,
          time: PARAM_IS_VALID['createat'],
        };
        const otp = () => {
          let object = otp_object;
          let instance = new models.instance.user_by_otp(object);
          let save = instance.save({ if_exist: true, return_query: true });
          return save;
        };
        queries.push(otp());
        callback(null, null);
      },
      function(callback) {
        transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'trjvjp1997@gmail.com',
            pass: 'concho1234',
          },
        });
        callback(null, null);
      },
      function(callback) {
        mailOptions = {
          from: 'trjvjp1997@gmail.com',
          to: PARAM_IS_VALID.username,
          subject: 'OTP Register',
          text: otpRandom + '',
        };
        callback(null, null);
      },
      function(callback) {
        transporter.sendMail(mailOptions, function(error, info) {
          if (error) {
            console.log(error);
            callback(error, null);
          } else {
            info = info.response;
            callback(null, null);
          }
        });
      },
    ],
    function(err, result) {
      if (err) return res.json({ status: 'error' });
      models.doBatch(queries, function(err) {
        if (err) return res.json({ status: 'error' });
        else {
          return res.json({ status: 'ok' });
        }
      });
    }
  );
}
function getHelpBuy(req, res) {
  var params = req.body;
  var PARAM_IS_VALID = {};
  var token = req.headers['x-access-token'];
  var verifyOptions = {
    expiresIn: '30d',
    algorithm: ['RS256'],
  };
  var product = [];

  var legit = {};
  try {
    legit = jwt.verify(token, jwtpublic, verifyOptions);
  } catch (e) {
    return res.send({ status: 'error' });
  }
  async.series(
    [
      function(callback) {
        PARAM_IS_VALID.username = legit.username;
        callback(null, null);
      },
      function(callback) {
        models.instance.help_buy_by_user.find(
          { username: PARAM_IS_VALID['username'] },
          { allow_filtering: true },
          function(err, result) {
            if (result != undefined && result.length > 0) {
              product = result;
            }
            if (err) console.log(err);
            callback(err, null);
          }
        );
      },
    ],
    function(err, result) {
      if (err) return res.json({ status: 'error', message1: err });
      return res.json({ status: 'ok', data: product });
    }
  );
}
function addHelpBuy(req, res) {
  var params = req.body;
  var PARAM_IS_VALID = {};
  var queries = [];
  var token = req.headers['x-access-token'];
  var verifyOptions = {
    expiresIn: '30d',
    algorithm: ['RS256'],
  };

  var legit = {};
  try {
    legit = jwt.verify(token, jwtpublic, verifyOptions);
  } catch (e) {
    return res.send({ status: 'error' });
  }
  async.series(
    [
      function(callback) {
        PARAM_IS_VALID.username = legit.username;
        PARAM_IS_VALID.fullname = legit.name;
        PARAM_IS_VALID.phone = legit.phone;
        PARAM_IS_VALID.nameproduct = params.name;
        PARAM_IS_VALID.link = params.link;
        PARAM_IS_VALID.note = params.note;
        PARAM_IS_VALID.color = params.color;
        PARAM_IS_VALID.size = params.size;
        PARAM_IS_VALID.total = Number(params.count);
        PARAM_IS_VALID.createat = new Date().getTime();
        PARAM_IS_VALID.status = false;
        callback(null, null);
      },
      function(callback) {
        models.instance.help_buy_by_user.find({ link: PARAM_IS_VALID['link'] }, function(
          err,
          result
        ) {
          if (result != undefined && result.length > 0) {
            return res.json({ status: 'error', message: 'Sản phẩm đã được đăng ký' });
          }
          if (err) console.log(err);
          callback(err, null);
        });
      },
      function(callback) {
        let help_buy_by_user_object = {
          link: PARAM_IS_VALID['link'],
          nameproduct: PARAM_IS_VALID['nameproduct'],
          username: PARAM_IS_VALID['username'],
          createat: PARAM_IS_VALID['createat'],
          fullname: PARAM_IS_VALID['fullname'],
          phone: PARAM_IS_VALID['phone'],
          note: PARAM_IS_VALID['note'],
          total: PARAM_IS_VALID['total'],
          size: PARAM_IS_VALID['size'],
          color: PARAM_IS_VALID['color'],
          status: PARAM_IS_VALID['status'],
        };
        const help_buy_by_user = () => {
          let object = help_buy_by_user_object;
          let instance = new models.instance.help_buy_by_user(object);
          let save = instance.save({ if_exist: true, return_query: true });
          return save;
        };
        queries.push(help_buy_by_user());

        callback(null, null);
      },
    ],
    function(err, result) {
      if (err) return res.json({ status: 'error', message1: err });
      models.doBatch(queries, function(err) {
        if (err) return res.json({ status: 'error', message2: err });
        else return res.json({ status: 'ok' });
      });
    }
  );
}
function setHelpBuy(req, res) {
  var params = req.body;
  var PARAM_IS_VALID = {};
  var queries = [];

  async.series(
    [
      function(callback) {
        PARAM_IS_VALID.nameproduct = params.nameproduct;
        PARAM_IS_VALID.link = params.link;
        PARAM_IS_VALID.size = params.size;
        PARAM_IS_VALID.color = params.color;
        PARAM_IS_VALID.total = Number(params.total);
        callback(null, null);
      },
      function(callback) {
        let help_buy_by_user_object = {
          nameproduct: PARAM_IS_VALID['nameproduct'],
          total: PARAM_IS_VALID['total'],
          color: PARAM_IS_VALID['color'],
          size: PARAM_IS_VALID['size'],
        };
        const help_buy_by_user = () => {
          let object = help_buy_by_user_object;
          let update = models.instance.help_buy_by_user.update(
            { link: PARAM_IS_VALID['link'] },
            object,
            { if_exist: true, return_query: true, allow_filtering: true }
          );
          return update;
        };
        queries.push(help_buy_by_user());

        callback(null, null);
      },
    ],
    function(err, result) {
      if (err) return res.json({ status: 'error', message1: err });
      models.doBatch(queries, function(err) {
        if (err) return res.json({ status: 'error', message2: err });
        else return res.json({ status: 'ok' });
      });
    }
  );
}
function deleteHelpBuy(req, res) {
  var params = req.body;
  var PARAM_IS_VALID = {};
  var queries = [];

  async.series(
    [
      function(callback) {
        PARAM_IS_VALID.link = params.link;
        callback(null, null);
      },
      function(callback) {
        const help_buy_by_user = () => {
          let remove = models.instance.help_buy_by_user.delete({ link: PARAM_IS_VALID['link'] });
          return remove;
        };
        queries.push(help_buy_by_user());

        callback(null, null);
      },
    ],
    function(err, result) {
      if (err) return res.json({ status: 'error', message1: err });
      models.doBatch(queries, function(err) {
        if (err) return res.json({ status: 'error', message2: err });
        else return res.json({ status: 'ok' });
      });
    }
  );
}
function verifyEmail(req, res) {
  var params = req.body;
  let user_id = Uuid.random();
  let saltRounds = 10;
  var queries = [];
  let token = undefined;
  var _salt = '';
  var _hash = '';
  var PARAM_IS_VALID = {};
  var legit = {};
  async.series(
    [
      function(callback) {
        PARAM_IS_VALID['tokenverify'] = params.otp;
        callback(null, null);
      },
      function(callback) {
        var verifyOptions = {
          expiresIn: '30d',
          algorithm: ['RS256'],
        };
        try {
          legit = jwt.verify(PARAM_IS_VALID['tokenverify'], jwtpublic, verifyOptions);
        } catch (e) {
          return res.send({ status: 'error', message: 'Sai token' });
        }
        callback(null, null);
      },
      function(callback) {
        PARAM_IS_VALID['phone'] = legit.phone;
        PARAM_IS_VALID['email'] = legit.email;
        PARAM_IS_VALID['fullname'] = legit.fullname;
        PARAM_IS_VALID['username'] = legit.email;
        PARAM_IS_VALID['address'] = legit.address;
        PARAM_IS_VALID['password'] = legit.password;
        PARAM_IS_VALID['user_id'] = user_id;
        PARAM_IS_VALID['enabled'] = true;
        PARAM_IS_VALID['createat'] = new Date().getTime();
        callback(null, null);
      },
      function(callback) {
        models.instance.account_login.find({ username: PARAM_IS_VALID['username'] }, function(
          err,
          _user
        ) {
          if (_user != undefined && _user.length > 0) {
            return res.json({ status: 'error', message: 'Tài khoản đã tồn tại!' });
          }
          callback(err, null);
        });
      },

      function(callback) {
        models.instance.user_by_tokenverify.find(
          { username: PARAM_IS_VALID['username'] },
          { allow_filtering: true },
          function(err, _user) {
            if (_user != undefined && _user.length > 0) {
              let timeOtp = Date.parse(_user[0].time);
              let timenow = PARAM_IS_VALID.createat;
              let valueOtpByUser = _user[0].tokenverify;
              let valueOtp = Number(legit.tokenVerify);
              if (timeOtp - timenow <= 0 || valueOtpByUser != valueOtp) {
                return res.json({
                  status: 'error',
                  message: 'Mã xác thực không hợp lệ!',
                });
              }
            } else {
              return res.json({ status: 'error', message: 'Tài khoản xác thực không hợp lệ!' });
            }
            callback(err, null);
          }
        );
      },
      function(callback) {
        bcrypt.genSalt(saltRounds, function(err, salt) {
          _salt = salt;
          callback(err, null);
        });
      },
      function(callback) {
        bcrypt.hash(legit.password, _salt, function(err, hash) {
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
      function(callback) {
        models.instance.user_by_tokenverify.delete({ username: PARAM_IS_VALID.username }, function(
          err
        ) {
          callback(err, null);
        });
      },
    ],
    function(err, result) {
      if (err) {
        console.log(err);
        res.json({ status: 'error' });
      }
      try {
        token = jwt.sign(
          {
            userid: PARAM_IS_VALID.user_id,
            username: PARAM_IS_VALID.email,
            name: PARAM_IS_VALID.fullname,
            phone: PARAM_IS_VALID.phone,
            address: PARAM_IS_VALID.address,
          },
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
        if (err) {
          console.log(err);
          return res.json({ status: 'error' });
        } else {
          return res.json({ status: 'ok', currentAuthority: currentAuthority });
        }
      });
    }
  );
}
function getDealSock(req, res) {
  let results = {};

  async.series(
    [
      function(callback) {
        models.instance.articles.find({}, function(err, res) {
          if (res) {
            results = res;
          }
          callback(err, null);
        });
      },
    ],
    function(err, result) {
      if (err) return res.send({ status: 'error' });
      res.send({ status: 'ok', data: results });
    }
  );
}
function getDealDetail(req, res) {
  var params = req.body;
  var PARAM_IS_VALID = {};
  var results = {};
  var uuid = undefined;
  async.series(
    [
      function(callback) {
        PARAM_IS_VALID.artid = params.artid;
        callback(null, null);
      },
      function(callback) {
        uuid = models.uuidFromString(PARAM_IS_VALID.artid);
        models.instance.articles.find({ artid: uuid }, function(err, art) {
          if (art && art.length > 0) results = art[0];
          else return res.json({ status: 'erorr', message: 'không có bài viết này!' });
          callback(err, null);
        });
      },
    ],
    function(err, result) {
      if (err) return res.json({ status: 'error', message: err.toString() });
      return res.json({ status: 'ok', data: results });
    }
  );
}
function checkPermission(req, res) {
  var token = req.headers['x-access-token'];
  var verifyOptions = {
    expiresIn: '30d',
    algorithm: ['RS256'],
  };
  var legit = {};
  try {
    legit = jwt.verify(token, jwtpublic, verifyOptions);
  } catch (e) {
    return res.send({ status: 'error' });
  }
  if (legit.permissionid === 1) {
    return res.json({ status: 'ok' });
  }
  return res.json({ status: 'error' });
}
function changePermission(req, res) {
  var params = req.body;
  var PARAM_IS_VALID = {};
  var queries = [];
  var userInfo = [];
  async.series(
    [
      function(callback) {
        PARAM_IS_VALID['username'] = params.username;
        callback(null, null);
      },
      function(callback) {
        models.instance.account.find(
          { username: PARAM_IS_VALID['username'] },
          { allow_filtering: true },
          function(err, _user) {
            if (_user != undefined && _user.length > 0) {
              userInfo = _user;
            } else return res.json({ status: 'error', message: 'Tài khoản không tồn tại' });
            callback(err, null);
          }
        );
      },
      function(callback) {
        let update_permission_object = {
          permissionid: 1,
        };
        var update_permission = () => {
          let object = update_permission_object;
          let update = models.instance.account.update({ user_id: userInfo[0].user_id }, object, {
            if_exist: true,
            return_query: true,
            allow_filtering: true,
          });
          return update;
        };
        queries.push(update_permission());
        callback(null, null);
      },
    ],
    function(err, result) {
      if (err) return res.json({ status: 'error', message: 'Xảy ra lỗi khi cập nhật' });
      models.doBatch(queries, function(err) {
        if (err) {
          console.log(err);
          return res.json({ status: 'error' });
        } else {
          return res.json({
            status: 'ok',
            message: 'Cấp quyền thành công',
          });
        }
      });
    }
  );
}
function payCompelete(req, res) {
  var params = req.body;
  var PARAM_IS_VALID = {};
  var queries = [];
  let orderid = Uuid.random();
  async.series(
    [
      function(callback) {
        PARAM_IS_VALID.orderid = orderid;
        PARAM_IS_VALID.list_product = params.list_product;
        PARAM_IS_VALID.phone = params.phone;
        PARAM_IS_VALID.order_by = params.order_by;
        PARAM_IS_VALID.address = params.address;
        PARAM_IS_VALID.total_price = params.total_price;
        PARAM_IS_VALID.createat = new Date().getTime();
        PARAM_IS_VALID.status = false;
        callback(null, null);
      },
      function(callback) {
        try {
          let product_order_object = {
            orderid: orderid,
            createat: PARAM_IS_VALID.createat,
            list_product: PARAM_IS_VALID.list_product,
            order_by: PARAM_IS_VALID.order_by,
            phone: PARAM_IS_VALID.phone,
            status: false,
            address: PARAM_IS_VALID.address,
            total_price: PARAM_IS_VALID.total_price,
          };
          const product_order = () => {
            let object = product_order_object;
            let instance = new models.instance.product_order(object);
            let save = instance.save({ if_exist: true, return_query: true });
            return save;
          };
          queries.push(product_order());
          callback(null, null);
        } catch (error) {
          console.log(error);
        }
      },
    ],
    function(err, result) {
      if (err) return res.json({ status: 'error', message1: err });
      models.doBatch(queries, function(err) {
        if (err) {
          console.log(err);
          return res.json({ status: 'error', message2: err });
        } else return res.json({ status: 'ok',timeline:new Date().getTime() });
      });
    }
  );
}
export default {
  'POST /api/authentication/register': register,
  'POST /api/authentication/registerfb': registerfb,
  'POST /api/authentication/login': login,
  'POST /api/authentication/checkemail': checkEmail,
  'POST /api/authentication/changepassword': changePass,
  'POST /api/authentication/getinfo': getInfoUser,
  'POST /api/authentication/forgotpassword': forgotPassword,
  'POST /api/authentication/confirmotp': confirmOtp,
  'POST /api/authentication/changeInfo': changeInfo,
  'POST /api/authentication/getotp': getOTP,
  'POST /api/authentication/gethelpbuy': getHelpBuy,
  'POST /api/authentication/addhelpbuy': addHelpBuy,
  'POST /api/authentication/sethelpbuy': setHelpBuy,
  'POST /api/authentication/deletehelpbuy': deleteHelpBuy,
  'POST /api/authentication/verifyemail': verifyEmail,
  'POST /api/authentication/dealsock': getDealSock,
  'POST /api/authentication/dealsockdetail': getDealDetail,
  'POST /api/authentication/checkpermission': checkPermission,
  'POST /api/authentication/changepermission': changePermission,
  'POST /api/authentication/paycompelete': payCompelete,
};
