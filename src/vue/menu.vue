<template>
  <!-- drawer menu -->
  <div id="drawerMenu" class="drawer dw-xs-10 dw-sm-6 dw-md-4 fold" aria-labelledby="drawerMenu">
    <div class="drawer-controls">
      <a href="#drawerMenu"
        data-toggle="drawer"
        aria-foldedopen="false"
        aria-controls="drawerMenu"
        class="btn btn-primary btn-sm"><span class="glyphicon glyphicon-menu-hamburger"></span></a>
    </div>
    <div class="drawer-contents">
      <div class="drawer-heading">
        <h2 class="drawer-title">Menu</h2>
      </div>
      <ul class="drawer-nav">
        <ul class="list-group">
          <li class="list-group-item"><a href="/config" v-on="click : closeMenu"><h4><span class="glyphicon glyphicon-cog"></span>&nbsp;&nbsp;設定</a></h4></li>
          <li class="list-group-item"><a href="/credit" v-on="click : closeMenu"><h4><span class="glyphicon glyphicon-flag"></span>&nbsp;&nbsp;クレジット</a></h4></li>
        <ul>
      </ul>
      <!--
      <div class="drawer-body">
      </div>
      <ul class="drawer-nav">
        <li role="presentation" class="active"><a href="#">Home</a></li>
        <li role="presentation"><a href="#">Profile</a></li>
        <li role="presentation"><a href="#">Messages</a></li>
      </ul>
      <div class="drawer-footer">
        <small>&copy; </small>
      </div>
      -->
    </div>
  </div>
</template>

<script>
'use strict'


var jquery = require('jquery')
require('bootstrap-drawer/dist/js/drawer.js')
require('bootstrap-drawer/dist/css/bootstrap-drawer.css')


module.exports = {
  data : function () {
    return {}
  },
  compiled : function () {},
  created  : function () {
    // Drawer
    // see : https://github.com/clineamb/bootstrap-drawer/blob/master/example/index.html
    jquery('#drawerMenu').drawer({
      toggle : false
    })
  },
  computed : {},
  methods  : {
    closeMenu : function () {
      jquery('#drawerMenu').drawer('hide');
    }
  }
}
</script>
<!-- vim: set ft=html: -->
