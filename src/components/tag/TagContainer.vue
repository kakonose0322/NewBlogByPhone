<template>
  <div class="note_item_tags">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TagContainer"
}
</script>

<style scoped>
.note_item_tags {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: 0.25rem;
}
</style>