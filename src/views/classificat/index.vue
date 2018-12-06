<template>
    <div>
        <two-head :name="name"></two-head>
        <ul class="class-name">
            <li></li>
        </ul>
    </div>
</template>

<script>
    import twoHead from '@/components/twoHead/index.vue'
    import homeAction from 'path'
    export default {
        name: "classificat",
        data(){
          return{
              name:'nicc'
          }
        },
        created(){

            this._homeAction();
        },
        components:{
            twoHead
        },
        methods:{
            _homeAction(){
                homeAction().then(res=>{
                    console.log(res)
                });
            }
        }
    }
</script>

<style lang="less">

</style>