import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state :{
		artists: '',
		loading: false
	},
	mutations: {
		change(state, artists){
			state.artists = artists
		},
		loadingStatus(state, loading){
			state.loading = loading
		}
	},
	getters: {
		artists: state => state.artists,
		loading: state => state.loading
	}
})