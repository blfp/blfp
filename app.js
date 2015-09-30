'use strict'

// Vendor
let ozymandias = require('ozymandias')
let session = require('cookie-session')

// The App!
let app = module.exports = ozymandias()
app.locals = require('./helpers')

// Middleware
app.use(session({
  signed: app.get('env') === 'production',
  name: 'blfp',
  secret: process.env.SECRET,
  maxAge: 1000 * 60 * 60 * 24 * 7
}))
app.use(ozymandias.static('public'))

// Routes
app.get('/', function (req, res) {
  res.render('index')
})

// 404
app.get('*', function (req, res) {
  res.status(404).render('404')
})

// 500
app.use(function (e, req, res, next) {
  console.log(e.stack)
  res.status(500).render('500')
})
