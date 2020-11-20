import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/scss/bootstrap.scss';
import vuetifyConfig from "../../vuetifyConfig";
import VueI18n  from 'vue-i18n';
import en from './i18n/en.json';
import ru from './i18n/ru.json';

Vue.use(VueI18n);

const i18n = new VueI18n({
  messages: {
    en,
    ru
  },
  locale: 'en',
  fallbackLocale: 'en',
})

new Vue({
  vuetify: vuetifyConfig,
  i18n,
  render: function (h) { return h(App) }
}).$mount('#app')