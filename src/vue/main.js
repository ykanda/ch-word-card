'use strict'

var Vue  = require('vue')
var page = require('page')
var app  = new Vue(require('./app.vue'))


page("/", function(context) {
  window.scrollTo(0, 0)
  console.log('/')
  app.view = 'page_top'
})


page("/card", function(context) {
  window.scrollTo(0, 0)
  console.log('/card')
  app.view = 'page_card'
})

// ROUTING!!
page()
