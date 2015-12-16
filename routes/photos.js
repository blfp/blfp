'use strict'

const db = require('../db')
const router = module.exports = require('ozymandias').Router()

router.get('/', function (req, res) {
  const page = res.locals.page = +(req.query.page || 1)
  db.Photo.not({image_updated_at: null}).paginate(page, 4).then((photos) => {
    res.render('photos/index', {photos: photos})
  }).catch(res.error)
})
