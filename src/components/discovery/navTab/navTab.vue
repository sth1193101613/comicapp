<template>
    <div class="nav">
        <ul class="navMain">
            <li v-for="(item,index) in navList" class="list" @click="ous(item.path)">
                <img :src="item.icon">
                <p>{{item.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "navTab",
  data() {
    return {
      navList: [
        {
          name: "分类",
          icon: require("../../../assets/images/fenlei.png"),
          path: "/classificat"
        },
        {
          name: "个性推荐",
          icon: require("../../../assets/images/tuijian.png"),
          path: ""
        },
        {
          name: "新作品",
          icon: require("../../../assets/images/huojian.png"),
          path: "/newaction"
        },
        {
          name: "排行",
          icon: require("../../../assets/images/paihang.png"),
          path: "/rank"
        }
      ]
    };
  },
  methods: {
    ous(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="less" rel="stylesheet/less">
.nav {
  margin: 10px 20px;
  padding: 20px;
  .navMain {
    display: flex;
    text-align: center;
    .list {
      flex: 1;
      img {
        display: block;
        max-width: 50%;
        margin: 0 auto;
      }
      p {
        margin-top: 15px;
        color: #000;
      }
    }
  }
}
</style>
