<template>
    <div id="app">
        <div>
            <transition :name="transitionName">
                <router-view class="child-view"/>
            </transition>
            <v-Footer :idx="1" v-if="$route.meta.show"></v-Footer>
        </div>
    </div> 
</template>
<script type="text/ecmascript-6">
    import footerTemp from './views/footerTemplate/footerTemp.vue'
    export default {
        name: 'App',
        data() {
            return {
                transitionName: 'slide-left'
            }
        },
        components:{
            "v-Footer":footerTemp
        },
    }
</script>
<style lang="less">
    .child-view {
        position:absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transition: all .5s cubic-bezier(.55,0,.1,1);
    }
    .slide-left-enter-active,
    .slide-left-leave-active {
        will-change: transform;
        transition: all 500ms;
        position: absolute;
    }
    .slide-left-enter {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
    .slide-left-leave-active {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }

</style>
