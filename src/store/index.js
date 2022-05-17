import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    logged: false,
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

export default store