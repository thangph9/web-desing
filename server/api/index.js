var express     = require('express')
var router = express.Router()
router.use('/order',require('./order'))
router.use('/user',require('./user'))
router.use('/product',require('./product'))
router.use('/global',require('./global'))
router.use('/category',require('./category'))
module.exports = router