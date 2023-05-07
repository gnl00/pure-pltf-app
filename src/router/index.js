import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard/Dashboard.vue";
import SysInfo from "../views/SysInfo/SysInfo.vue";

const routes = [
	{
		path: '/',
		component: Dashboard,
	},
	{
		path: '/sysInfo',
		component: SysInfo,
	}
]

const router = createRouter({
	routes,
	history: createWebHistory()
})

export default router