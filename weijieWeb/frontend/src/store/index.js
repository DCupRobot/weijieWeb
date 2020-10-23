import { createStore } from 'vuex'
import searchEngine from './modules/searchEngine'

export default createStore({
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    searchEngine,
  }
})
