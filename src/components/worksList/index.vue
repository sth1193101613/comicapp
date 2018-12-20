<template>
    <ul class="class-d-name">
        <li v-for="(item,index) in list" @click="detail(item.comic_id)">
            <img :src="`https://cdn.comicool.cn/${item.comic_cover_url}?imageView2/2/w/180`" >
            <div class="name">
                <h3>{{item.comic_title}}</h3>
                <div class="name-icon">
                    <i class="cubeic-good"></i>
                    <p>{{item.content_praise_count}}</p>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "worksList",
        props:{
            list:{
                type:Array,
                detail:[]
            }
        },
        methods:{
            detail(id) {
                this.$router.push({
                    path: "/detail",
                    query: {
                        comicId: id
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>