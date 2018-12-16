<template>
    <div class="Detailbtn" v-if="watchtn">
        <div class="watch">[第{{watchtn.ep_order}}话]{{watchtn.ep_title}}</div>
        <div class="state">{{state}}</div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "btn",
        props:{
            first:{
                type: Object
            }
        },
        computed:{
            watchtn(){
                if(true){
                    return this.first
                }
            },
            state(){
                if(true){
                    return "开始阅读"
                }else{
                    return "继续阅读"
                }
            }
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    .Detailbtn{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        align-items: center;
        display: flex;
        z-index: 2;
        >div{
            height: 80px;
            text-align: center;
            line-height: 80px;
        }
        .watch{
            background: #fff;
            color: #000;
            flex: 1;
            color: #000;
        }
        .state{
            color: #fff;
            width: 150px;
            background: #ac6cff;
        }
    }
</style>