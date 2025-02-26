/ * ================================================ ========================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ================================================= =======================
 * Direitos autorais 2011-2016 Twitter, Inc.
 * Licenciado sob MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ================================================= ======================= * /


+ Function ($) {
  "Use strict ';

  // CSS TRANSIÇÃO DE APOIO (Shoutout: http://www.modernizr.com/)
  // ================================================ ============

  transitionEnd function () {
    var el = document.createElement ( 'inicialização')

    var = {transEndEventNames
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transição: 'transitionend'
    }

    for (var name em transEndEventNames) {
      if (el.style [nome]! == undefined) {
        retornar {finais: transEndEventNames [nome]}
      }
    }

    return false // explícita para o IE8 (._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $ .fn.emulateTransitionEnd = Function (duração) {
    var chamado = false
    var $ el = esta
    $ (This) .one ( 'bsTransitionEnd', function () {chamada = true})
    var callback = function () {if (! chamada) $ ($ el) .trigger ($. support.transition.end)}
    setTimeout (callback, duração)
    devolver este
  }

  $ (Function () {
    $ .support.transition TransitionEnd = ()

    if (! $. support.transition) return

    $ .event.special.bsTransitionEnd = {
      BindType: $ .support.transition.end,
      delegateType: $ .support.transition.end,
      lidar com: function (e) {
        if ($ (e.target) .é (this)) retornar e.handleObj.handler.apply (este, argumentos)
      }
    }
  })

} (JQuery);