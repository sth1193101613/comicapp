<template>
    <div>
        <ul>
            <li>
                <p><span></span>帐号管理</p>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    import axios from 'axios'
    export default {
        name: "My",
        created(){
            this.getuser()
        },
        methods:{
            getuser(){
                axios.post('/api/user/selectUser',{
                    username: 111,
                    password: 765
                }).then(res => {
                    console.log(res)
                })
            }
        }
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
