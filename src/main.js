import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import vue2touchevents from "./plugins/vue2-touch";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  vue2touchevents,
  render: h => h(App)
}).$mount("#app");
