'use strict'

const test = require('tape')
const db = require('../db')

require('./db')

test('teardown', (t) => {
  db.close()
  t.end()
})
