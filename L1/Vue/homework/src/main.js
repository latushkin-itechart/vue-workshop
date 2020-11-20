import Vue from 'vue';
import axios from './api';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/bootstrap.min.css';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	axios,
	render: (h) => h(App),
}).$mount('#app');
