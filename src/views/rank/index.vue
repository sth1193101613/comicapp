<template>
    <div class="rank">
        <two-head :name="name"></two-head>

        <cube-tab-bar class="rank-head"
                      v-model="selectedLabel"
                      @click="clickHandler">
            <cube-tab v-for="(item, index) in list" :label="item.label"
                      class="li" :class="{active:initialIndex == index}">
            </cube-tab>
        </cube-tab-bar>

        <div class="pr">
            <Better-Scroll>
                <cube-slide  ref="slide"
                             :loop="false"
                             :auto-play="false"
                             :show-dots="false"
                             :initial-index='initialIndex'
                             :options="slideOptions"
                             :data="list"
                            @change="changePage">
                    <cube-slide-item v-for="(item, index) in list" :key="index">
                        <ul class="class-d-name">
                            <li v-for="(item,index) in item.comi_list">
                                <img :src="`https://cdn.comicool.cn/${item.comic_cover_url}?imageView2/2/w/180`">
                                <div class="name">
                                    <h3>{{item.content_title}}</h3>
                                    <div class="name-icon">
                                        <i class="cubeic-good"></i>
                                        <p>{{item.content_praise_count}}</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </cube-slide-item>
                </cube-slide>
            </Better-Scroll>
        </div>
    </div>
</template>

<script>
    import twoHead from "@/components/twoHead/index.vue";
    import { renkJsonp } from "../../action/homeAction.js";
    import BetterScroll from "../../views/better/bscroll";

    export default {
        name: "rank",
        components: {
            twoHead,
            BetterScroll
        },
        data() {
            return {
                selectedLabel:"总榜单",
                name: "排行榜",
                list:[],
                initialIndex:0,
                slideOptions: {
                    listenScroll: true,
                    probeType: 3,
                    directionLockThreshold: 0
                },
            };
        },
        computed:{
        },
        created(){
            let list = [];
            renkJsonp().then(res=>{
                for(let i of res.rank_list){
                    list.push({
                        label:i.name,
                        comi_list:i.comi_list
                    })
                }
            })
            this.list = list;
        },
        mounted(){
            console.log(this.list)
        },
        methods: {
            clickHandler(label) {
                console.log(label)
                let index = 0
                this.list.some(function (item,i) {
                    console.log(item.label)

                    if(item.label==label){

                        index = i;
                    }
                })
                this.initialIndex = index;
            },
            changePage(current){
                this.initialIndex = current;
            }
        }
    };
</script>

<style lang="less">
    .flexWrap {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .pr{
        position: relative;
        height: 100%;
    }
    .bigmain {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        .gib {
            padding-bottom: 4.5rem;
        }
    }
    .rank {
        padding-top: 90px;
        &-head {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            height: 80px;
            .li {
                color: #000;
                font-size: 26px;
                border: 1px solid #eee;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: bold;
                background: #fff;
                height: 100%;
                box-sizing: border-box;
                &.active {
                    color: #fff;
                    background: #b593f1;
                }
            }
        }
        &-con{

        }
    }

    .class-d-name {
        width: 750px;
        .flexWrap;
        li {
            width: 33.3333%;
            border: 1px solid #ebebeb;
            border-width: 0 1px 1px 0;
            box-sizing: border-box;
            &:nth-child(3n) {
                border-right: none;
            }
            img {
                width: 100%;
                display: block;
            }
            .name {
                padding: 26px 20px 15px;
                position: relative;
                height: 90px;
                h3 {
                    font-size: 26px;
                }
                &-icon {
                    position: absolute;
                    bottom: 10px;
                    .flexWrap;
                    font-size: 24px;
                    color: #00dd35;
                }
            }
        }
    }
</style>
