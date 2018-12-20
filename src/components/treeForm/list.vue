<template>
    <ul>
        <li class="" v-for="item in list">
            <input  type="checkbox" :checked="item.checkbox" @change="clickList(item.id)" />
            <span>我是第{{item.id}}个</span>
            <list :list="item.childe" v-if="item.childe"></list>
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
        watch:{
            list(newName,oldName){
                console.log(this.list)
                this.list = oldName
            },
            deep: true,
        },
        created(){
            this.dataList(this.list,false)
        },
        methods:{
            dataList(list,status){
                for(let i of list){
                    if(i.childe){
                        this.dataList(i.childe);
                    }
                    i.checkbox = status;
                }
            },
            listFor(id,list){
                for(let i of list){
                    if(i.id!==id){
                        if(i.childe){
                            this.listFor(id,i.childe)
                        }
                    }else{
                        this.dataList(i.childe,true);
                        console.log(this.list)
                        break;
                    }
                }
            },
            clickList(id){
                this.listFor(id,this.list)
            }
        }
    }
</script>

<style>

</style>