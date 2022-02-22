<template>
  <div class="popup">
    <div class="inner">
      <dl>

      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios({
        methods: 'get',
        url: 'http://v.juhe.cn/toutiao/index',
        params: {}
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .popup {
    position: relative;
    width: 400px;
    background: #dd0000;
    color: #ffffff;
    .inner {
      position: relative;
      padding: 10px;
    }
  }
</style>
