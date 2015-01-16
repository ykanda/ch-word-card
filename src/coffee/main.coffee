(() ->
  'use strict'; end = null


  class Card
    constructor: (cards) ->
      @cards    = cards
      @position = 0
    end
    get_position: -> @position + 1
    get_total: -> @cards.length
    get_card: -> @cards[ @position ]
    next: -> @position++ unless @is_end()
    prev: -> @position-- unless @is_top()
    is_end: -> @position >= (@cards.length - 1)
    is_top: -> @position <= 0
  end


  class Renderer
    render: (card) ->
      word = card.get_card()
      $('#card-word-jp').text word.jp
      $('#card-word-ch-t').text word.ch_t
      $('#card-word-ch-s').text word.ch_s
      $('#card-pinyin').text word.pinyin
      $('#card-zhuyin').text word.zhuyin
      $('#card-total').text card.get_total()
      $('#card-position').text card.get_position()
    end



  end

  #############################################################################
 
  card     = new Card window.data
  renderer = new Renderer


  $(document).on 'pagecreate', "#page-card", () ->
    renderer.render(card)

    # Next card
    $("#button-next").bind 'click', (event) ->
      console.log "NEXT"
      unless card.is_end()
        card.next()
        renderer.render card
      end
    end

    # Prev card
    $("#button-prev").bind 'click', (event) ->
      console.log "PREV"
      unless card.is_top()
        card.prev()
        renderer.render card
      end
    end
  end
)()
