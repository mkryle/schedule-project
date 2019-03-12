// MongoDB Cloud? https://www.youtube.com/watch?v=6FOq4cUdH8k 21:18

// nom install express, bcryptjs, passport, passport/local, express-ejs-layouts, mongoose, connect-flash, express-session

const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const loginApp = express()

// EJS
app.use(expressLayouts)
app.set('view engine', 'ejs')

// routes
app.use('/', require('.routes/index'))
app.use('/users', require('./routes/users'))