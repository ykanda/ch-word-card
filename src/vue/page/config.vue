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
        <label><input id="orthorogy-t" type="radio" name="orthography" value="traditional">&nbsp;繁体字</label><br>
        <label><input id="orthorogy-s" type="radio" name="orthography" value="simple">&nbsp;簡体字</label>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">発音記号</h3>
      </div>
      <div class="panel-body">
        <div class="input-group" role="group" aria-label="phonetic-transcription">
          <label><input id="phonetic-zi" name="phonetic" type="radio" value="zhuyin">&nbsp;注音</label><br>
          <label><input id="phonetic-pi" name="phonetic" type="radio" value="pinyin">&nbsp;拼音</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data : function () {
    return {
    }
  },

  created : function () {
  },

  computed : {
  },

  methods : {
  }
}
</script>
<!-- vim: set ft=html: -->
