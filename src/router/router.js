import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "discovery",
            component: resolve => require(['@/components/discovery/discovery.vue'],resolve)
        },
        {
            path: "/My",
            name: "My",
            component:resolve => require(['@/components/My/My.vue'],resolve)
        },
        {
            path: "/myComics",
            name: "myComics",
            component:resolve => require(['@/components/myComics/myComics.vue'],resolve)
        },
        {
            path: "/update",
            name: "update",
            component:resolve => require(['@/components/update/update.vue'],resolve)
        }
    ]
});
