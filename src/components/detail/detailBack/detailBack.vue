<template>
    <div class="backImg" :style="{backgroundImage:`url(${path}${pathAwt})`, backgroundSize:'contain'}" v-if="pathAwt"></div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "detailBack",
  props: {
    pathAwt: {
      type: String
    }
  },

  data() {
    return {
      path: "https://cdn.comicool.cn/"
    };
  }
};
</script>

<style lang="less" rel="stylesheet/less">
.backImg {
  min-height: 500px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  &:before {
    background: #000;
    content: "\20";
    width: 100%;
    height: 100%;
    position: absolute;
    filter: alpha(opacity=30);
    -moz-opacity: 0.3;
    opacity: 0.3;
  }
}
</style>
