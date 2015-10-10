'use strict'

// Vendor
let db = require('./db')
let ozymandias = require('ozymandias')
let body = require('body-parser')
let multer = require('multer')
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
app.use(body.urlencoded({extended: false}))
app.use(multer({dest: './tmp/uploads/', putSingleFilesInArray: true}))
app.use(require('./mid/user'))
app.use(require('./mid/flash'))

// Routes
app.use('/admin', require('./routes/admin'))
app.use('/auth', require('./routes/auth'))
app.use('/posts', require('./routes/posts'))

// Home
app.get('/', function (req, res) {
  db.Post.order(['published_on','descending']).limit(3).all()
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
