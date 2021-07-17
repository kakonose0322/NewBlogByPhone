<template>
  <div class="note_item_tag">
    <span class="note_item_tag_title">{{ title }}</span>
    <span class="note_item_tag_content">{{ content }}</span>
  </div>
</template>

<script>
export default {
  name: "NoteTag",
  props: {
    title: {
      type: String,
      default() {
        return '';
      }
    },
    content: {
      type: String,
      default() {
        return '';
      }
    }
  }
}
</script>

<style scoped>
.note_item_tag {
  /*width: 30%;*/
  margin-bottom: 6px;
}
.note_item_tag_title {
  padding: 2px 10px;
  background: #3cf;
  color: #fff;
  border: 1px solid #9ff;
  border-radius: 3px 0 0 3px;
}
.note_item_tag_content {
  padding: 2px 10px;
  background-color: #fafafa;
  color: #888;
  border: 1px solid #9ff;
  border-radius: 3px 0 0 3px;
}
@media screen and (max-width: 760px) {
  .note_item_tag {
    font-size: 8px;
  }
}
</style>