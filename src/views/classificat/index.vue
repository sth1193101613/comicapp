<template>
    <div class="node">
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
                    <cube-slide-item>
                        <cube-scroll  :options="scrollOptions">
                            123
                        </cube-scroll>
                    </cube-slide-item>
                    <cube-slide-item>
                        <cube-scroll  :options="scrollOptions">
                            123
                        </cube-scroll>
                    </cube-slide-item>
                    <cube-slide-item>
                        <cube-scroll  :options="scrollOptions">
                            123
                        </cube-scroll>
                    </cube-slide-item>
                    <cube-slide-item>
                        <cube-scroll  :options="scrollOptions">
                            123
                        </cube-scroll>
                    </cube-slide-item>
                    <cube-slide-item>
                        <cube-scroll  :options="scrollOptions">
                            123
                        </cube-scroll>
                    </cube-slide-item>
                    <cube-slide-item>
                        <cube-scroll  :options="scrollOptions">
                            123
                        </cube-scroll>
                    </cube-slide-item>
                    <cube-slide-item>
                        <cube-scroll  :options="scrollOptions">
                            123
                        </cube-scroll>
                    </cube-slide-item>
                    <cube-slide-item>
                        <cube-scroll  :options="scrollOptions">
                            123
                        </cube-scroll>
                    </cube-slide-item>
                    <cube-slide-item>
                        <cube-scroll  :options="scrollOptions">
                            123
                        </cube-scroll>
                    </cube-slide-item>
                    <cube-slide-item>
                        <cube-scroll  :options="scrollOptions">
                            123
                        </cube-scroll>
                    </cube-slide-item>
                    <cube-slide-item>
                        <cube-scroll  :options="scrollOptions">
                            123
                        </cube-scroll>
                    </cube-slide-item>
                    <cube-slide-item>
                        <cube-scroll  :options="scrollOptions">
                            123
                        </cube-scroll>
                    </cube-slide-item>
                    <cube-slide-item>
                        <cube-scroll  :options="scrollOptions">
                            123
                        </cube-scroll>
                    </cube-slide-item>
                    <cube-slide-item>
                        <cube-scroll  :options="scrollOptions">
                            123
                        </cube-scroll>
                    </cube-slide-item>
                    <cube-slide-item>
                        <cube-scroll  :options="scrollOptions">
                            123
                        </cube-scroll>
                    </cube-slide-item>
                </cube-slide>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {classAction,classContAction} from '../../action/homeAction.js'
    import { findIndexitem } from '../../assets/js/util.js'
    import twoHead from '@/components/twoHead/index.vue'
    export default {
        name: "index",
        data(){
            return{
                selectedLabel: '新作',
                id:'',
                TabTitle:[],
                name:'nicc',
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
        mounted(){
            this.getTabTitle()
        },
        methods:{
            changePage (current) {
                this.selectedLabel = this.TabTitle[current].label
                this.index = current
                this.id = this.TabTitle[current].id

            },
            getTabTitle(){
                classAction().then(res => {
                    let category = res.category_list
                    for(let i in category){
                        let msg = {
                            label: category[i].category_title,
                            id: category[i].category_id
                        }
                        this.TabTitle.push(msg)
                    }

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
        .cube-tab-bar{
            display: flex;
            flex-wrap: wrap;
            .cube-tab{
                flex:1;
                width: 20%;
                min-width: 20%;
                max-width: 20%;
            }
        }
    }
</style>