'use strict'

const db = require('../../db')
const test = require('tape')

test('Post#published_on is null for empty values', function (t) {
  let post = new db.Post({published_on: ''})
  t.is(post.published_on, null)
  post.published_on = 0
  t.is(post.published_on, null)
  post.published_on = undefined
  t.is(post.published_on, null)
  t.end()
})
