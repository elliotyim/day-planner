import Vue from "vue";
import Vuex from "vuex";
import calendar from "./calendar";
import todos from "./todos";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { calendar, todos }
});
