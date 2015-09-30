'use strict'

let db = module.exports = require('./db')

db.Post = require('./post')
db.User = require('./user')
db.Token = require('./token')

db.Token.belongsTo('user', {
  key: 'user_id',
  model: db.User
})

db.User.hasMany('tokens', {
  key: 'user_id',
  model: db.Token
})

db.Post.belongsTo('user', {
  key: 'user_id',
  model: db.User
})

db.User.hasMany('posts', {
  key: 'user_id',
  model: db.Post
})
