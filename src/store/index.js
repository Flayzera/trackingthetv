import { createStore } from 'vuex'

export default createStore({
  state: {
    logged: false
  },
  getters: {
    getLogged(state){
      return state.logged
    }
  },
  mutations: {
    invertLogged(state){
      state.logged = !state.logged
    }
  },
  actions: {
    invertLogged(context){
      context.commit('invertLogged')
    }
  },
})
