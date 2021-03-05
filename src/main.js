import Vue from "vue";
import { isVue2, isVue3 } from "vue-demi";
import App from "./app.vue";

console.log("isVue2", isVue2);

console.log("isVue3", isVue3);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
