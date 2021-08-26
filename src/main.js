import Vue from "vue";
import App from "./App.vue";
import "./plugins/fontawesome";
import "./assets/css/style.css";
import store from "@/config/store";

Vue.config.productionTip = false;

store.dispatch("initEnglish");

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
