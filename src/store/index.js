import vue from "vue";
import vuex from "vuex";
import state from "./state.js";
import mutations from "./mutations.js";
import actions from "./action.js";

vue.use(vuex);

export default new vuex.Store({
  state,
  mutations,
  actions
});
