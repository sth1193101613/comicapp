<template>
    <div>
        <v-swiper></v-swiper>
        <v-navTab></v-navTab>
    </div>
</template>

<script type="text/ecmascript-6">
    import swiper from './swiper/swiper.vue'
    import navTab from './navTab/navTab.vue'
    export default {
        name: "discovery",
        components:{
            "v-swiper": swiper,
            "v-navTab": navTab
        }
    };
</script>

<style lang="less" rel="stylesheet/less">

</style>
