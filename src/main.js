import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
import Cube from "./cube-ui";
import VueLazyload from 'vue-lazyload'
import "./registerServiceWorker";
import "./assets/css/main.css";
import "lib-flexible";
import "font-awesome/css/font-awesome.css";
import "css-ripple-effect";

Vue.config.productionTip = false;
Vue.use(VueLazyload, {
    preLoad: 1.3,
    loading: '../assets/images/loading.gif',
    attempt: 1
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

