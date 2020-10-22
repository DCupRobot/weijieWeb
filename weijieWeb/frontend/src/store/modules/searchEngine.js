import { createStore } from 'vuex'


// initial state
const state = () => ({
  currentSearchEngine: 'baidu',
  searchContent: '',
  disableShorcut: true,
  showDialogue:false,
})

// getters
const getters = {}

// actions
const actions = {
}

// mutations
const mutations = {
}

export default createStore({
  state,
  getters,
  actions,
  mutations
})