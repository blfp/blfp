'use strict'

let db = module.exports = require('./db')

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
