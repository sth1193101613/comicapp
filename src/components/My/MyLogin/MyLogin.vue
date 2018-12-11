<template>
    <div class="login" v-if="loginFlag">
        <div class="loginHeader">
            <span>密码登录</span>
            <span @click="close"><i class="fa fa-times" aria-hidden="true"></i></span>
        </div>
        <div class="loginImg">
            <img :src="this.imgPath">
        </div>
        <div class="loginMain">
            <ul>
                <li>
                    <i class="fa fa-key" aria-hidden="true"></i>
                    <cube-input
                            @input="changeInput"
                            v-model="user.username"
                            :autofocus:="autofocus"
                            placeholder="请输入帐号"
                            :clearable="clearable">
                    </cube-input>
                </li>
                <li>
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                    <cube-input
                            v-model="user.password"
                            placeholder="请输入密码"
                            :type="type"
                            :autocomplete="autocomplete"
                            :eye="eye">
                    </cube-input>
                </li>
                <li>
                    <cube-button :light="true" :disabled="disabled" :class="[{back:disabled}]" @click="loginUp">登录</cube-button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapActions} from 'vuex'
    export default {
        name: "MyLogin",
        data(){
            return{
                imgPath:require('../../../assets/images/timg.jpg'),
                type: 'password',
                autofocus: true,
                autocomplete: true,
                disabled:true,
                eye: {
                    open: true,
                    reverse: true
                },
                user:{
                    username:'',
                    password:''
                },
                clearable: {
                    visible: true,
                    blurHidden: true
                }
            }
        },
        props:{
            loginFlag:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            ...mapActions([
                'getUserLogin'
            ]),
            loginUp(){
                if(this.user.username && this.user.password){
                    this.getUserLogin(this.user)
                }else{
                    this.$createDialog({
                        type: 'alert',
                        title: '提示',
                        content: '用户名或者密码不能为空',
                    }).show()
                }
            },
            close(){
                this.$emit('close')
            },
            changeInput(){
                if(this.user.username !== ''){
                    this.disabled = false
                }else{
                    this.disabled = true
                }
            }
        },
    }
</script>

<style lang="less" rel="stylesheet/less">
    .login{
        position: absolute;
        top: 0;
        left: 0;
        background: #fff;
        bottom: 0;
        right: 0;
        z-index: 2;
        .loginHeader{
            line-height: 60px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            span{
                flex: 1;
                padding: 20px;
                &:nth-child(2){
                    font-size: 28px;
                    text-align: right;
                }
            }
        }
        .loginImg{
            margin: 20px 0;
            width: 100%;
            img{
                max-width: 50%;
                display: block;
                margin: 0 auto;
            }
        }
        .loginMain{
            li{
                position: relative;
                .fa{
                    top: 30%;
                    margin-left: 25px;
                    position: absolute;
                    position: absolute;
                    z-index: 2;
                    font-size: 32px;
                }
            }
        }
        .cube-input-field{
            padding-left: 80px;
        }
        .cube-btn-light{
            width: 90%;
            margin: 20px auto;
            color: #fff;
            background: #a76dff;
            &.back{
                background: #ccc;
            }
        }
    }
</style>