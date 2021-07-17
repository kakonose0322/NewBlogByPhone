<template>
  <div class="animation_item">
    <div class="animation_item_img">
      <img :src="animation.img">
    </div>
    <div class="animation_item_content">
      <div class="animation_info_title">
        <a :href="animation.url" target="_blank">{{ animation.animationName }}</a>
      </div>
      <div class="animation_info_tags">
        <van-tag style="margin-right: 6px;" size="large" :color="randomcolor1" :text-color="randomcolor2" v-for="item in tags" :item="item" :key="item.index" round>{{ item }}</van-tag>
      </div>
      <div class="animation_info_content">
        <div class="animation_info_item">
          <span class="animation_info_label">上映日期</span> <br>
          <span class="animation_info_font"> {{ animation.createTime }}</span>
        </div>
        <div class="animation_info_item">
          <span class="animation_info_label">更新状态</span> <br>
          <span class="animation_info_font"> {{ animation.updateTime }} </span>
        </div>
        <div class="animation_info_item">
          <span class="animation_info_label">弹幕总数</span> <br>
          <span class="animation_info_font"> {{ animation.danmuCount }} </span>
        </div>
        <div class="animation_info_item">
          <span class="animation_info_label">播放量</span> <br>
          <span class="animation_info_font"> {{ animation.playCount }} </span>
        </div>
        <div class="animation_info_item">
          <span class="animation_info_label">追番人数</span> <br>
          <span class="animation_info_font"> {{ animation.playerCount }} </span>
        </div>
        <div class="animation_info_item">
          <span class="animation_info_label">评分</span> <br>
          <span class="animation_info_font"> {{ animation.score }} </span>
        </div>
        <div class="animation_info_item">
          <span class="animation_info_label">评分人数</span> <br>
          <span class="animation_info_font"> {{ animation.scoreCount }} </span>
        </div>
      </div>
      <div class="animation_info_desc">
        {{ animation.desc }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimationItem",
  props: {
    animation: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    tags() {
      return this.animation.tags.split(',')
    },
    imgStyle() {
      return 'background-image:' + 'url("https://i0.hdslb.com/bfs/bangumi/image/b00ab23001f8b73e7ed09fe55c1af14781f27d14.png")'
    },
    randomcolor1() {
      // var str = Math.ceil(Math.random() * 16777215).toString(16);
      // if (str.length < 6) {
      //   str = "0" + str;
      // }
      // let result = '#'+str;
      return '#DDDDDD'
    },
    randomcolor2() {
      var str = Math.ceil(Math.random() * 16777215).toString(16);
      if (str.length < 6) {
        str = "0" + str;
      }
      return '#'+str;
    }
  }
}
</script>

<style scoped>
/*这个例子在不被403的时候可以用来展示webp*/
.animation_item {
  display: flex;
  flex-wrap: wrap;
}
/*.animation_item {*/
/*  height: 298px;*/
/*  width: 300px;*/
/*  background-repeat: no-repeat;*/
/*  background-size: contain;*/
/*  background-image: url("https://i0.hdslb.com/bfs/bangumi/image/b00ab23001f8b73e7ed09fe55c1af14781f27d14.png@450w_600h.webp");*/
/*}*/
.animation_item_img {
  margin: 5px;
  background-repeat: no-repeat;
  background-size: contain;
}
.animation_item_content {
  height: 156px;
  width: calc(100% - 120px);
  overflow-y: auto;
}
.animation_info_tags {
  margin-bottom: 0.35rem;
}
.animation_info_content {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.25rem;
}
.animation_info_item {
  padding: 6px;
  color: #33ccff;
  border-right: 1px solid #2fd8d8;
}
.animation_info_font {
  font-size: 12px;
}
.animation_info_desc {
  font-size: 12px;
}
/*.animation_info_label::before {*/
/*  content: "";*/
/*  width: 5px;*/
/*  height:50px;*/
/*  position: absolute;*/
/*  top: 0;*/
/*  left: 0;*/
/*  background: red;*/
/*}*/
.animation_info_title {
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  text-decoration: none;
}
</style>