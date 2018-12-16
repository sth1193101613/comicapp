<template>
    <div class="listsa">
        <cube-scroll :data="list">
            <ul class="detaillist" style="padding-bottom: 1.2rem">
                <li v-for="(item,index) in list" class="lsit">
                    <div class="img">
                        <img :src="'https://cdn.comicool.cn/'+item.ep_poster" :onerror="errorImg01">
                    </div>
                    <div class="title">
                        <p class="title_h3">[第{{item.ep_order}}话]{{item.ep_title}}</p>
                        <p>{{item.update_date}}</p>
                    </div>
                </li>
            </ul>
        </cube-scroll>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "list",
        data(){
            return{
                path: "",
                errorImg01: 'this.src="https://cwcdn.comicool.cn/m/images/default-img.png"'
            }
        },
        props: {
            list: {
                type: Array
            }
        },
    };
</script>

<style lang="less" rel="stylesheet/less">
    .listsa {
        .cube-scroll-wrapper {
            height: 725px;
        }
        .detaillist {
            .lsit {
                align-items: center;
                color: #fff;
                display: flex;
                height: 135px;
                border-top: 0.5px solid #e6e3e3;
                &:last-child{
                    border-bottom: 0.5px solid #e6e3e3;
                }
                .title{
                    flex: 1;
                    padding: 0 20px;
                    .title_h3{
                        line-height: 2;
                        font-size: 26px;
                    }
                }
                .img{
                    width: 200px;
                    img{
                        max-width: 100%;
                        margin: 0 auto;
                        display: block;
                    }
                }
            }
        }
    }
</style>
