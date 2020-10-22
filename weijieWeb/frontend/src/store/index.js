import { createStore } from 'vuex'
import searchEngine from './modules/searchEngine'

export default createStore({
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (state) {
      state.count++
    }
  },
  modules: {
    searchEngine,
  }
})
