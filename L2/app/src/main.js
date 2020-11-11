import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from "vue-router";
import Ex1 from "./components/1/Ex1";
import GlobalComponent from "./components/1/GlobalComponent";
import Ex2 from "./components/2/Ex2";

import 'bootstrap/scss/bootstrap.scss';
import Ex3 from "./components/3/Ex3";
import Ex4 from "./components/4/Ex4";
import Ex5 from "./components/5/Ex5";
import Ex6 from "./components/6/Ex6";
import Ex7 from "./components/7/Ex7";

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  {path: '/ex1', component: Ex1, meta: {title: 'Example 1: Creating components'}},
  {path: '/ex2', component: Ex2, meta: {title: 'Example 2: Props'}},
  {path: '/ex3', component: Ex3, meta: {title: 'Example 3: Events emitting'}},
  {path: '/ex4', component: Ex4, meta: {title: 'Example 4: Refs'}},
  {path: '/ex5', component: Ex5, meta: {title: 'Example 5: Slots'}},
  {path: '/ex6', component: Ex6, meta: {title: 'Example 6: Async components'}},
  {path: '/ex7', component: Ex7, meta: {title: 'Example 7: Transitions'}},
]

const router = new VueRouter({
  routes,
})

Vue.component('GlobalComponent', GlobalComponent);

new Vue({
  store,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
