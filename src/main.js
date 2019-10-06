import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import router from './routes'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import datepicker from 'vuejs-datepicker'
import { store } from './store/store.js'


Vue.use(BootstrapVue)
Vue.use(vueRouter)
Vue.component("datepicker", datepicker)
Vue.config.productionTip = false



new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app')
