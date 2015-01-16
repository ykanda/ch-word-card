(function() {
  'use strict';
  var Card, Renderer, card, end, renderer;
  end = null;
  Card = (function() {
    function Card(cards) {
      this.cards = cards;
      this.position = 0;
    }

    end;

    Card.prototype.get_position = function() {
      return this.position + 1;
    };

    Card.prototype.get_total = function() {
      return this.cards.length;
    };

    Card.prototype.get_card = function() {
      return this.cards[this.position];
    };

    Card.prototype.next = function() {
      if (!this.is_end()) {
        return this.position++;
      }
    };

    Card.prototype.prev = function() {
      if (!this.is_top()) {
        return this.position--;
      }
    };

    Card.prototype.is_end = function() {
      return this.position >= (this.cards.length - 1);
    };

    Card.prototype.is_top = function() {
      return this.position <= 0;
    };

    return Card;

  })();
  end;
  Renderer = (function() {
    function Renderer() {}

    Renderer.prototype.render = function(card) {
      var word;
      word = card.get_card();
      $('#card-word-jp').text(word.jp);
      $('#card-word-ch-t').text(word.ch_t);
      $('#card-word-ch-s').text(word.ch_s);
      $('#card-pinyin').text(word.pinyin);
      $('#card-zhuyin').text(word.zhuyin);
      $('#card-total').text(card.get_total());
      return $('#card-position').text(card.get_position());
    };

    end;

    return Renderer;

  })();
  end;
  card = new Card(window.data);
  renderer = new Renderer;
  $(document).on('pagecreate', "#page-card", function() {
    renderer.render(card);
    $("#button-next").bind('click', function(event) {
      console.log("NEXT");
      if (!card.is_end()) {
        card.next();
        renderer.render(card);
      }
      return end;
    });
    end;
    $("#button-prev").bind('click', function(event) {
      console.log("PREV");
      if (!card.is_top()) {
        card.prev();
        renderer.render(card);
      }
      return end;
    });
    return end;
  });
  return end;
})();
