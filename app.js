// Vendor
var ozymandias = require('ozymandias')

// The App!
var app = module.exports = ozymandias()
app.locals = require('./helpers')

// Middleware
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
