<template>
    <div class="listsa">
        <cube-scroll :data="list">
            <ul class="detaillist">
                <li v-for="(item,index) in list">
                    {{item}}
                </li>
            </ul>
        </cube-scroll>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "list",
        props:{
            list:{
                type:Array
            }
        },

    }
</script>

<style lang="less" rel="stylesheet/less">
    .listsa{
        .cube-scroll-wrapper{
            height: 700px;
        }
        .detaillist{
            li{
                color: #fff;
                line-height: 4;
            }
        }
    }

</style>