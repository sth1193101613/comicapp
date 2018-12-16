<template>
    <div class="ovAuto">
        <two-head :name="name"></two-head>
        <div class="tabox">
            <cube-tab-bar v-model="selectedLabel"
                          :use-transition=false
                          ref="tabNav"
                          :data="TabTitle">
            </cube-tab-bar>
            <div class="pr">
                <Better-Scroll>
                    <div class="tab-slide-container">
                        <cube-slide
                                ref="slide"
                                :loop=false
                                :auto-play=false
                                :show-dots=false
                                :initial-index="initialIndex"
                                :options="slideOptions"
                                :data="TabTitle"
                                :refreshResetCurrent="true"
                                @change="changePage">
                            <cube-slide-item v-for="(item,index) in TabTitle">
                                <ul class="class-d-name" @touchstart="state" @touchmove="touchmoves(index,$event)">
                                    <li v-for="(item,index) in item.classDName" :key="index" @click="detail(item)">
                                        <img :src="`https://cdn.comicool.cn/${item.content_poster}?imageView2/2/w/180`">
                                        <div class="name">
                                            <h3>{{item.content_title}}</h3>
                                            <div class="name-icon">
                                                <i class="cubeic-good"></i>
                                                <p>{{item.content_praise_count}}</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </cube-slide-item>
                        </cube-slide>
                    </div>
                </Better-Scroll>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
import twoHead from "@/components/twoHead/index.vue";
import { classAction, classContAction } from "../../action/homeAction.js";
import { findIndexitem } from "../../assets/js/util";
import BetterScroll from "../../views/better/bscroll";
export default {
  name: "classificat",
  data() {
    return {
      selectedLabel: "新作",
      id: "",
      TabTitle: [],
      name: "分类",
      width: document.body.clientWidth,
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        directionLockThreshold: 0
      },
      scrollOptions: {
        directionLockThreshold: 0
      },
      statX: "",
      flng: true
    };
  },
  computed: {
    initialIndex() {
      let index = 0;
      index = findIndexitem(
        this.TabTitle,
        item => item.label === this.selectedLabel
      );
      return index;
    }
  },
  mounted() {
    /* 默认加载头部，和第一个的数据 */
    this.getTabTitle();
  },
  methods: {
    detail(item) {
      this.$router.push({
        path: "/detail",
        query: {
          comicId: item.content_action
        }
      });
    },
    state(e) {
      let clientX = e.targetTouches[0].clientX;
      this.statX = clientX;
      /* 不让请求无限触发 */
      this.flng = true;
    },
    changePage(current) {
      this.selectedLabel = this.TabTitle[current].label;
      this.id = this.TabTitle[current].id;
      this.flng = true;
      this._qqiu(current, this.TabTitle);
    },
    touchmoves(index, e) {
      /* 传入当前的index进行 */
      let [clientX, statX, TabTitle] = [
        e.targetTouches[0].clientX,
        this.statX,
        this.TabTitle
      ];
      let x = clientX - statX;
      /* 判断是左边还是右边 */
      if (x > 0) {
        index--;
      } else {
        index++;
      }

      /* 限制index值 */
      if (index < 0) {
        index = 0;
      } else if (index > TabTitle.length - 1) {
        index = TabTitle.length - 1;
      }

      this._qqiu(index, TabTitle);
    },
    _qqiu(index, TabTitle) {
      if (this.flng) {
        this.flng = false;
        /* 判断已有的不在重复请求 */
        if (TabTitle[index].classDName.length === 0) {
          this._clickClass(TabTitle[index].id);
        }
      }
    },
    _clickClass(id) {
      /* 传入id 进行请求内容 */
      let TabTitle = this.TabTitle;
      classContAction(id).then(res => {
        for (let i of TabTitle) {
          if (i.id === id) {
            i.classDName = res.content_list;
          }
        }
      });
      this.TabTitle = TabTitle;
    },
    getTabTitle() {
      let arr = [];
      classAction().then(res => {
        if (res.msg === "success") {
          let category = res.category_list;
          for (let i in category) {
            let msg = {
              label: category[i].category_title,
              id: category[i].category_id,
              classDName: []
            };
            arr.push(msg);
          }
        }
        /* 默认把第一个请求出来 */
        this._clickClass(arr[0].id);
      });
      this.TabTitle = arr;
    }
  },
  components: {
    twoHead,
    BetterScroll
  }
};
</script>

<style lang="less" rel="stylesheet/less">
.pr {
  position: relative;
  height: 100%;
}
.bigmain {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  .gib {
    padding-bottom: 4.5rem;
  }
}

.flexWrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.cube-slide {
  height: auto !important;
}
.cube-slide-group {
  white-space: normal;
  overflow: inherit;
}
.tab-slide-container {
  width: 750px;
}
.cube-slide-item {
  min-height: 1px;
}
.tabox {
  position: absolute;
  z-index: 10;
  top: 90px;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  .cube-tab-bar {
    margin: 10px 0;
    flex-wrap: wrap;
    .cube-tab {
      line-height: 1.5;
      flex: 1;
      width: 20%;
      min-width: 20%;
      max-width: 20%;
      font-size: 26px;
    }
  }
}
.class-d-name {
  width: 750px;
  .flexWrap;
  li {
    width: 33.3333%;
    border: 1px solid #ebebeb;
    border-width: 0 1px 1px 0;
    box-sizing: border-box;
    &:nth-child(3n) {
      border-right: none;
    }
    img {
      width: 100%;
      display: block;
    }
    .name {
      padding: 26px 20px 15px;
      position: relative;
      height: 90px;
      h3 {
        font-size: 26px;
      }
      &-icon {
        position: absolute;
        bottom: 10px;
        .flexWrap;
        font-size: 24px;
        color: #00dd35;
      }
    }
  }
}
</style>
