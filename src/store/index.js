import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nightMode : false
  },
  getters: {
    getNightMode: (state) => state.nightMode
  },
  mutations: {
    setNightMode(state) {
      state.nightMode = !state.nightMode
      document.querySelector('body').dataset.theme = state.nightMode ? 'dark' : 'light'
    }
  },
  actions: {
    setNightMode({ commit }) {
      commit('setNightMode')
    }
  },
  modules: {
  },
})
