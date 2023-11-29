const express = require('express');
const router = express.Router();
const usersController = require('../controller/users_controller');
router.get('/sign-up', usersController.signUp)
router.get('/sign-in', usersController.signIn);
console.log('router is load');

module.exports = router;