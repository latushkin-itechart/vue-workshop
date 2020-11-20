import Vue from 'vue';
import VueRouter from 'vue-router';
import Lesson1 from '@/views/Lesson1.vue';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/l1',
		name: 'l1',
		component: Lesson1,
	},
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '',
		redirectTo: '/',
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
