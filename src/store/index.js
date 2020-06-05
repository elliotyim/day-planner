import Vue from "vue";
import Vuex from "vuex";
import plans from "./plans";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { plans: plans }
});
