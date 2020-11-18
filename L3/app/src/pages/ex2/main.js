import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/scss/bootstrap.scss';
import vuetifyConfig from "../../vuetifyConfig";
import Vuex from 'vuex';
import store from './store/index';

Vue.use(Vuex);


new Vue({
  vuetify: vuetifyConfig,
  store:  new Vuex.Store(store),
  render: function (h) { return h(App) }
}).$mount('#app')