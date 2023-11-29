const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');
console.log('router is load');
router.get('/',homeController.home);
router.use('/users', require('./users'));
module.exports = router;