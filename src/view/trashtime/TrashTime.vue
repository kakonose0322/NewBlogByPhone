<template>
  <!-- 树洞 -->
  <div id="trashtime_container">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
          v-model="loading"
          :finished="finished"
          finished-text="可恶，我也是有底线的啊！"
          @load="onLoad"
      >
        <div style="margin-top: 8px;"></div>
        <chat-item v-for="trash in trashes" :trash="trash" :key="trash.index"></chat-item>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import ChatItem from "@/components/chatitme/ChatItem";
import { getTrashList } from '../../networks/trashtime'

export default {
  name: "TrashTime",
  components: {
    ChatItem
  },
  data() {
    return {
      trashes: [],
      loading: false,
      finished: false,
      refreshing: false,
      reqParams: {
        min: 0,// 起始位置
        distant: 10// 步长
      }
    }
  },
  mounted() {
    // this.defaultTrashes()
  },
  methods: {
    async onLoad() {
      await setTimeout(() => {
        if (this.refreshing) {
          this.trashes = [];
          this.refreshing = false;
        }
        // console.log("当前垃圾话位置",this.reqParams.min)
        if (this.reqParams.min == 0) {
          let params = {
            min: 0,
            distant: 10
          }
          getTrashList(params).then(res => {
            console.log(res)
            // debugger
            if (res.code === 10000) {
              this.trashes = res.data
              this.reqParams.min = this.reqParams.min + res.data.length;// 初始化时，进行累加
              // console.log('当前起始位置',this.reqParams.min)
            } else {
              this.$toast('拉取失败！');
            }
          })
        } else if (this.reqParams.min >= 10) {
          // 获得当前数组的最新一个元素的id + 1，不然永远可以查到第一个
          this.reqParams.min = this.notes[0].id + 1
          // console.log('当前数组的最新元素',this.notes[0].id)
          // console.log('当前的min',this.reqParams.min)
          getTrashList(this.reqParams).then(res => {
            // console.log('刷新数据', res)
            if (res.code === 10000 && res.data !== undefined && res.data !== null) {
              debugger
              if (res.data.length > 0) {
                this.trashes.concat(res.data) // 这里取消累加，改为每次重新设置为当前数组的第一个元素的id
                // this.reqParams.min = this.reqParams.min + res.data.length;
              } else {
                this.finished = true
              }
            } else {
              this.$toast('拉取失败！');
            }
          })
        } else {
          this.finished = true
        }

        this.loading = false;
      }, 3000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    }
  }
}
</script>

<style scoped>
#trashtime_container {
  margin-top: 22px;
  width: 100%;
  background: rgba(255, 255, 255, .4);
  box-shadow: 3px 3px 1px 0px rgba(0, 0, 0, .07);
}
</style>