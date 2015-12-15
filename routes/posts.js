'use strict'

let db = require('../db')
let ozymandias = require('ozymandias')
let router = module.exports = ozymandias.Router()

router.find('post', () => db.Post.include('user'))

router.get('/', function (req, res) {
  db.Post.order(['published_on', 'descending']).include('user').all()
  .then(function (posts) {
    res.render('posts/index', {posts: posts})
  }).catch(res.error)
})

router.get('/:post_id', function (req, res) {
  res.render('posts/show', {post: req.post})
})
