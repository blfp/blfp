'use strict'

let db = require('../../db')
let find = require('../../mid/find')
let ozymandias = require('ozymandias')
let router = module.exports = ozymandias.Router()

router.param('post_id', find('post', function () {
  return db.Post
}))

router.get('/', function (req, res) {
  db.Post.all().then(function (posts) {
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
  req.post.update(req.permit('title', 'body')).then(function () {
    res.redirect(`/admin/posts`)
  }).catch(res.error)
})

router.post('/', function (req, res) {
  let values = req.permit('title', 'body')
  values.user_id = req.user.id
  db.Post.create(values).then(function (post) {
    res.redirect(`/admin/posts/${post.id}`)
  }).catch(res.error)
})
