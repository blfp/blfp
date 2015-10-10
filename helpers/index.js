'use strict'

exports.moment = require('moment')
exports.marked = require('marked')

// Google Maps API Key
exports.mapsKey = 'AIzaSyAzuFFZQFL8uQCUS2Dx9MJYDq1t0WOD3js'

// Medfusion portal url
exports.portalUrl = 'https://www.medfusion.net/secure/portal/index.cfm?fuseaction=home.login&dest=welcome&gid=4442&muuid=4727'

// Assets

let assetPath = exports.assetPath = function (path) {
  if (process.env.NODE_ENV !== 'production') return `/${path}`
  return require('../assets.json')[path]
}
