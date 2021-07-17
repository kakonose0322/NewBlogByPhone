<template>
  <div class="website_info">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "WebSiteContainer"
}
</script>

<style scoped>
.website_info {
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
  text-align: center;
}
</style>