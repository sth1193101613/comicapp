<template>
    <div>
        <div class="star">
            <span class="star-item" v-for = "itemClass in itemClassess" :class="itemClass" track-by="$index"></span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    const LENGTH = 5;
    const CLS_ON = "on";
    const CLS_HALF = "half";
    const CLS_OFF = "off";
    export default {
        name: "start",
        props: {
            score: {
                type: Number
            }
        },
        computed: {
            itemClassess() {
                let result = [];
                let score = Math.floor(this.score * 2) / 2;
                let hashScore = score % 1 !== 0;
                let integer = Math.floor(score);
                for (let i = 0; i < integer; i++) {
                    result.push(CLS_ON);
                }
                if (hashScore) {
                    result.push(CLS_HALF);
                }
                if (result.length < LENGTH) {
                    result.push(CLS_OFF);
                }
                return result;
            }
        }
    };
</script>

<style lang="less" rel="stylesheet/less">
    .star{
        display: flex;
        width: 100%;
        margin-top: 12px;
        .star-item{
            width: 28px;
            height: 28px;
            margin-right: 12px;
            background-repeat: no-repeat;
            background-size: 28px 28px;
            &:last-child {
                margin-right: 0px;
            }
            &.on{
                background-image: url("../../assets/images/quan.png");
            }
            &.half{
                background-image: url("../../assets/images/ban.png");
            }
            &.off {
                background-image: url("../../assets/images/wu.png");
            }
        }
    }
</style>
