import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/scss/bootstrap.scss';
import bus from "./include/bus";
import vuetifyConfig from "../../vuetifyConfig";

Vue.prototype.$bus = bus;

new Vue({
  vuetify: vuetifyConfig,
  render: function (h) { return h(App) }
}).$mount('#app')