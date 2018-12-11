<template>
  <div class="bigmain" ref="wrapper">
    <div class="gib">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    import Bscroll from 'better-scroll'
    export default {
        mounted() {
            this.$nextTick(() => {
                this._initScroll()
                this.pullingDownUp()
            })
        },
        data(){
            return{
                listenScroll:true
            }
        },
        methods:{
            pullingDownUp () {
                this.scroll.refresh() //重新计算元素高度
            },
            _initScroll() {
                if (!this.scroll) {
                    this.scroll = new Bscroll(this.$refs.wrapper, {
                        click: true,
                    })
                    console.log(this.scroll)
                }
            },
        },
    }
</script>

<style lang="less" rel="stylesheet/less">

</style>
