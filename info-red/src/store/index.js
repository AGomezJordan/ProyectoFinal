import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    back: false,
    admin: false
  },
  mutations: {
    setBack(state, payload){
      state.back = payload
    },
    setAdmin(state, payload){
      state.admin = payload
    }
  },
  actions: {

  },
  modules: {
  }
})
