<template>
  <div>
    <baidu-map
      id="map"
      :scroll-wheel-zoom="false"
      ak="UWadBmY1HqlxvgtuMfrbP5p2v8IkIchN"
      @ready="initMap">
    </baidu-map>
  </div>
</template>

<script>
import baiduMap from 'vue-baidu-map/components/map/Map.vue'
import { baiduJson } from './skin'
import { marks } from './data'
let $map = null

export default {
  components: {
    baiduMap
  },
  data () {
    return {}
  },
  methods: {
    /**
     * 载入地图
     */
    initMap ({ BMap, map }) {
      $map = map
      const point = new BMap.Point(112.969048, 28.2016)
      $map.centerAndZoom(point, 10)
      $map.setMapStyle({
        styleJson: baiduJson
      })
      // 载入边界
      this.showBoundary(BMap)
      // 载入标注
      this.addOverlay(BMap)
    },
    /**
     * 将标注添加到地图中
     */
    addOverlay (BMap) {
      if (marks.length === 0) return false
      marks.map(item => {
        const point = new BMap.Point(item.lng, item.lat)
        // 添加标记点
        const iconImg = require('@/assets/bdmap/bdmap-1.png')
        const icon = new BMap.Icon(iconImg, new BMap.Size(30, 30))
        const marker = new BMap.Marker(point, {
          icon: icon
        })
        $map.addOverlay(marker)
        // 添加文字
        const labelOpts = {
          position: point,
          offset: new BMap.Size(-15, -10)
        }
        const label = new BMap.Label(item.person, labelOpts)
        label.setStyle({
          color: '#ffffff',
          background: 'none',
          border: 0,
          width: '28px',
          display: 'block',
          textAlign: 'center',
          whiteSpace: 'nowrap'
        })
        $map.addOverlay(label)
        // 添加圆形
        // const circle = new BMap.Circle(point, 6, {
        //   strokeColor: 'Red',
        //   strokeWeight: 6,
        //   strokeOpacity: 1,
        //   Color: 'Red',
        //   fillColor: '#f03'
        // })
        // $map.addOverlay(circle)
        // 添加信息弹框
        const title = `
          <div style="line-height: 20px; margin: 0 0 5px; font-weight: bold;">
            <span>${item.title}</span>
          </div>
        `
        const content = `
          <dl style="line-height: 20px; font-size: 12px; color: #999999;">
            <dd>${item.data.a}</dd>
            <dd>${item.data.b}</dd>
            <dd>${item.data.c}</dd>
            <dd>${item.data.d}</dd>
          </dl>
        `
        const windowOpts = {
          width: 200,
          height: 100,
          title: title,
          message: ``
        }
        const infoWindow = new BMap.InfoWindow(content, windowOpts)
        marker.addEventListener('click', function () {
          $map.openInfoWindow(infoWindow, point)
        })
      })
    },
    /**
     * 显示市区边界
     */
    showBoundary (BMap) {
      const bdary = new BMap.Boundary()
      const names = ['芙蓉区', '望城区', '岳麓区', '开福区', '雨花区', '天心区', '长沙县', '宁乡市', '浏阳市']
      names.map(name => {
        bdary.get(name, function (res) {
          // 获取行政区域
          // $map.clearOverlays() // 清除地图覆盖物
          // 行政区域的点有多少个
          const count = res.boundaries.length
          for (let i = 0; i < count; i++) {
            const ply = new BMap.Polygon(res.boundaries[i], {
              // 填充颜色
              fillColor: 'rgba(0, 255, 255, .9)',
              // 填充透明度
              fillOpacity: 0.2,
              // 设置多边形边线线粗
              strokeWeight: 2,
              // 设置多边形边线透明度
              strokeOpacity: 0.5,
              // 设置多边形边线样式为实线或虚线
              StrokeStyle: 'solid',
              // 设置多边形边线颜色
              strokeColor: '#eae85b'
            })
            // 建立多边形覆盖物
            // 添加覆盖物
            $map.addOverlay(ply)
            // 调整视野
            // $map.setViewport(ply.getPath())
          }
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
  #map {
    width: 100%;
    height: 100vh;
    background: #dddddd;
  }
</style>
