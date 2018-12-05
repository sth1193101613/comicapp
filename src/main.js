import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import Cube from './cube-ui'

import "./registerServiceWorker";
import "./assets/css/main.css"
import 'lib-flexible'



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
