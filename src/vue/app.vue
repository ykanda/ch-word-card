<template>
  <div v-component="menu"></div>
  <div v-component="{{view}}"></div>
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
