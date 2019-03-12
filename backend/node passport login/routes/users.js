const express = require('express')
const router = express.Router()

// login page ejs
router.get('/login', (require, respond) => response.render('login'))

// register page ejs
router.get('/register', (require, respond) => response.render('register'))


module.exports = router