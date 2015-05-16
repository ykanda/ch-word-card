'use strict'

global.jQuery = require('jquery')
require('bootstrap-webpack')


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

page("/config", function(context) {
  window.scrollTo(0, 0)
  app.view = 'page_config'
})

page("/credit", function(context) {
  window.scrollTo(0, 0)
  app.view = 'page_credit'
})

// ROUTING!!
page()


