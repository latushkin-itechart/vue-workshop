import Vue from 'vue'
import App from './App.vue'
import store from './store'

import VueRouter from 'vue-router'
import vuetify from "./include/vuetify";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Users from "./components/pages/Users";
import UserCard from "./components/pages/UserCard";
import spyPlugin from "./include/spyPlugin";
import ContactUs from "./components/pages/ContactUs";
import DynamicInfo from "./components/pages/DynamicInfo";

Vue.config.productionTip = false;

Vue.use(VueRouter)
const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About},
  {path: '/users', component: Users},
  {path: '/users/:id', component: UserCard},
  {path: '/contact', component: ContactUs},
  {path: '/additional', component: DynamicInfo}

]
const router = new VueRouter({
  routes,
  // mode: 'history',
})

Vue.use(spyPlugin);

new Vue({
  store,
  vuetify,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
