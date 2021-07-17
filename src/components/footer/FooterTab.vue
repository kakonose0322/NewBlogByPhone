<template>
  <!-- 底部导航栏 -->
  <van-tabbar v-model="active">
    <van-tabbar-item icon="wap-home-o" @click="toHome">首页</van-tabbar-item>
    <van-tabbar-item icon="tosend">时间线</van-tabbar-item>
    <van-tabbar-item icon="aim">树洞</van-tabbar-item>
    <van-tabbar-item icon="contact">关于我</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "FooterTab",
  data() {
    return {
      active: '0'
    }
  },
  methods: {
    toHome() {
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style scoped>

</style>