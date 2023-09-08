import Vue from "vue";
import Vuex from "vuex";
import actions from "./store/actions";
// import getters from "./store/getters";
import mutations from "./store/mutations";
import createPersistedState from "vuex-persistedstate";
import initState from "./store/initState";

Vue.use(Vuex);
const plugins = [createPersistedState({ key: "Example Test" })];

export default new Vuex.Store({
  state: initState(),
  mutations,
  actions,
  plugins,
});
