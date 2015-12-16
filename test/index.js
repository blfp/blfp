'use strict'

const test = require('tape')
const db = require('../db')

require('./db')
require('./routes')

test('teardown', (t) => {
  db.close()
  t.end()
})
