import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
	{
		name: 'home',
		path: '/',
		meta: {
			title: '首页'
		},
		component: () => import('../views/Home.vue'),
		redirect: '/welcome',
		children: [
			{
				name: 'welcome',
				path: '/welcome',
				meta: {
					title: '欢迎体验Vue3全栈课程'
				},
				component: () => import('../views/Welcome.vue')
			}
		]
	}
]
const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
