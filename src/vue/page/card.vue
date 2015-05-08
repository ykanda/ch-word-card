<style>
  span.cwc-word {
    font-size: xx-large;
  }
  a.cwc-button {
    font-size: xx-large;
  }
</style>


<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid text-center">
      <a href="/" class="btn navbar-btn btn-primary" href="#" role="button"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></a>
    </div>
  </nav>
  <div class="container">
    <div class="progress" v-cloak>
      <div class="progress-bar" role="progressbar" aria-valuenow="{{ currentCardNumber }}" aria-valuemin="0" aria-valuemax="{{ numOfCards }}" style="width: {{ progress }}%;">
        <span class="sr-only">{{ currentCardNumber }} of {{ numOfCards }}</span>
      </div>
    </div>

    <!-- 日本語 -->
    <div class="text-center">
      <span class="cwc-word">{{ currentCard.jp }}</span>
    </div>
    <div class="text-center">
      <a href="" class="btn btn-default" v-on="click : openCh()" v-show="openChineseWord == false">
        <span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
      </a>
    </div>

    <!-- 繁体中国語, 注音 -->
    <div class="text-center" v-show="openChineseWord == true">
      <span class="cwc-word">{{ currentCard.ch_t   }}</span><br />
      <span class="cwc-word">{{ currentCard.zhuyin }}</span><br />
      <span v-show="isNotEndOfCards">
        <a href="#" class="btn btn-default" v-on="click : nextCard()">
          <span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
        </a>
      </span>
      <span v-show="isEndOfCards">
        <a href="#" class="btn btn-default" v-on="click: reset()"><span class="glyphicon glyphicon-repeat" aria-hidden="true"></a>
      </span>
    </div>

    <!-- 簡体中国語 - 拼音 -->
    <!--
    <div>
      {{currentCard.ch_s}}
      {{currentCard.pinyin}}
    </div>
    <div>
      <a href="" v-on="click">↓</a>
    </div>
    -->
  </div><!-- /.container -->
</template>

<script>
api    = require('../api')
config = require('../config')


module.exports = {
  data : function () {
    return {
      cards : [{
        jp     : '',
        ch_t   : '',
        ch_s   : '',
        zhuyin : '',
        pinyin : ''
      }],
      index : 0,
      openChineseWord  : false, 
    }
  },

  created : function () {
    var option = {}
    var _this = this
    api.getCards(option).then(function(response) {
      _this.cards = response
      console.log(response)
    })
  },

  computed : {
    progress : function () {
      return parseInt((this.index / (this.cards.length - 1)) * 100.0)
    },
    numOfCards : function () {
      return this.cards.length 
    },
    currentCardNumber : function () {
      return (this.index + 1)
    },
    currentCard : function () {
      return this.cards[ this.index ]
    },
    isNotEndOfCards : function () { return (this.index <  (this.cards.length - 1)) },
    isEndOfCards    : function () { return (this.index >= (this.cards.length - 1)) },
  },

  methods : {
    openCh : function () {
      this.openChineseWord = true
    },
    nextCard : function () {
      this.openChineseWord = false
      this.index++
    },
    reset : function () {
      this.openChineseWord = false
      this.index = 0
    }
  }
}
</script>
<!-- vim: set ft=html: -->
