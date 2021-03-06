'use strict'

// Vendor
let db = require('./db')
let ozymandias = require('ozymandias')

// The App!
let app = module.exports = ozymandias()
app.locals = require('./helpers')

// Routes
app.use('/admin', require('./routes/admin'))
app.use('/auth', require('./routes/auth'))
app.use('/posts', require('./routes/posts'))
app.use('/photos', require('./routes/photos'))

// Home
app.get('/', function (req, res) {
  db.Post
  .not({published_on: null})
  .order(['published_on', 'descending'])
  .limit(3).all()
  .then(function (posts) {
    res.render('index', {posts: posts})
  }).catch(res.error)
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
