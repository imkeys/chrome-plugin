(function (window, document) {
  'use strict'
  var _html2canvas = {}
  _html2canvas.utils = {}

  _html2canvas.utils.Log = () => {
    // console.log('log: 触发程序')
  }
  _html2canvas.utils.Extend = function (options, defaults) {
    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        defaults[key] = options[key]
      }
    }
    return defaults
  }
  _html2canvas.utils.Canvas = (opts) => {
    let options = {
      name: 'liqingyun',
      age: 18,
      school: 'qinghua'
    }
    options = _html2canvas.utils.Extend(opts, options)
    console.log('canvas: 触发', options)
  }

  window.html2canvas = (elements, opts) => {
    // console.log('elements: ', elements)
    // console.log('opts: ', opts)
  }
  window.html2canvas.log = _html2canvas.utils.Log
  window.html2canvas.canvas = _html2canvas.utils.Canvas
})(window, document)
