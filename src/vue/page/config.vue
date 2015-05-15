<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid text-center">
      <a href="/" class="btn navbar-btn btn-primary" href="#" role="button"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></a>
    </div>
  </nav>
  <div class="container">
    <h2>Config</h2>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">表記</h3>
      </div>
      <div class="panel-body">
        <label><input id="orthorogy-t" type="radio" name="orthography" value="traditional" v-model="orthography" v-on="orthorogy = 'traditional'">&nbsp;繁体字</label><br>
        <label><input id="orthorogy-s" type="radio" name="orthography" value="simple"      v-model="orthography" v-on="orthorogy =      'simple'">&nbsp;簡体字</label>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">発音記号</h3>
      </div>
      <div class="panel-body">
        <div class="input-group" role="group" aria-label="phonetic-transcription">
          <label><input id="phonetic-zi" name="phonetic" type="radio" value="zhuyin" v-model="phonetic" v-on="phonetic = 'zhuyin'">&nbsp;注音</label><br>
          <label><input id="phonetic-pi" name="phonetic" type="radio" value="pinyin" v-model="phonetic" v-on="phonetic = 'pinyin'">&nbsp;拼音</label>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
var config = require('../config')

module.exports = {
  data : function () {
    return {
      orthography : "traditional",
      phonetic    : "zhuyin"
    }
  },

  created : function () {
  },

  // ここはサブコンポーネント化して他のところと共通で利用できるようにすべき
  computed : {
    phonetic : {
      get : function ()  { return config.phonetic()  },
      set : function (v) { return config.phonetic(v) },
    },
    orthography : {
      get : function ()  { return config.arthography()  },
      set : function (v) { return config.arthography(v) }
    }
  },

  methods : {}
}
</script>
<!-- vim: set ft=html: -->
