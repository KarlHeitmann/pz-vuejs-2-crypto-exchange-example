import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css" //@ es algo que entrega webpack y vue para hacer referencia de manera relativa al directorio source :D

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
