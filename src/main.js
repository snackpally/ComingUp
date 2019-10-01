import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import datepicker from 'vuejs-datepicker'
import { store } from './store/store.js'
// import { BSpinner } from 'bootstrap-vue'

Vue.use(BootstrapVue)
// Vue.component('b-spinner', BSpinner)
Vue.component("datepicker", datepicker)
Vue.config.productionTip = false



new Vue({
	store,
	render: h => h(App)
}).$mount('#app')
