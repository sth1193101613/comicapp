<template>
    <div>
        <v-header :name="name" header-type="transparent" icon-type="white" :border="false"></v-header>
        <div class="classfily">
            <v-DetailBack :pathAwt="imgPath"></v-DetailBack>
            <v-detailCont :detaildInfo="detaildInfo" :detaildList="detaildList"></v-detailCont>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {Detail} from '../../action/homeAction'
    import DetailBack from './detailBack/detailBack'
    import header from '../twoHead/'
    import detailCont from './detailCont/detailCont'
    export default {
        name: "detail",
        data(){
            return{
                name:"",
                imgPath:'',
                detaildInfo:{},
                detaildList:[],
                comic_id:this.$route.query.comicId
            }
        },
        created(){
            this._Detail()
        },
        methods:{
            _Detail(){
                Detail(this.comic_id).then(res => {
                    this.imgPath = res.comic_info.comic_cover_large
                    this.detaildInfo = res.comic_info
                    this.detaildList = res.ep_list
                })
            }
        },
        components:{
            "v-DetailBack": DetailBack,
            "v-detailCont": detailCont,
            "v-header": header
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    .classfily{
        position: relative;
        z-index: 1;
        min-height: 100%;
        background: #353333;
        transition: all ease-out .3s;
        -webkit-transition: all ease-out .3s;
        box-sizing: border-box;
    }
</style>