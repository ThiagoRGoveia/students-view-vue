import Vue from "vue";
import Buefy from "buefy";
import App from "./App.vue";
import router from "./router";
import "buefy/dist/buefy.css";

import "./assets/main.css";
import thanosClient from "./clients/thanos.client";

Vue.use(Buefy);

Vue.prototype.$thanosClient = thanosClient;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
