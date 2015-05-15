var util = require('./util')


var _Config = undefined
if (util.canUseStorage())
{
  _Config = (function ()
  {
    var KEY_ARTHOGRAPHY  = 'arthograpy'
    var KEY_PHONETIC     = 'phonetic'


    var Config = function () {
      var s = window.localStorage
      if (s.getItem(KEY_ARTHOGRAPHY) === null) { s.setItem(KEY_ARTHOGRAPHY, "traditional") }
      if (s.getItem(KEY_PHONETIC)    === null) { s.setItem(KEY_PHONETIC,    "zhuyin")      }
    }

    Config.prototype.arthography = function () { return this._property ("arthography", arguments) }
    Config.prototype.phonetic    = function () { return this._property ("phonetic",    arguments) }

    // private 
    Config.prototype._property = function (KEY, args) {
      if (args.length > 0) {
        localStorage.setItem(KEY, args[ 0 ])
      }
      return localStorage.getItem(KEY)
    }

    return Config
  })()
}
else {
  _Config = (function ()
  {
    var Config = function () {
      this.arthography = "traditional"
      this.phonetic    = "zhuyin"
    }

    /**
     * arthography ()
     */
    Config.prototype.arthograpy = function () {
      if (arguments.length > 0) {
        return this.arthography = arguments[ 0 ]
      }
      return this.arthography
    }

    /**
     * phonethic()
     */
    Config.prototype.phonetic = function () {
      if (arguments.length > 0) {
        return this.phonetic = arguments[ 0 ]
      }
      return this.phonetic
    }

    return Config
  })()
}


module.exports = new _Config()
