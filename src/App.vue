<template>
  <div id="app">
    <router-view />
    <v-Footer :idx="0"></v-Footer>
  </div>
</template>
<script type="text/ecmascript-6">
    import footerTemp from './views/footerTemplate/footerTemp.vue'
    export default {
        name: 'App',
        components:{
            "v-Footer":footerTemp
        }
    }
</script>
<style lang="less">
  #app{
    max-width: 640px;
    margin: 0 auto;
  }
</style>
