<template>
  <div v-component="{{view}}">
  </div>
</template>


<script>
module.exports = {
  el : "#app",
  data : {
    view : 'page_top'
  },
  components : {
    page_top  : require('./page/top.vue'),
    page_card : require('./page/card.vue')
  }}
</script>
<!-- vim: set ft=html: -->
