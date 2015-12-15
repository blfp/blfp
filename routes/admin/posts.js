'use strict'

let db = require('../../db')
let ozymandias = require('ozymandias')
let router = module.exports = ozymandias.Router()

router.find('post', () => db.Post.include('user'))

router.get('/', function (req, res) {
  db.Post.include('user').order(['published_on', 'descending']).all()
  .then(function (posts) {
    res.render('admin/posts/index', {posts: posts})
  }).catch(res.error)
})

router.get('/new', function (req, res) {
  res.render('admin/posts/new')
})

router.get('/:post_id', function (req, res) {
  res.render('admin/posts/edit', {post: req.post})
})

router.post('/:post_id', function (req, res) {
  req.post.update(req.permit('title', 'body', 'published_on'))
  .then(function () {
    res.redirect(`/admin/posts`)
  }).catch(res.error)
})

router.post('/', function (req, res) {
  let values = req.permit('title', 'body', 'published_on')
  values.user_id = req.user.id
  db.Post.create(values).then(function (post) {
    res.redirect(`/admin/posts/${post.id}`)
  }).catch(res.error)
})
