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
    </div>
</template>

<script type="text/ecmascript-6">
    import axios from 'axios'
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
    .cover {
        width: 100%;
        height: 400px;
        background: #e4d241;
        position: relative;
        div{
            position: absolute;
            background: #fff;
        }
    }

</style>
