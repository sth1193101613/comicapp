<template>
    <cube-slide :data="items">
        <template slot="dots" slot-scope="props">
            <span class="my-dot" :class="{active: props.current === index}" v-for="(item, index) in props.dots">{{index + 1}}</span>
        </template>
    </cube-slide>
</template>

<script type="text/ecmascript-6">
export default {
  name: "swiper",
  data() {
    return {
      items: [
        { image: require("../../../assets/images/banner.jpg") },
        { image: require("../../../assets/images/banner2.jpg") },
        { image: require("../../../assets/images/banner3.jpg") },
        { image: require("../../../assets/images/banner4.jpg") },
        { image: require("../../../assets/images/banner5.jpg") }
      ]
    };
  }
};
</script>

<style lang="less" rel="stylesheet/less">
.cube-slide {
  height: 365px;
}
.cube-slide-dots {
  bottom: 20px;
  span {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 3px solid #fff;
    margin: 0 10px;
    background: transparent;
  }
}
img {
  width: 100%;
}
</style>
