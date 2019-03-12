const express = require('express')
const router = express.Router()

// welcome page, render welcome.ejs
router.get('/', (require, respond) => response.render('Welcome'))


module.exports = router