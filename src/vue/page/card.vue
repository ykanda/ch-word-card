<template>
  <div class="container">
    <div class="alert alert-danger" role="alert">
      <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
      <span class="sr-only">Error:</span>
      Enter a valid email address
    </div>
    <div v-cloak>
      {{ currentCardNumber }} of {{ numOfCards }}
    </div>
    <!-- 日本語 -->
    <div>
      {{ currentCard.jp }}<br />
      <a href="" v-on="click : openCh()" v-show="openChineseWord == false">↓</a>
    </div>

    <!-- 繁体中国語, 注音 -->
    <div v-show="openChineseWord == true">
      {{ currentCard.ch_t   }}<br />
      {{ currentCard.zhuyin }}<br />
      <span v-show="isNotEndOfCards">
        <a href="#" v-on="click : nextCard()" >次</a>
      </span>
      <span v-show="isEndOfCards">
        <a href="/card">もう一度</a>
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

    <a href="/">top</a>
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
  }
}
</script>
<!-- vim: set ft=html: -->
