<template>
    <div class="listW">
        <list @clickList="clickList" :list="list"></list>
        <button></button>
    </div>
</template>

<script>
    import list from '@/components/treeForm/list.vue'
    export default {
        name: "treeForm",
        components:{
            list
        },
        data(){
            return{
                list:[
                    {
                        id:1,
                        childe:[
                            {
                                id:12
                            },
                            {
                                id:13,
                                childe:[
                                    {
                                        id:131,
                                    },
                                    {
                                        id:132,
                                    },
                                    {
                                        id:133,
                                    },
                                    {
                                        id:134,
                                        childe:[
                                            {
                                                id:1341,
                                            },
                                            {
                                                id:1342,
                                            },
                                            {
                                                id:1343,
                                                childe:[
                                                    {
                                                        id:13431,
                                                    },
                                                    {
                                                        id:13432,
                                                    },
                                                    {
                                                        id:13433,
                                                    },
                                                    {
                                                        id:13434,
                                                    }
                                                ]
                                            },
                                            {
                                                id:1344,
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                id:14
                            },
                            {
                                id:15
                            }
                        ]
                    },
                    {
                        id:2,
                        childe:[
                            {
                                id:22
                            },
                            {
                                id:23
                            },
                            {
                                id:24
                            },
                            {
                                id:25
                            }
                        ]
                    },
                    {
                        id:3
                    },
                    {
                        id:4,
                        childe:[
                            {
                                id:42
                            },
                            {
                                id:43
                            },
                            {
                                id:44
                            },
                            {
                                id:45,
                                childe:[
                                    {
                                        id:451,
                                    },
                                    {
                                        id:452,
                                    },
                                    {
                                        id:453,
                                    },
                                    {
                                        id:454,
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id:5
                    }
                ],
                minList:[
                    {
                        id:1,
                        childe:[
                            {
                                id:11
                            },
                            {
                                id:12
                            },
                        ]
                    },
                    {
                        id:2
                    },
                    {
                        id:3
                    }
                ]
            }
        },
        created(){
            this.dataList(this.list,false)
        },
        mounted(){

        },
        methods:{
            dataList(list,status){
                for(let i in list){
                    if(list[i].childe){
                        this.dataList(list[i].childe,status);
                    }
                    list[i].checkbox = status;
                    this.$set(list,i,{...list[i]})
                }
            },
            listFor(id,list){
                for(let i in list){
                    if(list[i].id!==id){
                        if(list[i].childe){
                            this.listFor(id,list[i].childe)
                        }
                    }else{
                        list[i].checkbox = !list[i].checkbox
                        if(list[i].childe){
                            this.dataList(list[i].childe,list[i].checkbox);
                        }
                    }

                }
                // this.minList = list;
            },
            upList(id,list){


            },
            clickList(id){

                this.listFor(id,this.list)
                // this.upList(id,this.list)
                console.log(this.list)
                // this.$set(this.minList,'')
                console.log(41)
            }
        }
    }
</script>

<style lang="less">
    .listW ul{
        margin-left: 20px;
    }
</style>