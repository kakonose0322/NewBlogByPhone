<template>
  <tag-container>
    <note-tag :title="testTitle" :content="comment.author"></note-tag>
    <note-tag :title="testTitle2" :content="comment.createTime"></note-tag>
    <note-tag :title="testTitle3" :content="comment.updateTime"></note-tag>
  </tag-container>
</template>

<script>
import NoteTag from "@/components/tag/NoteTag";
import TagContainer from "@/components/tag/TagContainer";

export default {
  name: "ExamTagUse",
  components: {NoteTag, TagContainer},
  data() {
    return {
      testTitle: '少年',
      testContent: 'Feenstaub',
      testTitle2: '诞生之时',
      testContent2: '2021-06-14',
      testTitle3: '刷新之时',
      testContent3: '2021-06-14',
    }
  }
}
</script>

<style scoped>

</style>