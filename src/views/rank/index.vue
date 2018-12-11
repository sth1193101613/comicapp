<template>
    <div>
        <two-head :name="name"></two-head>
    </div>
</template>

<script>
    import twoHead from '@/components/twoHead/index.vue'
    export default {
        name: "rank",
        data(){
            return{
                name:'排行'
            }
        },
        components:{
            twoHead
        }
    }
</script>

<style lang="less">

</style>