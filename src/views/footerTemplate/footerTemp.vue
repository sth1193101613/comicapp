<template>
    <div class="footer">
        <div v-for='(item,index) of items' :class='[{on:index === Number(idx)}]' class="footerView ripple" @click="nav(item,index)">
            <i :class="['fa',item.icon,{onIcon:index === Number(idx)}]" aria-hidden="true"></i>
            <p :class="['colorChange',{on:index === Number(idx)}]">{{item.name}}</p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapMutations,mapState} from 'vuex'
    export default {
        name: "footerTemp",
        props:{
            Idx:{
                type:Number,
                default:2
            }
        },
        data(){
            return {
                items:[
                    {
                        name:"更新",
                        push:"/update",
                        icon:"fa-heart",
                    },
                    {
                        name:"发现",
                        push:"/discovery",
                        icon:"fa-map-marker",
                    },
                    {
                        name:"我的漫画",
                        push:"/myComics",
                        icon:"fa-gratipay",
                    },
                    {
                        name:"我的",
                        push:"/My",
                        icon:"fa-user",
                    }],
            }
        },
        computed:{
            ...mapState([
                'idx',
            ]),
        },
        methods:{
            ...mapMutations({
                idxAction: 'IDX_TYPE'
            }),
            nav(item,index){
                this.$router.push(item.push)
                this.idxAction(index)
            },
        },
    }
</script>

<style lang="less" rel="stylesheet/less">
    .footer {
        display: flex;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        align-items: center;
        background: #fff;
        text-align: center;
        box-shadow:0px -2px 5px #A3A3A3;
        .footerView {
            height: 80px;
            line-height: 80px;
            flex: 1;
            font-size: 30px;
            .fa{
                position: relative;
                top: 15px;
                display: block;
                &.onIcon{
                    color: #6500e6;
                }
            }
            .colorChange {
                margin-top: -7px;
                color: black;
                font-size: 20px;
                &.on {
                    color: #6500e6;
                }
            }
        }
    }
</style>