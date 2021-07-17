<template>
  <div class="share_content">
    <div class="share_author">
      <span class="share_content_title">文章作者：</span> Feenstaub
    </div>
    <div class="share_link">
      <span class="share_content_title">分享链接：</span> {{ currentLink }}
    </div>
    <div class="share_confirm">
      <span class="share_content_title">文章声明：</span> 本博客所有文章除特别声明外，均采用<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a> 许可协议。转载请注明来自<a href="https://www.feenstaub.top" target="_blank">Feenstaub</a>
    </div>
    <div class="share_component">
      <div class="social-share"
           data-sites="twitter,weibo,qq,wechat"
           :data-url="currentLink"
           data-title="来自Feenstaub的分享">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialShare",
  computed: {
    currentLink() {
      // 获取当前页面主机地址之后的目录，如：/admin/index
      // let pathName =  this.$route.path;
      // let pos = wPath.indexOf(pathName);
      // 获取主机地址，如：http://localhost:8080
      // let localhostPath = wPath.substring(0, pos);
      // 获取当前页面地址，如http://localhost:8080/admin/index
      return window.document.location.href
    }
  }
}
</script>

<style scoped>
.share_content {
  position: relative;
  margin: 2rem 0 0.5rem;
  padding: 0.5rem 0.25rem;
  border: 1px solid rgba(0, 167, 200,0.7);
  -webkit-transition: box-shadow 0.3s ease-in-out;
  -moz-transition: box-shadow 0.3s ease-in-out;
  -o-transition: box-shadow 0.3s ease-in-out;
  -ms-transition: box-shadow 0.3s ease-in-out;
  transition: box-shadow 0.3s ease-in-out;
}
.share_content:hover {
  -webkit-box-shadow: 0 0 8px 0 rgba(0, 154, 205, .6), 0 2px 4px 0 rgba(0, 154, 205, .5);
  box-shadow: 0 0 8px 0 rgba(0, 154, 205, .6), 0 2px 4px 0 rgba(0, 154, 205, .5);
}
.share_content a {
  word-break: break-word;
  color: #99a9bf;
  text-decoration: none;
  word-wrap: break-word;
  overflow-wrap: break-word;
}
.share_content_title {
  color: #49b1f5;
  font-weight: bold;
}
.share_component {
  padding-top: 0.25rem;
  text-align: right;
}
</style>