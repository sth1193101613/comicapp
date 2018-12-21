<template>
    <ul>
        <li class="" v-for="item in list">
            <div class="con">
                <div class="box" :class="{active:item.checkbox}" @click="clickList(item.id)" ></div>
                <span>我是第{{item.id}}个</span>
            </div>
            <list :list="item.childe" v-if="item.childe" @clickList="clickList"></list>
        </li>
    </ul>
</template>

<script>
    import list from '@/components/treeForm/list.vue'
    export default {
        name: "list",
        components:{
            list
        },
        props:{
            list:{
                type:Array,
                default:[]
            }
        },
        mounted(){
        },
        methods:{
            clickList(id){
                this.$emit("clickList",id);
            }
        }
    }
</script>

<style lang="less">
    .con{
        display: flex;
    }
    .box{
        width: 20px;
        height: 20px;
        border:solid #000 2px;
        border-radius: 5px;
        &.active{
            background: red;
        }
    }
</style>