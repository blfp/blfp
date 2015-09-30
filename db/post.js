'use strict'

let marked = require('marked')
let Model = require('./model')

class Post extends Model {

  static get tableName () {
    return 'posts'
  }

  static get columns () {
    return [
      'body',
      'id',
      'title',
      'user_id',
      'published_on',
      {name: 'created_at', property: 'createdAt'},
      {name: 'updated_at', property: 'updatedAt'}
    ]
  }

  get title () {
    return this.data.get('title') || ''
  }

  set title (value) {
    this.data.set('title', value || '')
  }

  get body () {
    return this.data.get('body') || ''
  }

  set body (value) {
    this.data.set('body', value || '')
  }

  get excerpt () {
    return marked(this.body)
      .replace(/<[^>]+>/ig, '')
      .trim()
      .split(/\s+/ig)
      .slice(0, 40)
      .join(' ')
  }

}

module.exports = Post

