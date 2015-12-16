var $ = window.jQuery = require('jquery')
require('bootstrap')

var $message = $('#message')
setTimeout(function () {
  $message.removeClass('active')
}, 10000)

// Handle submit confirmations.
$(document).on('click', '[data-confirm]', function (e) {
  if (!confirm($(e.target).data('confirm'))) e.preventDefault()
})
