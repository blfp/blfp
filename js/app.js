var $ = window.jQuery = require('jquery')
require('bootstrap')

var $message = $('#message')
var messageTimeout = setTimeout(function () {
  $message.removeClass('active')
}, 10000)
