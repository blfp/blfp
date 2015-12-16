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
      'created_at',
      'updated_at'
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

  get published_on () {
    return this.data.get('published_on') || null
  }

  set published_on (value) {
    this.data.set('published_on', value || null)
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

