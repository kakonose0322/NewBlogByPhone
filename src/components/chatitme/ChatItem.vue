<template>
  <div class="chat_container">
    <div class="chat_content">
      {{ trash.content }}
    </div>
    <span class="trash_time_author_img">
          <img :src="trash.authorImg" alt="" class="author_img" width="48" height="48">
        </span>
    <div class="trashtalk_time">
      <span style="position: relative;left: -38px;">
           <van-icon name="graphic" />
            Windows
            <span>&nbsp;&nbsp;{{ trash.createTime | datefmt }}</span>
      </span>
      <span class="trashtalk_time_message" style="">
        <van-icon name="chat-o" />&nbsp;消息&nbsp;
        <span class="trashtalk_time_count">{{ trash.resCount }}</span>
      </span>
    </div>
    <span class="detele_button" v-if="user.level === '1'">
          <i class="el-icon-close"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "ChartItem",
  props: {
    trash: {
      type: Object,
      default() {
        return {
          author: 'Feenstaub',
          content: '形式主义是万恶之源!',
          authorImg: 'avatar_0001',
          createTime: '2021-05-21 19:19:22',
          resCount: 0
        }
      }
    }
  },
  data() {
    return {
      user: {
        level: '2'
      }
    }
  },
  computed: {
    large() {
      return (window.screen.width - 48) * 0.6;
    }
  }
}
</script>

<style scoped>
.chat_container {
  position: relative;
  margin: 16px auto auto 68px;
  width: 68%;
  min-height: 50px;
  background: #25a23b;
  border-radius: 5px;
  line-height: 50px;
  word-break: break-word;
  color: white;
  padding: 5px;
  line-height: 18px;
}
.chat_container::after {
  content: "";
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  border: 8px solid transparent;
  border-right-color: #25a23b;
  top: 15px;
  left: -14px;
}
.chat_content {
  margin-left: 12px;
  margin-top: 10px;
}
#chatitme .trash_time_author_img img {
  width: 48px;
  aspect-ratio: auto 48 / 48;
  height: 48px;
}
#trashtime_container .trash_time_author_img img {
  position: relative;
  top: -46px;
  left: -65px;
  border: 1px solid #ddd;
  float: left;
  border-radius: 64px;
  transition: all 1s;
}
#trashtime_container .trashtalk_time {
  position: relative;
  top: 8px;
  width: 96%;
  margin-top: 10px;
  margin-left: 10px;
  border-top: 1px dashed #fff;
  padding-top: 5px;
  font-size: 12px;
}
.trashtalk_time_message {
  float: right;
}
.trashtalk_time_count {
  color:white
}
.detele_button {
  position: relative;
  z-index: 1;
  color: red;
  font-size: 26px;
  top: -89px;
  left: 607px;
}
</style>
