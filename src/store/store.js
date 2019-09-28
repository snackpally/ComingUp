import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state :{
		artists: ''
	},
	mutations: {
		change(state, artists){
			state.artists = artists
		}
	},
	getters: {
		artists: state => state.artists
	}
})