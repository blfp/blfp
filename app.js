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
