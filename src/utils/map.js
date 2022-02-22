/**
 * 腾讯地图
 * 普通版
 */
export function TMapJs () {
  return new Promise(function (resolve, reject) {
    window.init = function () {
      resolve(window.qq.maps)
    }
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://map.qq.com/api/js?v=2.exp&callback=init&key=IJZBZ-DUSED-R4Q4X-PLVYR-JMP3H-DQBYA'
    script.onerror = reject
    document.head.appendChild(script)
  })
}

/**
 * 腾讯地图
 * GL版
 */
export function TMapGl () {
  return new Promise(function (resolve, reject) {
    window.onload = function () {
      resolve(window.TMap)
    }
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://map.qq.com/api/gljs?v=1.exp&key=2Y6BZ-Y6JW5-NZJIE-QUWP6-NQYES-O3FQX'
    script.onerror = reject
    document.head.appendChild(script)
  })
}

/**
 * 百度地图
 * GL版
 */
export function BMapGl () {
  return new Promise(function (resolve, reject) {
    window.onload = function () {
      resolve(window.BMapGL)
    }
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://api.map.baidu.com/api?v=1.0&type=webgl&ak=UWadBmY1HqlxvgtuMfrbP5p2v8IkIchN&callback=init'
    script.onerror = reject
    document.head.appendChild(script)
  })
}
