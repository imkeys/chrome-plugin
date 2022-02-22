<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
import { BMapGl } from '@/utils/map.js'
let $map = null
let BMapGL = null

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
    BMapGL = await BMapGl()
    this.initMap()
  },
  methods: {
    initMap () {
      $map = new BMapGL.Map('map')
      $map.centerAndZoom(new BMapGL.Point(112.962661, 28.195611), 15)
      $map.enableScrollWheelZoom(true)
      this.setMark()
    },
    setMark () {
      this.markers.map(item => {
        const { lat, lng } = item.position
        const point = new BMapGL.Point(lng, lat)
        const opts = {
          width: 150,
          height: 50,
          title: item.label
        }
        const infoWindow = new BMapGL.InfoWindow('', opts)
        const marker = new BMapGL.Marker(point)
        $map.addOverlay(marker)
        marker.addEventListener('click', () => {
          $map.openInfoWindow(infoWindow, point)
        })
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
