import Vue from 'vue'
import Vuex from 'vuex'
import english from './translations/english'
import german from './translations/german'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nightMode : false,
    translation: english,
    language: 'EN',
  },
  getters: {
    getNightMode: (state) => state.nightMode,
    getTranslation: (state) => state.translation,
    getLanguage: (state) => state.language,
  },
  mutations: {
    setNightMode(state) {
      state.nightMode = !state.nightMode
      document.querySelector('body').dataset.theme = state.nightMode ? 'dark' : 'light'
    },
    setTranslation(state, payload) {
      if(payload === 'DE') {
        state.language = 'DE'
        state.translation = german
      }
      else {
        state.language = 'EN'
        state.translation = english
      }
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
