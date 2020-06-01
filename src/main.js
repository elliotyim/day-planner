import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import vcalendar from "./plugins/vcalendar";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  vcalendar,
  render: h => h(App)
}).$mount("#app");
