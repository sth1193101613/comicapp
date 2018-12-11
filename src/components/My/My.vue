<template>
    <div class="myMain">
        <div class="Myheader">
            <span><img :src="awtImg"></span>
            <span @click="loginUp">{{loginUser===""? "登录":loginUser.name}}</span>
        </div>
        <ul class="my">
            <li class="list" @click="admin">
                <span><i class="fa fa-user-circle-o" aria-hidden="true"></i></span>
                <p>帐号管理</p>
            </li>
            <li class="list">
                <span><i class="fa fa-sign-in" aria-hidden="true"></i></span>
                <p>咚漫消息</p>
            </li>
        </ul>
        <v-myLogin :loginFlag="login" @close="closeFalse"></v-myLogin>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapState,} from 'vuex'
    import myLogin from './MyLogin/MyLogin.vue'
    export default {
        name: "My",
        data(){
            return{
                msg:"登录",
                login:false,
                awtImg:require('../../assets/images/toux.png')
            }
        },
        computed:{
            ...mapState([
                'loginUser',
            ]),
        },
        methods:{
            admin(){
                this.loginUp()
            },
            closeFalse(){
                this.login = false
            },
            loginUp(){
                if(this.loginUser === ""){
                    this.login = true
                }else{
                    this.login = false
                }
            },
        },
        components:{
            "v-myLogin":myLogin
        },
    };
</script>

<style lang="less" rel="stylesheet/less">
    .myMain{
        .Myheader{
            display: flex;
            align-items: center;
            padding:20px 35px;
            border-bottom: 1px solid #e4e0e0;
            span{
                &:nth-child(1){
                    width: 100px;
                    img{
                        max-width: 80%;
                        display: block;
                    }
                }
                &:nth-child(2){
                    flex: 1;
                }
            }
        }
        .my{
            .list{
                display: flex;
                justify-content: center;
                align-items: center;
                line-height: 3;
                border-bottom: 1px solid #e4e0e0;
                p{
                    font-size: 28px;
                    flex: 1;
                }
                span{
                    text-align: center;
                    width: 60px;
                    i{
                        font-size: 28px;
                        color: #333;
                    }
                }
            }


        }
    }

</style>
