var $ = window.jQuery = require('jquery')
require('bootstrap')

var $message = $('#message')
setTimeout(function () {
  $message.removeClass('active')
}, 10000)
