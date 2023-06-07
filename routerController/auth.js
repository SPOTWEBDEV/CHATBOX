const express = require('express')
const router = express.Router()
const { displayLoginPage,login, register, logout, displayRegisterPage} = require('../controller/auth')


router.route('/login').post(login)
router.route('/login').get(displayLoginPage)
router.route('/register').get(displayRegisterPage)
router.route('/register').post(register)
router.route('/logout').get(logout)

module.exports = router