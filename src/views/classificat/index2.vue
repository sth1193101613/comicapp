<template>
    <div class="ovAuto">
        <two-head :name="name"></two-head>
        <ul class="class-name">
            <li v-for="(item,index) in className"
                :class="{active:item.category_id===id}"
                @click="_clickClass(item.category_id)">
                {{item.category_title}}
            </li>
        </ul>
        <div class="classificat"
             @touchstart="state"
             @touchmove="route"
             @touchend="ends"
             :style="{transform:`translateX(${x}px)`}">
            <ul class="class-d-name">
                <li v-for="item in classDName">
                    <img :src="`https://cdn.comicool.cn/${item.content_poster}?imageView2/2/w/180`">
                    <div class="name">
                        <h3>{{item.content_title}}</h3>
                        <div class="name-icon">
                            <i class="cubeic-good"></i>
                            <p>{{item.content_praise_count}}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import twoHead from '@/components/twoHead/index2.vue'
    import {classAction,classContAction} from '../../action/homeAction.js'
    export default {
        name: "classificat",
        data(){
          return{
              name:'nicc',
              className:'',
              classDName:'',
              id:63,
              x:0,
              statX:0,
          }
        },
        created(){
            this._classAction();
            this._clickClass(this.id);
        },
        components:{
            twoHead
        },
        methods:{
            state(e){
                let clientX = e.targetTouches[0].clientX
                this.statX = clientX
            },
            route(e){
                let [clientX,statX] = [e.targetTouches[0].clientX,this.statX];
                this.x = clientX - statX ;

            },
            ends(e){
                let x = this.x;
                let className = this.className;
                let headClassIndex = this.headClassIndex;
                if(x>350){
                    headClassIndex--;
                }
                if(x<-350){
                    headClassIndex++
                }
                this.x = this.statX = 0
            },
            _classAction(){
                classAction().then(res=>{
                    this.className = res.category_list
                });
            },
            _clickClass(id){
                this.id = id;
                classContAction(id).then(res => {
                    this.classDName = res.content_list
                });


            }
        }
    }
</script>

<style lang="less">
    .ovAuto{
        overflow: auto;
    }
    .flexWrap{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .class-name{
        position: fixed;
        top: 91px;
        z-index: 1;
        background: #fff;
        .flexWrap;
        li{
            font-size: 27px;
            margin: 28px 35px;
            &.active{
                color: #be85ff;
                position: relative;
                &:before{
                    content: '';
                    background:#be85ff ;
                    width: 100%;
                    height: 5px;
                    position: absolute;
                    bottom: -10px;
                }
            }
        }
    }
    .classificat{
        padding-top: 340px;
        .class-d-name{
            width: 750px;
            .flexWrap;
            li{
                width: 33.3333%;
                border:1px solid #ebebeb ;
                border-width: 0 1px 1px 0;
                box-sizing: border-box;
                &:nth-child(3n){
                    border-right: none;
                }
                img{
                    width: 100%;
                    height: 150px;
                }
                .name{
                    position: relative;
                    padding: 26px 20px 15px;
                    height: 100px;
                    h3{
                        font-size: 30px;
                    }
                    &-icon{
                        .flexWrap;
                        position: absolute;
                        bottom: 15px;
                        font-size: 24px;
                        font-size: 25px;
                        color: #00dd35;
                    }
                }
            }
        }
    }
</style>