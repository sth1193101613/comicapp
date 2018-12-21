<template>
    <div class="listW">
        <list @clickList="clickList" :list="minList"></list>
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
                                id:11,
                                did:1,
                            },
                            {
                                id:12,
                                did:1,
                            },
                            {
                                id:13,
                                did:1,
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
            this.dataList(this.minList,false)
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

                        this.ttt(list[i].did,this.minList)


                    }
                }
            },
            ttt(id,list){
                let fig = true;

                for(let i in list){
                    if(list[i].id!==id){
                        if(list[i].childe){
                            this.ttt(id,list[i].childe)
                        }
                    }else{

                        if(!list[i].did){
                            list[i].checkbox = true
                        }
                    }

                    if(!list[i].checkbox){
                        fig = false
                    }
                }
                return fig;
            },
            clickList(id){
                this.listFor(id,this.minList)
                console.log(this.minList)
            }
        }
    }
</script>

<style lang="less">
    .listW ul{
        margin-left: 20px;
    }
</style>