import Vue from 'vue'
import Vuex from 'vuex'
import english from './translations/english'
import german from './translations/german'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nightMode : false,
    translation: english,
  },
  getters: {
    getNightMode: (state) => state.nightMode,
    getTranslation: (state) => state.translation,
  },
  mutations: {
    setNightMode(state) {
      state.nightMode = !state.nightMode
      document.querySelector('body').dataset.theme = state.nightMode ? 'dark' : 'light'
    },
    setTranslation(state, payload) {
      state.translation = payload
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
