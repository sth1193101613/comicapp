<template>
    <div class="head-fiexd">
        <i class="cubeic-back head-icon" @click="clickGo"></i>
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
                default:''
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
        right: 0;
        width: 100%;
        color: #525252;
        background: rgba(255, 255, 255, .9);
        border-bottom: 1px solid #e5e5e5;
        display: flex;
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