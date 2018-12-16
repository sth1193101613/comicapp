<template>
    <div class="pri">
        <h3 class="tit">故事简介</h3>
        <p class="title">
            {{comicDescLite}}
        </p>
        <p class="auth"><span>作者:</span>{{author}}</p>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "acvt",
  props: {
    comicDescLite: {
      type: String
    },

    author: {
      type: String
    }
  }
};
</script>

<style lang="less" rel="stylesheet/less">
.pri {
  padding: 0.5rem;
  white-space: normal;
  .tit {
    font-size: 28px;
    color: #fff;
  }
  .title {
    color: #d0d0d0;
    font-size: 24px;
    margin: 0;
    padding: 18px 0;
    letter-spacing: -1px;
    line-height: 2;
  }
  .auth {
    color: #fff;
    span {
      color: #d0d0d0;
    }
  }
}
</style>
