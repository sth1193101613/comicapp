<template>
    <div>

    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "discovery",
        data () {
            return {
                selectedLabelDefault: 'Vip',
                tabs: [{
                    label: 'Home',
                    icon: 'cubeic-home'
                }, {
                    label: 'Like',
                    icon: 'cubeic-like'
                }, {
                    label: 'Vip',
                    icon: 'cubeic-vip'
                }, {
                    label: 'Me',
                    icon: 'cubeic-person'
                }]
            }
        },
        methods: {
            clickHandler (label) {
                // if you clicked home tab, then print 'Home'
                console.log(label)
            },
            changeHandler (label) {
                // if you clicked different tab, this methods can be emitted
            }
        }
    };
</script>

<style lang="less" rel="stylesheet/less">
    div{
        font-size: 20px;
    }
</style>
