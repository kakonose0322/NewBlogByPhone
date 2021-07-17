<template>
  <div class="note_detail_container">
    <div class="note_title">
      <h1 style="padding-top: 22px;text-align: center;">{{ note.title }}</h1>
      <h3 style="text-align: center">——&nbsp;&nbsp;&nbsp;&nbsp;{{ note.simpleDesc }}</h3>
    </div>
    <!-- 不使用组件是因为组件的逻辑会变更复杂 -->
    <div class="tags_button">
      <van-tag size="large" :color="randomcolor1" :text-color="randomcolor2" v-for="item in note.tags" :item="item" :key="item.index" round>{{ item }}</van-tag>
      <van-button round type="primary" style="float: right;margin-right: 10px;" @click="toNoteContainer">
        <van-icon name="home-o" />
      </van-button>
    </div>
    <div class="markdown-body">
      <div class="article_message hljs renderNav" v-html="code"></div>
    </div>
  </div>
</template>

<script>
import marked from "marked"; // 引入marked
import hljs from "highlight.js"; // 引入 highlight.js
// import "highlight.js/styles/monokai-sublime.css"; // 引入高亮样式 这里我用的是sublime样式
// import "highlight.js/styles/github.css"; // github
// import "highlight.js/styles/rainbow.css"; // grey
// import "highlight.js/styles/qtcreator_light.css"; // white like github
// import "highlight.js/styles/tomorrow-night-bright.css"; // black
// import "highlight.js/styles/paraiso-light.css"; // light-yellow
import "highlight.js/styles/lightfair.css";
import {getNotesById} from "../../networks/note"; // touming
// import "highlight.js/styles/atelier-savanna-light.css"; // QQReader

export default {
  name: "NoteDetail",
  data() {
    return{
      note: {
        id: null,
        title: '',
        simpleDesc: '',
        tags: [],
        author: '',
        noteContent: ''
      },
      code:'', // 要解析的markdown语法的内容
    }
  },
  mounted(){
    this.setThisCurrentNote()
  },
  methods: {
    setMarked() {
      // 生成codeEditer
      var rendererMD = new marked.Renderer();
      marked.setOptions({
        renderer: rendererMD,
        highlight: function(code) {
          return hljs.highlightAuto(code).value;
        },
        pedantic: false,
        gfm: true,
        tables: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false
      });
      this.code = marked(this.note.noteContent);// 将markdown内容解析
    },
    setThisCurrentNote() {
      // console.log(this.note)
      // console.log('NoteDetail id:', this.$route.query.id)
      if (this.$route.query.id !== undefined) {
        getNotesById(this.$route.query.id).then(res => {
          if (res.code === 10000) {
            let thisNote = res.data
            this.note.id = thisNote.id
            this.note.author = thisNote.author
            this.note.simpleDesc = thisNote.simpleDesc
            // 如果包含'，'，则证明是个数组
            if (thisNote.tags.indexOf(',') > -1) {
              this.note.tags = thisNote.tags.split(',')
            } else {//不是数组就直接塞入值
              let array = new Array();
              array[0] = thisNote.tags;
              // console.log('测试',array)
              this.note.tags = array
              // console.log('这时',this.note.tags,typeof this.note.tags)
            }
            this.note.title = thisNote.title
            this.note.noteContent = thisNote.noteContent
            // 解析完数据以后直接执行markdown样式解析
            this.setMarked()
            // console.log('当前的note',this.note)
          } else {
            this.$notify({
              title: '失败',
              message: '获取当前文章出现问题，请再次尝试！',
              type: 'error',
              offset: 68
            });
          }
        })
      }
    },
    setTagsValue(newVal) {
      // console.log('Tags value:',newVal)
      this.note.tags = newVal;
    },
    toNoteContainer() {
      this.$router.push({path: '/'})
    }
  },
  computed: {
    randomcolor1() {
      // var str = Math.ceil(Math.random() * 16777215).toString(16);
      // if (str.length < 6) {
      //   str = "0" + str;
      // }
      // let result = '#'+str
      return '#DDDDDD';
    },
    randomcolor2() {
      var str = Math.ceil(Math.random() * 16777215).toString(16);
      if (str.length < 6) {
        str = "0" + str;
      }
      return '#'+str;
    }
  }
}
</script>

<style scoped>
.note_detail_container{
  margin: 5px;
  background: rgba(255, 255, 255, .4);
  overflow-y: auto;
  box-shadow: 3px 3px 1px 0px rgba(0, 0, 0, .07);
}
.markdown-body h2 {
  padding-bottom: .3em;
  font-size: 1.5em;
  border-bottom: 1px none;
}
/*消除自带的白底*/
.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: none;
}
/*取消自带的h1浮动*/
.note_detail_container h1 {
  font-size: 1.5em;
  margin-block-start: 0em;
  margin-block-end: 0em;
}
.note_detail_title {
  float: left;
  width: 100%;
  margin-bottom: 4px;
}
.tags_button {
  margin-left: 12px;
}
.back_up_position {
  position: fixed;
  top: 138px;
  right: 10px;
}
</style>
