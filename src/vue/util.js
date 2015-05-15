'use strict'


module.exports =
{
  canUseStorage : function () {
    var _canUseStorage = true
    _canUseStorage &= (window.localStorage != undefined)
    return _canUseStorage
  }
}
