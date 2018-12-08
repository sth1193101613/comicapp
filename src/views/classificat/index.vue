<template>
    <div class="node">
        <two-head :name="name"></two-head>
        <cube-page type="tab-composite-view" title="tab-composite">
            <div slot="content">
                <cube-tab-bar v-model="selectedLabel"
                              show-slider
                              :use-transition="disabled"
                              ref="tabNav"
                              :data="tabLabels">
                </cube-tab-bar>
                <div class="tab-slide-container">
                    <cube-slide
                            ref="slide"
                            :loop="loop"
                            :auto-play="autoPlay"
                            :show-dots="showDots"
                            :options="slideOptions"
                            @scroll="scroll"
                            @change="changePage">
                        <cube-slide-item>
                            <cube-scroll :options="scrollOptions">
                                <ul class="list-wrapper">
                                    <li v-for="n in 10" class="list-item">
                                        {{n}}
                                    </li>
                                </ul>
                            </cube-scroll>
                        </cube-slide-item>
                        <cube-slide-item>
                            <cube-scroll :options="scrollOptions">
                                <ul class="list-wrapper">
                                    <li v-for="n in 10" class="list-item">
                                       {{n}}
                                    </li>
                                </ul>
                            </cube-scroll>
                        </cube-slide-item>
                        <cube-slide-item>
                            <cube-scroll :options="scrollOptions">
                                <ul class="list-wrapper">
                                    <li v-for="n in 10" class="list-item">
                                        {{n}}
                                    </li>
                                </ul>
                            </cube-scroll>
                        </cube-slide-item>
                    </cube-slide>
                </div>
            </div>
        </cube-page>
    </div>
</template>

<script type="text/ecmascript-6">
    import twoHead from '@/components/twoHead/index.vue'
    export default {
        name: "index",
        data(){
            return{
                name:'nicc',
                selectedLabel: '推荐',
                disabled: false,
                tabLabels: [{
                    label: '关注'
                }, {
                    label: '推荐'
                }, {
                    label: '热榜'
                }],
                loop: false,
                autoPlay: false,
                showDots: false,
                slideOptions: {
                    listenScroll: true,
                    probeType: 3,
                    directionLockThreshold: 0
                },
                scrollOptions: {
                    directionLockThreshold: 0
                },
            }
        },
        methods:{
            changePage (current) {
                this.selectedLabel = this.tabLabels[current].label
                console.log(current)
            },
            scroll (pos) {
                const x = Math.abs(pos.x)
                const tabItemWidth = this.$refs.tabNav.$el.clientWidth
                const slideScrollerWidth = this.$refs.slide.slide.scrollerWidth
                const deltaX = x / slideScrollerWidth * tabItemWidth
                this.$refs.tabNav.setSliderTransform(deltaX)
            },
        },

        components:{
            twoHead
        },
    }
</script>

<style lang="less" rel="stylesheet/less">

</style>