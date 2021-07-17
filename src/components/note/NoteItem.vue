<template>
  <div class="note_item" @click="toDetail(comment.id)">
    <div class="note_item_title">
      {{ comment.title }}
    </div>
    <tag-container>
      <note-tag :title="title" :content="comment.author"></note-tag>
      <note-tag :title="title2" :content="comment.createTime | datefmt"></note-tag>
      <note-tag :title="title3" :content="comment.updateTime | datefmt"></note-tag>
    </tag-container>
    <div class="note_item_desc">
      {{ comment.simpleDesc }}
    </div>
  </div>
</template>

<script>
import NoteTag from "@/components/tag/NoteTag";
import TagContainer from "@/components/tag/TagContainer";
import { addPoint } from "@/networks/note";

export default {
  name: "NoteItem",
  components: {
    NoteTag,
    TagContainer
  },
  props: {
    comment: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      title: '少年',
      title2: '诞生之时',
      title3: '刷新之时'
    }
  },
  methods: {
    async toDetail(id) {
      console.log('当前文章',id)
      await addPoint(id).then(res => {
        // console.log('点击操作',res)
      })
      this.$router.push({ path: '/detail', query: { id: id }});
    }
  }
}
</script>

<style scoped>
.note_item {
  width: 100%;
  /*height: 9rem;*/
  text-align: center;
  box-shadow: 3px 3px 1px 0 rgba(0,0,0,.07);
  margin-bottom: 8px;
}
.note_item:hover {
  box-shadow: inset 0 0 10px #0099b8, 0 0 30px #0099b8;
}
.note_item_title {
  font-size: 20px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  padding-top: 1.25rem;
  padding-bottom: 1.0rem;
}
.note_item_desc {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:nowrap;
  padding-bottom: 0.75rem;
}
/*之后研究下怎么让之前三个元素失效*/
.note_item_desc:hover {
  /*overflow: unset;*/
}
</style>