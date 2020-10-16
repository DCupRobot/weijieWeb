import { createStore } from 'vuex'
import searchEngine from './modules/searchEngine'
export default createStore({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
  },
  modules: {
    searchEngine
  }
})
