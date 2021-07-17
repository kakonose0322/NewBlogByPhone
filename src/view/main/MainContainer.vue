<template>
  <div class="main_container">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
          v-model="loading"
          :finished="finished"
          finished-text="可恶，我也是有底线的啊！"
          @load="onLoad"
      >
        <div style="margin-top: 8px;"></div>
        <note-item v-for="item in notes" :key="item.index" :comment="item"></note-item>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import NoteItem from "@/components/note/NoteItem";
import { getNotes } from '../../networks/note'

export default {
  name: "MainContainer",
  components: {
    NoteItem
  },
  data() {
    return {
      notes: [],
      loading: false,
      finished: false,
      refreshing: false,
      reqParams: {
        min: 0,// 起始位置
        distant: 10// 步长
      }
    }
  },
  methods: {
    async onLoad() {
      await setTimeout(() => {
        if (this.refreshing) {
          this.notes = [];
          this.refreshing = false;
        }
        // console.log("当前日志位置", this.reqParams.min)
        if (this.reqParams.min == 0) {
          let params = {
            min: 0,
            distant: 10
          }
          getNotes(params).then(res => {
            console.log(res)
            // debugger
            if (res.code === 10000) {
              this.notes = res.data
              this.reqParams.min = this.reqParams.min + res.data.length;// 初始化时，进行累加(这里错误也没问题，后面会强制刷新)
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
          getNotes(this.reqParams).then(res => {
            // console.log('刷新数据', res)
            if (res.code === 10000 && res.data !== undefined && res.data !== null) {
              // debugger
              if (res.data.length > 0) {
                this.notes.concat(res.data)
                // console.log('刷新后的数组',this.notes)
                // 这里取消累加，改为每次重新设置为当前数组的第一个元素的id（直接取消不太行，这里就是刷新实际最新的位置，即保证一致性）
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
.main_container {
  margin-top: 8px;
}
</style>