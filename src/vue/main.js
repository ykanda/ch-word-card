'use strict'


global.jQuery = require('jquery')
require('bootstrap-webpack')
require('bootstrap-drawer/dist/js/drawer.js')
require('bootstrap-drawer/dist/css/bootstrap-drawer.css')


// Drawer
// see : https://github.com/clineamb/bootstrap-drawer/blob/master/example/index.html
global.jQuery('#drawerMenu').drawer({
  toggle : false
})

global.jQuery('#drawerMenu .drawer-contents .drawer-nav a').click(
  function () {
    global.jQuery('#drawerMenu').drawer('toggle');
    // return false;
  }
)

global.jQuery('#other-toggle').click(function () {
  global.jQuery('#drawerMenu').drawer('toggle');
  return false;
})


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


