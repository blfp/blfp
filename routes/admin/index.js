'use strict'

let ozymandias = require('ozymandias')
let router = module.exports = ozymandias.Router()

router.use(function (req, res, next) {
  if (!req.admin) return res.status(401).render('401')
  next()
})

router.use('/posts', require('./posts'))
