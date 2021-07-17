<template>
  <div id="hello_world">
    <h1>test count: {{count}}</h1>
    <button @click="add">add</button>
    <van-button type="primary" size="large" @click="toNotice">URL 跳转</van-button>
    <van-button size="large" @click="print">print</van-button>
    <div class="social-share"
         data-sites="twitter,weibo,qq,wechat"
         data-url=""
         :data-title="head">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      count: 1212,
      head: '分享标题',
      url: '',// 网址，默认使用 window.location.href
      source: '',// 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
      title: '',// 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
      description: '',// 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
      image: '',// 图片, 默认取网页中第一个img标签
      sites: ['qzone', 'qq', 'weibo','wechat', 'douban', 'twitter'], // 启用的站点
      disabled:  ['google', 'facebook'], // 禁用的站点
      wechatQrcodeTitle: '微信扫一扫：分享', // 微信二维码提示文字
      wechatQrcodeHelper: '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>'
    }
  },
  methods: {
    toNotice() {
      this.$notify('提示文案')
    },
    add() {
      this.count.value++
    },
    print() {
      console.log(this.count.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
