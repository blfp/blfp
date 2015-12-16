'use strict'

const db = require('../../db')
const router = module.exports = require('ozymandias').Router()
const upload = require('multer')({dest: 'tmp/uploads'})

router.find('photo', () => db.Photo)

router.get('/', (req, res) => {
  db.Photo.not({image_updated_at: null}).all().then((photos) => {
    res.render('admin/photos/index', {photos: photos})
  }).catch(res.error)
})

router.post('/', upload.single('image'), (req, res) => {
  db.Photo.create({}).then((photo) => {
    return photo.uploadImage(req.file).then(() => {
      res.flash('Image Uploaded.')
      res.redirect(req.body.return_to)
    })
  }).catch(res.error)
})
