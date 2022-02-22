<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
import { TMapJs } from '@/utils/map.js'
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
    TMap = await TMapJs()
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
      this.markers.map(item => {
        const { lat, lng } = item.position
        // 标记点
        const marker = new TMap.Marker({
          animation: TMap.MarkerAnimation.DROP,
          position: new TMap.LatLng(lat, lng),
          map: $map
        })
        // 信息窗
        const infoWin = new TMap.InfoWindow({
          map: $map,
          position: new TMap.LatLng(lat, lng),
          content: item.label,
          visible: false
        })
        TMap.event.addListener(marker, 'click', function () {
          infoWin.open()
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
