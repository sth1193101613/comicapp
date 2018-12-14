<template>
    <div class="head-fiexd" :class="[computedHeaderType]">
        <i class="cubeic-back head-icon" @click="clickGo" :class="[computedType]"></i>
        <h1>{{name}}</h1>
        <div class="pa"><slot></slot></div>
    </div>
</template>

<script>
    export default {
        name: "twoHead",
        props:{
            name:{
                type:String,
                default:null
            },
            IconType:{
                type:String,
                default: null
            },
            headerType:{
                type:String,
                default: null
            },
            border:{
                type:Boolean,
                default:false
            }
        },
        computed:{
            computedType () {
                return `icon-${this.IconType}`
            },
            computedHeaderType(){
                return `header-${this.headerType}`
            },
            computedBorder(){
                if(!this.border){
                    return `header-${this.boredr}`
                }else{
                    return ''
                }
            }
        },
        methods:{
            clickGo(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="less">
    .head-fiexd{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        width: 100%;
        color: #525252;
        background: #fff;
        z-index: 2;
        display: flex;
        &.header-border{
            border-bottom: 1px solid #e5e5e5;
        }
        &.header-transparent{
            background: transparent;
        }
        h1{
            width: calc(100% - 190px);
            margin: 0 auto;
            line-height: 90px;
            text-align: center;
            font-size: 45px;
        }
        .head-icon,.pa{
            line-height: 90px;
            top: 0;
            height: 90px;
            width: 95px;
            &.icon-white{
                color: #fff;
            }
        }
        .head-icon{
            position: absolute;
            font-size: 50px;
            text-align: center;
        }
        .pa{
            position: absolute;
            right: 0;
        }
    }
</style>