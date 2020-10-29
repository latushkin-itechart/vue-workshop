import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Example2 from "@/components/2/Example2";
import VueRouter from "vue-router";
import Example3_1 from "@/components/3/Example3_1";
import Example3_2 from "@/components/3/Example3_2";
import Example3_3 from "@/components/3/Example3_3";
import Example3_3_1 from "@/components/3/Example3_3_1";
import Example3_4 from "@/components/3/Example3_4";
import Example3_5 from "@/components/3/Example3_5";
import Example4_1 from "@/components/4/Example4_1";
import Example4_2 from "@/components/4/Example4_2";
import Example5_1 from "@/components/5/Example5_1";
import Example6_1 from "@/components/6/Example6_1";
import Example6_2 from "@/components/6/Example6_2";
import Example7_1 from "@/components/7/Example7_1";
import Example7_2 from "@/components/7/Example7_2";
import Example8_1 from "@/components/8/Example8_1";
import Example9_1 from "@/components/9/Example9_1";
import Example10_1 from "@/components/10/Example10_1";

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  {path: '/ex2', component: Example2, meta: {title: 'Example 2: Hello World'}},
  {path: '/ex3.1', component: Example3_1, meta: {title: 'Example 3.1: Component state description'}},
  {path: '/ex3.2', component: Example3_2, meta: {title: 'Example 3.2: State access and reactivity'}},
  {path: '/ex3.3', component: Example3_3, meta: {title: 'Example 3.3: State structure on-the-go amendment'}},
  {
    path: '/ex3.3.1',
    component: Example3_3_1,
    meta: {title: 'Example 3.3.1: State structure on-the-go amendment (correct)'}
  },
  {path: '/ex3.4', component: Example3_4, meta: {title: 'Example 3.4: Text and HTML rendering'}},
  {path: '/ex3.5', component: Example3_5, meta: {title: 'Example 3.5: Attributes rendering'}},
  {path: '/ex4.1', component: Example4_1, meta: {title: 'Example 4.1: Instance methods'}},
  {path: '/ex4.2', component: Example4_2, meta: {title: 'Example 4.2: Events handling'}},
  {path: '/ex5.1', component: Example5_1, meta: {title: 'Example 5: Filters'}},
  {path: '/ex6.1', component: Example6_1, meta: {title: 'Example 6.1: Conditional rendering'}},
  {path: '/ex6.2', component: Example6_2, meta: {title: 'Example 6.2: List rendering'}},
  {path: '/ex7.1', component: Example7_1, meta: {title: 'Example 7.1: Styles binding'}},
  {path: '/ex7.2', component: Example7_2, meta: {title: 'Example 7.2: Classes binding'}},
  {path: '/ex8.1', component: Example8_1, meta: {title: 'Example 8.1: V-model'}},
  {path: '/ex9.1', component: Example9_1, meta: {title: 'Example 9.1: Computed properties'}},
  {path: '/ex10.1', component: Example10_1, meta: {title: 'Example 10.1: Watchers'}},
]

const router = new VueRouter({
  routes,
})
new Vue({
  store,
  render: h => h(App),
  router,
}).$mount('#app')
