<template>
  <div class="info_item">
    <div class="info_item">
      <div class="info_item_title">
        {{ title }}
      </div>
      <div class="info_item_content">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatisticsItem",
  props: {
    title: {
      type: String,
      default() {
        return ''
      }
    },
    content: {
      // 这里由于不确定传入类型，故不指定类型
      // type: Number,
      default() {
        return '';
      }
    }
  }
}
</script>

<style scoped>
.info_item {
  flex: 0.33;
  height: 50px;
}
.info_item_title {
  font-size: 18px;
  line-height: 25px;
}
.info_item_content {
  font-size: 14px;
  line-height: 25px;
}
</style>