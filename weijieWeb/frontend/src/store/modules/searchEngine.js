// const defaultSearchEngine = 'baidu'
// const defaultSCName = '添加链接'
// const defaultIconUrl = '../../assets/img/searchEngineIcon/add.svg'
import {defaultSearchEngine,defaultSCName,defaultIconUrl} from '../../api/searchEngineApi'
// initial state
const defaultSc = {
  'name':defaultSCName,
  'link':defaultIconUrl
}
const state = () => ({
  currentSearchEngine: defaultSearchEngine,
  searchContent: '',
  disableAllShorcut: true,
  showDialogue:false,
  scs:[defaultSc,]
})

// getters
const getters = {
  //searchEngine不需要别的modules
  // cartProducts: (state, getters, rootState) => {
  //   return state.items.map(({ id, quantity }) => {
  //     const product = rootState.products.all.find(product => product.id === id)
  //     return {
  //       title: product.title,
  //       price: product.price,
  //       quantity
  //     }
  //   })
  // },

  // cartTotalPrice: (state, getters) => {
  //   return getters.cartProducts.reduce((total, product) => {
  //     return total + product.price * product.quantity
  //   }, 0)
  // }
}

// actions
const actions = {
  createSc({ commit, state },sc){
    debugger
    commit('unshiftScs',sc)
  },
  changeNameSC ({ commit, state },name){
    commit('setNameSC',name)
  },
  changeIconUrl ({ commit, state },iconUrl){
    commit('setIconUrl',iconUrl)
  }
}

// mutations
const mutations = {
  unshiftScs(state,sc){
    state.scs.unshift(sc)
  },
  setCurrentSearchEngine(state,searchEngine){
    state.currentSearchEngine = searchEngine
  },
  setNameSC(state,name){
    state.defaultNameWeb = name
  },
  setIconUrl(state,iconUrl){
    state.defaultIconUrl = iconUrl
  }
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
