<template>
    <div class="ovAuto">
        <two-head :name="name"></two-head>
        <div class="tabox">
            <cube-tab-bar v-model="selectedLabel"
                          :use-transition=false
                          ref="tabNav"
                          :data="TabTitle">
            </cube-tab-bar>
            <div class="tab-slide-container">
                <cube-slide
                        ref="slide"
                        :loop=false
                        :auto-play=false
                        :show-dots=false
                        :initial-index="initialIndex"
                        :options="slideOptions"
                        @change="changePage">
                    <cube-slide-item v-for="(item,index) in TabTitle" v-if="TabTitle.length!==0" :key="index">
                        <cube-scroll :options="scrollOptions">
                            {{item.label}}
                        </cube-scroll>
                    </cube-slide-item>



                    <!--<cube-slide-item>-->
                    <!--<cube-scroll  :options="scrollOptions">-->
                    <!--123-->
                    <!--</cube-scroll>-->
                    <!--</cube-slide-item>-->
                    <!--<cube-slide-item>-->
                    <!--<cube-scroll  :options="scrollOptions">-->
                    <!--123-->
                    <!--</cube-scroll>-->
                    <!--</cube-slide-item>-->
                    <!--<cube-slide-item>-->
                    <!--<cube-scroll  :options="scrollOptions">-->
                    <!--123-->
                    <!--</cube-scroll>-->
                    <!--</cube-slide-item>-->
                    <!--<cube-slide-item>-->
                    <!--<cube-scroll  :options="scrollOptions">-->
                    <!--123-->
                    <!--</cube-scroll>-->
                    <!--</cube-slide-item>-->
                    <!--<cube-slide-item>-->
                    <!--<cube-scroll  :options="scrollOptions">-->
                    <!--123-->
                    <!--</cube-scroll>-->
                    <!--</cube-slide-item>-->
                    <!--<cube-slide-item>-->
                    <!--<cube-scroll  :options="scrollOptions">-->
                    <!--123-->
                    <!--</cube-scroll>-->
                    <!--</cube-slide-item>-->
                    <!--<cube-slide-item>-->
                    <!--<cube-scroll  :options="scrollOptions">-->
                    <!--123-->
                    <!--</cube-scroll>-->
                    <!--</cube-slide-item>-->
                    <!--<cube-slide-item>-->
                    <!--<cube-scroll  :options="scrollOptions">-->
                    <!--123-->
                    <!--</cube-scroll>-->
                    <!--</cube-slide-item>-->
                    <!--<cube-slide-item>-->
                    <!--<cube-scroll  :options="scrollOptions">-->
                    <!--123-->
                    <!--</cube-scroll>-->
                    <!--</cube-slide-item>-->
                    <!--<cube-slide-item>-->
                    <!--<cube-scroll  :options="scrollOptions">-->
                    <!--123-->
                    <!--</cube-scroll>-->
                    <!--</cube-slide-item>-->
                    <!--<cube-slide-item>-->
                    <!--<cube-scroll  :options="scrollOptions">-->
                    <!--123-->
                    <!--</cube-scroll>-->
                    <!--</cube-slide-item>-->
                    <!--<cube-slide-item>-->
                    <!--<cube-scroll  :options="scrollOptions">-->
                    <!--123-->
                    <!--</cube-scroll>-->
                    <!--</cube-slide-item>-->
                    <!--<cube-slide-item>-->
                    <!--<cube-scroll  :options="scrollOptions">-->
                    <!--123-->
                    <!--</cube-scroll>-->
                    <!--</cube-slide-item>-->
                    <!--<cube-slide-item>-->
                    <!--<cube-scroll  :options="scrollOptions">-->
                    <!--123-->
                    <!--</cube-scroll>-->
                    <!--</cube-slide-item>-->
                    <!--<cube-slide-item>-->
                    <!--<cube-scroll  :options="scrollOptions">-->
                    <!--123-->
                    <!--</cube-scroll>-->
                    <!--</cube-slide-item>-->
                </cube-slide>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import twoHead from '@/components/twoHead/index.vue'
    import {classAction} from '../../action/homeAction.js'
    import {findIndexitem} from '../../assets/js/util'
    import {TAB} from '../../assets/js/tab'
    export default {
        name: "classificat",
        data(){
            return{
                selectedLabel: '新作',
                id:'',
                TabTitle:TAB,
                name:'nicc',
                width: document.body.clientWidth,
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
        computed: {
            initialIndex () {
                let index = 0
                index = findIndexitem(this.TabTitle, item => item.label === this.selectedLabel)
                return index
            },
        },
        created(){
            this.$nextTick(e => {
                // this.getTabTitle()
            },20)
        },
        methods: {
            changePage(current) {
                this.selectedLabel = this.TabTitle[current].label
                this.id = this.TabTitle[current].id

            },
            getTabTitle() {
                classAction().then(res => {
                    let arr = []
                    if(res.msg === "success"){
                        let category = res.category_list
                        for (let i in category) {
                            let msg = {
                                label: category[i].category_title,
                                id: category[i].category_id
                            }
                            arr.push(msg)
                        }
                    }
                    this.TabTitle = arr
                })
            }
        },
        components:{
            twoHead
        },
    }
</script>

<style lang="less" rel="stylesheet/less">
    .tabox{
        position: absolute;
        z-index: 10;
        top: 90px;
        left: 0;
        width: 100%;
        height: 100%;
        background: #efeff4;
        .cube-tab-bar {
            display: flex;
            flex-wrap: wrap;
            .cube-tab {
                flex: 1;
                width: 20%;
                min-width: 20%;
                max-width: 20%;
            }
        }
    }
</style>