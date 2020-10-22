// initial state
const state = () => ({
  currentSearchEngine: 'baidu',
  searchContent: '',
  disableShorcut: true,
  showDialogue:false,
  defaultNameWeb : '添加链接',
  defaultIconUrl : '../../assets/img/searchEngineIcon/add.svg',
})

// getters
const getters = {}

// actions
const actions = {
  changeNameSC ({ commit, state },name){
    commit('setNameSC',name)
  }
}

// mutations
const mutations = {
  setNameSC(state,name){
    state.defaultNameWeb = name
  }
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
