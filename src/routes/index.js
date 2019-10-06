import Vue from 'vue'
import Router from 'vue-router'
import Search from "@/components/search-event.vue"
import Events from "@/components/event-list.vue"
import Landing from "@/components/landing.vue"

Vue.use(Router);

export default new Router({
	mode:'history',
	routes: [
	{
		path: "/",
		name: "Welcome",
		component: Landing
	},
	{
		path: "/search",
		name: "Search",
		component: Search
	},
	{
		path: "/events",
		name: "Events",
		component: Events
	}
	]
})