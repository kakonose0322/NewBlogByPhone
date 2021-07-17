<template>
  <div class="about_me">
    <web-site-container>
      <person-info :name="name" :desc="desc" :img="img"></person-info>
      <statistics-container>
<!--        <statistics-item :title="title" :content="content"></statistics-item>-->
<!--        <statistics-item :title="title2" :content="content2"></statistics-item>-->
<!--        <statistics-item :title="title3" :content="content3"></statistics-item>-->
        <statistics-item v-for="item in website" :key="item.index" :title="item.title" :content="item.content"></statistics-item>
      </statistics-container>
    </web-site-container>
    <van-collapse v-model="activeNames" accordion>
        <van-collapse-item title="基本信息 Information" name="Information" icon="orders-o">
        <p>&gt; 昵称(NickName)：Feenstaub | Kakonose</p>
        <p>&gt; 1997年的金牛社畜,语言粉碎机,至今还在尘世游荡..... </p>
        <p>&gt; 平淡无奇的校园生活,水深火热的社畜人生...... </p>
        <p>&gt; 2019年毕业于南方某不知名本科计算机科学与技术专业 </p>
        <p>&gt; 热爱游戏,喜好追剧,时不时抽风看看哲学之类的书籍,你可以轻易在烂橘子等平台看到我这个lowB的身影,人老了,现在主玩FPS,战地,COD等等..... </p>
        <p>&gt; 知名死宅,即便世界毁灭,我大概也是死在屋里,如果加个限定条件,那一定是死在电脑前 </p>
        <p>&gt; 思想有点像Montaigne,连经历也像,讨厌学院派,喜欢实干家 </p>
        <p>&gt; 个人认为自己乐观开朗,但朋友们都说我思想阴暗(Bushi),嘛,其实是个逗逼来的...... </p>
      </van-collapse-item>
      <van-collapse-item title="特长爱好 Hobby" name="Hobby" icon="star-o">
        <p>&gt; 喜欢学习语言(各种意义上的)：中文 | 英语 | 德语 | 日语 | 俄语(在路上......)</p>
        <p>&gt; 喜欢的颜色：如果爱有颜色,那我想一定是<span data-v-76e0f10a="" style="color: rgb(51, 204, 255);">天蓝色</span>;如果英雄有颜色,那一定是<span style="color: red;">红色</span></p>
        <p>&gt; 爱好：音乐 | 游戏 | 特效 | ACGN相关 </p>
        <p>&gt; 技能：Java | Vue | SQL | 剪辑 | UE | Python | C艹 </p>
        <p>&gt; IDE：我只认可IDEA,IDEA YYDS! </p>
        <p>&gt; 浏览器：Chorme | FireFox | I(Nein!)..... </p>
      </van-collapse-item>
      <van-collapse-item title="联系方式 Contacts" name="Contacts" icon="star-o">
        <p data-v-76e0f10a="">&gt; 期待和你建立契约~</p>
        <p data-v-76e0f10a="">&gt; Email(很少回复)：kakonose5408@gmail.com </p>
        <p>&gt; 爱好：音乐 | 游戏 | 特效 | ACGN相关 </p>
        <p>&gt; 技能：Java | Vue | SQL | 剪辑 | UE | Python | C艹 </p>
        <p>&gt; Github： <a data-v-76e0f10a="" href="https://github.com/kakonose" target="_blank" class="header header--raiseUp">Kakonose ′</a></p>
        <p>&gt; QQ：3072994091 </p>
        <p>&gt; 网易云音乐：<a data-v-76e0f10a="" href="https://music.163.com/#/user/home?id=64416286" target="_blank" class="header header--raiseUp">Feenstaub ′</a></p>
      </van-collapse-item>
      <van-collapse-item title="友情链接 Friends" name="Friends" icon="smile-o">
        <p>&gt; Kisekiremi：<a data-v-76e0f10a="" href="https://kisekiremi.moe/#/home" target="_blank" class="header header--raiseUp">Kisekiremi ′</a></p>
        <p>&gt; 烟雨迷离半世殇：<a data-v-76e0f10a="" href="https://www.lfzxb.top/" target="_blank" class="header header--raiseUp">烟雨迷离半世殇 ′</a></p>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import WebSiteContainer from "@/components/website/WebSiteContainer";
import PersonInfo from "@/components/person/PersonInfo";
import StatisticsContainer from "@/components/statistics/StatisticsContainer";
import StatisticsItem from "@/components/statistics/StatisticsItem";

export default {
  name: "AboutMe",
  components: {
    WebSiteContainer,
    PersonInfo,
    StatisticsContainer,
    StatisticsItem
  },
  mounted() {
    this.initAboutMe()
  },
  data() {
    return {
      activeNames: 'Information',
      name: 'Feenstaub',
      desc: '如果英雄有颜色，那么一定是红色！',
      img: '',
      website: [],
      title: '文章',
      content: '41',
      title2: '标签',
      content2: '10',
      title3: '总字数',
      content3: '41k'
    }
  },
  methods: {
    initAboutMe() {
      this.name = this.$store.state.meinInfo.username
      this.desc = this.$store.state.meinInfo.meinDesc
      this.img = this.$store.state.meinInfo.imgPath
      this.website = this.$store.state.websiteInfo
    }
  },
  computed: {
    large() {
      return window.screen.width * 0.6;
    }
  }
}
</script>

<style>
.van-collapse-item__title {
  font-size: 18px;
}
.van-collapse-item__title--expanded {
  color: #3399ff !important;
}
.van-collapse-item__content {
  color: black;
}
</style>