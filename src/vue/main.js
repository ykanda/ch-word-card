'use strict'


require('bootstrap-webpack')
// global.jQuery = require('jquery')
// require('bootstrap')
// require('bootstrap/dist/css/bootstrap.css')
// require('bootstrap/dist/css/bootstrap-theme.css')


var Vue  = require('vue')
var page = require('page')
var app  = new Vue(require('./app.vue'))


page("/", function(context) {
  window.scrollTo(0, 0)
  app.view = 'page_top'
})


page("/card", function(context) {
  window.scrollTo(0, 0)
  app.view = 'page_card'
})

// ROUTING!!
page()
