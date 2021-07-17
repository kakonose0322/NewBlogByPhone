<template>
  <div class="person_info">
    <div class="website_pic">
      <van-image
          round
          :width="large"
          :height="large"
          :src="img"
      />
    </div>
    <div class="website_name">
      {{ name }}
    </div>
    <div class="website_desc">
      {{ desc }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonInfo",
  props: {
    img: {
      type: String,
      default() {
        return ''
      }
    },
    name: {
      type: String,
      default() {
        return ''
      }
    },
    desc: {
      type: String,
      default() {
        return ''
      }
    }
  },
  computed: {
    large() {
      return window.screen.width * 0.6;
    }
  }
}
</script>

<style scoped>
.website_pic {
  margin: 0 auto;
}
.website_name {
  font-size: 35px;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.website_desc {
  font-size: 20px;
  padding-bottom: 0.75rem;
}
</style>