import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Example2 from "@/components/2/Example2";
import VueRouter from "vue-router";

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  {path: '/ex2', component: Example2, meta: {title: 'Example 2: Hello World'}}
]

const router = new VueRouter({
  routes,
})
new Vue({
  store,
  render: h => h(App),
  router,
}).$mount('#app')
