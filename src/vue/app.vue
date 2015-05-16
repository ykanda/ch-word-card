<style>
#page {
  padding-top: 100px;
}
</style>

<template>
  <div v-component="menu"></div>
  <div class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-inner">
        <div class="container-fluid text-center">
          <a href="/" class="btn navbar-btn btn-primary" href="#" role="button"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></a>
        </div>
      </div>
    </div>
  </div>
  <div id="page" v-component="{{view}}"></div>
</template>


<script>
module.exports = {
  el : "#app",
  data : {
    view : 'page_top'
  },
  components : {
    menu        : require('./menu.vue'),
    page_top    : require('./page/top.vue'),
    page_card   : require('./page/card.vue'),
    page_config : require('./page/config.vue'),
    page_credit : require('./page/credit.vue')
  }}
</script>
<!-- vim: set ft=html: -->
