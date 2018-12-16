<template>
    <div>
        <v-header :name="name" header-type="transparent" icon-type="balck" :border="false"></v-header>
    </div>
</template>

<script type="text/ecmascript-6">
    import header from "../twoHead";
    export default {
        data(){
            return{
                name:"新作推荐"
            }
        },
        name: "newaction",
        components: {
            "v-header": header,
        }
    }
</script>

<style lang="less" rel="stylesheet/less">

</style>