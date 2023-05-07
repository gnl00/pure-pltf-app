import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard/Dashboard.vue";

const routes = [
	{
		path: '/',
		component: Dashboard,
	}
]

const router = createRouter({
	routes,
	history: createWebHistory()
})

export default router