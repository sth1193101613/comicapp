<template>
    <div class="detailCont">
        <div class="detailContHeader">
            <div class="detailContHeaderText">
                <ul class="type">
                    <li v-for="(list,index) in detaildInfo.ext_list" v-if="index === 1">
                        {{list.desc | desc}}
                    </li>
                </ul>
                <h2><strong>{{detaildInfo.comic_title}}</strong><em>{{detaildInfo.rating | tofixd}}</em></h2>
                <v-start :score="Number(detaildInfo.rating / 2)"></v-start>
            </div>
        </div>
        <div class="detailContCont">
            <cube-tab-bar v-model="selectedLabel"
                          show-slider
                          :use-transition="false"
                          ref="tabNav"
                          :data="tabLabels">
            </cube-tab-bar>
            <div class="tab-slide-container">
                <cube-slide
                        ref="slide"
                        :loop="false"
                        :auto-play="false"
                        :show-dots="false"
                        :initial-index="initialIndex"
                        :options="slideOptions"
                        @scroll="scroll">
                    <cube-slide-item>
                        <cube-scroll :options="scrollOptions">
                            <v-acvt
                                    :comicDescLite="detaildInfo.comic_desc_lite"
                                    :author="detaildInfo.comic_auth">
                            </v-acvt>
                        </cube-scroll>
                    </cube-slide-item>
                    <cube-slide-item >
                        <v-list :list="detaildList"></v-list>
                    </cube-slide-item>
                </cube-slide>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { findIndexitem } from "../../../assets/js/util";
import acvt from "./actv/acvt";
import list from "./list/list";
import start from "../../startCom/start";
export default {
  name: "detailCont",
  filters: {
    tofixd(value) {
      let va = Number(value);
      return va.toFixed(1);
    },
    desc(value) {
      const names = value.replace(/[0-9]/gi, "");
      const news = names.replace(/\#/g, "").split("|");
      return news.join(" ");
    }
  },
  data() {
    return {
      max: 5,
      selectedLabel: "剧集",
      tabLabels: [
        {
          label: "作品介绍"
        },
        {
          label: "剧集"
        }
      ],
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        directionLockThreshold: 0
      },
      scrollOptions: {
        directionLockThreshold: 0
      }
    };
  },
  props: {
    detaildInfo: {
      type: Object
    },
    detaildList: {
      type: Array
    }
  },
  methods: {
    scroll(pos) {
      const x = Math.abs(pos.x);
      const tabItemWidth = this.$refs.tabNav.$el.clientWidth;
      const slideScrollerWidth = this.$refs.slide.slide.scrollerWidth;
      const deltaX = (x / slideScrollerWidth) * tabItemWidth;
      this.$refs.tabNav.setSliderTransform(deltaX);
    }
  },
  computed: {
    initialIndex() {
      let index = 0;
      index = findIndexitem(
        this.tabLabels,
        item => item.label === this.selectedLabel
      );
      return index;
    }
  },
  components: {
    "v-acvt": acvt,
    "v-list": list,
    "v-start": start
  }
};
</script>

<style lang="less" rel="stylesheet/less">
.detailCont {
  position: relative;
  .detailContHeader {
    position: relative;
    min-height: 500px;
    box-sizing: border-box;
    color: #fff;
    font-size: 0.5rem;
    .detailContHeaderText {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 30px 20px;
      font-size: 48px;
      box-sizing: border-box;
      h2 {
        em {
          font-size: 24px;
          border-radius: 100%;
          background: #de4c4a;
          filter: alpha(opacity=90);
          -moz-opacity: 0.9;
          opacity: 0.9;
          margin-left: 0.2rem;
          padding: 0.2rem;
          vertical-align: middle;
          margin-top: -0.2rem;
          position: absolute;
          width: 35px;
          height: 35px;
          text-align: center;
          line-height: 35px;
        }
      }
    }
    .type {
      margin-bottom: 20px;
      li {
        display: inline-block;
        font-size: 24px;
      }
    }
  }
  .detailContCont {
    background: #353333;
    .cube-tab-bar {
      background: #353333;
      .cube-tab {
        line-height: 3.5;
        font-size: 28px;
        color: #fff;
        &.cube-tab_active {
          color: #ac6cff;
        }
      }
    }
  }
  .cube-tab-bar-slider {
    height: 5px;
    background: #ac6cff;
  }
  .tab-slide-container {
    position: fixed;
    left: 0;
    right: 0;
  }
}
</style>
