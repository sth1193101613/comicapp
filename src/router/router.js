import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/discovery'
        },
        {
            path: "/discovery",
            name: "discovery",
            meta:{
              show:true
            },
            component: resolve => require(['@/components/discovery/discovery.vue'],resolve)
        },
        {
            path: "/My",
            name: "My",
            meta:{
                show:true
            },
            component:resolve => require(['@/components/My/My.vue'],resolve)
        },
        {
            path: "/myComics",
            name: "myComics",
            meta:{
                show:true
            },
            component:resolve => require(['@/components/myComics/myComics.vue'],resolve)
        },
        {
            path: "/update",
            name: "update",
            meta:{
                show:true
            },
            component:resolve => require(['@/components/update/update.vue'],resolve)
        },
        {
            path: "/classFily",
            name: "classFily",
            meta:{
                show:false
            },
            component:resolve => require(['@/components/classFily/classFily.vue'],resolve)
        },
        {
            path: "/classificat",
            name: "classificat",
            meta:{
                show:false
            },
            component:resolve => require(['@/views/classificat/index.vue'],resolve)
        }
    ]
});
