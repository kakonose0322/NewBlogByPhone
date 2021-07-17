<template>
  <div id="app">
    <aplayer :audio="audio" :lrcType="1" />
    <!-- 滑动切换路由 -->
    <van-tabs animated swipeable v-model="activeName" color="#3399ff" title-active-color="#3399ff" swipe-threshold="3"  @click="onClick" @change="onChange">
      <van-tab v-for="item in headers" :title="item.title" :name="item.title" :key="item.index">
        <router-view />
      </van-tab>
    </van-tabs>
    <social-share></social-share>
  </div>
</template>

<script>
import { getAudioList,getMein,getWebsiteInfo } from './networks/website'
import SocialShare from "@/components/share/SocialShare";

export default {
  name: 'App',
  components: {
    SocialShare
  },
  data() {
    return {
      activeName: '主页',
      audio: [],
      headers: [
        {
          title: '主页',
          path: '/'
        },
        {
          title: '时间线',
          path: '/timeline'
        },
        {
          title: '垃圾话',
          path: '/trashtime'
        },
        {
          title: '关于我',
          path: '/aboutme'
        }
      ]
    }
  },
  async mounted() {
    await this.initWebsite()
  },
  methods: {
    async initWebsite() {
      await getAudioList().then(res => {
        this.audio = res.data
      })
      await getMein().then(res => {
        this.$store.commit('setMeinInfo',res.data)
        console.log('setMeinInfo',this.$store.state.meinInfo)
      })
      await getWebsiteInfo().then(res => {
        this.$store.commit('setWebSite',res.data)
        console.log('setWebSite',this.$store.state.websiteInfo)
      })
    },
    onClick(name, title) {
      console.log('click触发',name, title, this.activeName)
    },
    onChange(name,title) {
      // 修改当前标签（或许有用）
      this.activeName = name
      switch (name) {
        case '主页':
          this.$router.push({
            name: 'home'
          })
          break;
        case '时间线':
          this.$router.push({
            name: 'timeline'
          })
          break;
        case '垃圾话':
          this.$router.push({
            name: 'trashtime'
          })
          break;
        case '关于我':
          this.$router.push({
            name: 'aboutme'
          })
          break;
      }
      console.log('change触发',name, title, this.activeName)
    }
  }
}
</script>

<style>
.van-tabs__wrap {
  height: 8%;
}
.van-tab {
  font-size: 18px !important;
}
::-webkit-scrollbar
{
  width: 5px;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: rgba(0,0,0,0.1);
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,153,184,.3);
  background-color: rgba(0,0,0,0.1);
}
</style>
