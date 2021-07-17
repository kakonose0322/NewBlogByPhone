<template>
  <div class="website_statistics">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "StatisticsContainer"
}
</script>

<style scoped>
.website_statistics {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.75rem;
}
</style>