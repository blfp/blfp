'use strict'

class User extends require('ozymandias/user') {

  static get tableName () {
    return 'users'
  }

  static get columns () {
    return super.columns.concat([
      'is_admin',
      'first',
      'last'
    ])
  }

  get is_admin () {
    return this.data.get('is_admin') || false
  }

  set is_admin (value) {
    this.data.set('is_admin', value || false)
  }

  get first () {
    return this.data.get('first') || ''
  }

  set first (value) {
    this.data.set('first', value || '')
  }

  get last () {
    return this.data.get('last') || ''
  }

  set last (value) {
    this.data.set('last', value || '')
  }

  get name () {
    return `${this.first} ${this.last}`.trim()
  }

}

module.exports = User
