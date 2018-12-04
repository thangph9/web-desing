/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-var */
var express = require('express');
var router = express.Router();
router.use('/order', require('./order'));
router.use('/user', require('./user'));
router.use('/product', require('./product'));
router.use('/global', require('./global'));
router.use('/category', require('./category'));
router.use('/authentication', require('./authentication'));
module.exports = router;
