const express = require('express');

const router = express.Router();

const { Login, Signup, Logout } = require('../controllers/authcontrollers')


router.route('/login').post(Login);
router.route('/signup').post(Signup)
router.route('/logout').post(Logout)

module.exports = router