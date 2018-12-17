import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const Routers = new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            redirect: "/discovery"
        },
        {
            path: "/discovery",
            name: "discovery",
            meta:{
              show:true,
              title:'首页'
            },
            component: resolve =>
                require(["@/components/discovery/discovery.vue"], resolve)
        },
        {
            path: "/My",
            name: "My",
            meta: {
                show: true
            },
            component: resolve => require(["@/components/My/My.vue"], resolve)
        },
        {
            path: "/myComics",
            name: "myComics",
            meta: {
                show: true
            },
            component: resolve =>
                require(["@/components/myComics/myComics.vue"], resolve)
        },
        {
            path: "/update",
            name: "update",
            meta: {
                show: true
            },
            component: resolve => require(["@/components/update/update.vue"], resolve)
        },
        {
            path: "/detail",
            name: "detail",
            meta: {
                show: false
            },
            component: resolve => require(["@/components/detail/detail.vue"], resolve)
        },
        {
            path: "/classificat",
            name: "classificat",
            meta:{
                show:false,
                title:'分类'
            },
            component: resolve => require(["@/views/classificat/index.vue"], resolve)
        },
        {
            path: "/rank",
            name: "rank",
            meta:{
                show:false,
                title:'排行'
            },
            component: resolve => require(["@/views/rank/index.vue"], resolve)
        },
        {
            path: "/newaction",
            name: "newaction",
            meta: {
                show: false
            },
            component: resolve => require(["@/components/newaction/newaction.vue"], resolve)
        }
    ]
});

Routers.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
})

export default Routers;