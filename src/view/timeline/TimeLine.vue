<template>
  <div class="timeline_container">
    <h3>世界线于此收束！</h3>
    <animation-item v-for="item in animations" :key="item.index" :animation="item"></animation-item>
  </div>
</template>

<script>
import { getAnimationList } from '../../networks/trashtime'
import AnimationItem from "@/components/animation/AnimationItem";

export default {
  name: "TimeLine",
  components: {AnimationItem},
  data() {
    return {
      animations: [],
      animation: {}
    }
  },
  mounted() {
    this.getAnimatios()
  },
  methods: {
    async getAnimatios() {
      await getAnimationList().then(res => {
        if (res.code === 10000) {
          for (let i=0;i < res.data.length;i++) {
            // console.log(res.data[i])
            res.data[i].img = this.splitPic(res.data[i].img)
          }
          this.animations = res.data
          console.log(this.animations)
        } else {

        }
      })
    },
    splitPic(img) {
      // let img = 'https://i0.hdslb.com/bfs/bangumi/7bf8baf33c1ecd4a7fea91e81d0143aabe1e1b7c.jpg@450w_600h.webp'
      // img = 'https://i0.hdslb.com/bfs/bangumi/image/c65e3bf95f1e8fa4aeaa9796c58b0b87fa2545f4.png@450w_600h.webp'
      //获取最后一个/的位置
      let site = img.lastIndexOf("\/");
      img = img.substring(site+1, site+45)
      return img
    }
  },
  computed: {

  }
}
</script>

<style scoped>
.timeline_container {
  text-align: center;
}
</style>