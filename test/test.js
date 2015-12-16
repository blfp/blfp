'use strict'

const db = require('../db')
const app = require('../app')
const test = require('ozymandias/test')
const request = require('supertest')

app.post('/signin', (req, res) => {
  db.User.where({email: req.body.email}).find().then((user) => {
    if (!user) return res.status(401).end()
    req.signIn(user)
    res.end()
  }).catch(res.error)
})

// Export a function with the tape API.
exports = module.exports = function (name, body) {
  test(name, function (t) {
    // Request without the app requirement.
    t.request = () => request(app)

    // Convenient agent reference.
    t.agent = request.agent(app)

    // Sign in, with error handling.
    t.signIn = function (email) {
      return new Promise((resolve, reject) => {
        t.agent
        .post('/signin')
        .send(`email=${email}`)
        .expect(200)
        .end((e) => e ? reject(e) : resolve())
      }).catch(t.end)
    }

    body(t)
  })
}
