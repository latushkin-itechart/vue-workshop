import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/scss/bootstrap.scss';
import vuetifyConfig from "../../vuetifyConfig";


new Vue({
  vuetify: vuetifyConfig,
  render: function (h) { return h(App) }
}).$mount('#app')