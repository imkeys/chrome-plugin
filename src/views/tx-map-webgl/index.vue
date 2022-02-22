<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
import { TMapGl } from '@/utils/map.js'
let $map = null
let TMap = null

export default {
  data () {
    return {
      markers: [
        {
          label: '西湖公园',
          position: {
            lat: 28.206544,
            lng: 112.940281
          }
        },
        {
          label: '梅溪湖公园',
          position: {
            lat: 28.188876,
            lng: 112.898943
          }
        },
        {
          label: '麓谷公园',
          position: {
            lat: 28.213542,
            lng: 112.89537
          }
        },
        {
          label: '烈士公园',
          position: {
            lat: 28.209693,
            lng: 113.001467
          }
        },
        {
          label: '谷山森林公园',
          position: {
            lat: 28.256474,
            lng: 112.908273
          }
        }
      ]
    }
  },
  async mounted () {
    TMap = await TMapGl()
    this.initMap()
  },
  methods: {
    initMap () {
      const center = new TMap.LatLng(28.195611, 112.962661)
      $map = new TMap.Map('map', {
        center: center,
        zoom: 12
      })
      this.setMark()
    },
    setMark () {
      const markerLayer = new TMap.MultiMarker({
        map: $map,
        styles: {
          myStyle: new TMap.MarkerStyle({
            width: 25,
            height: 35,
            src: 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/markerDefault.png',
            anchor: {
              x: 16,
              y: 32
            }
          })
        },
        // 点标记数据数组
        geometries: this.getMark()
      })
      // 绑定事件
      markerLayer.on('click', this.handleMarkClick)
    },
    getMark () {
      const marks = this.markers
      marks.map((item, index) => {
        const { lat, lng } = item.position
        item.id = index
        item.styleId = 'myStyle'
        item.position = new TMap.LatLng(lat, lng)
        item.properties = {}
        item.properties.title = item.label
      })
      return marks
    },
    handleMarkClick (evt) {
      const { position, properties } = evt.geometry
      const { lat, lng } = position
      // eslint-disable-next-line no-unused-vars
      // eslint-disable-next-line no-new
      new TMap.InfoWindow({
        map: $map,
        position: new TMap.LatLng(lat, lng),
        content: properties.title
      })
    }
  }
}
</script>

<style lang="less" scoped>
  #map {
    width: 100vw;
    height: 100vh;
  }
</style>
