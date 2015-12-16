'use strict'

const Model = require('./model')
const images = require('ozymandias/images')

class Photo extends Model {

  static get tableName () {
    return 'photos'
  }

  static get columns () {
    return [
      'id',
      'image_updated_at',
      'image_ext',
      'created_at',
      'updated_at'
    ]
  }

}

images.hasImage(Photo, {
  name: 'image',
  sizes: {
    small: 100,
    medium: 250,
    large: 1000
  }
})

module.exports = Photo
