import { createStore } from 'vuex'

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null
  },
  mutations: {
  setUser(state, user) {
    state.user = user
  },
  clearUser(state) {
    state.user = null
  }
},
actions: {
  user({ commit }, user) {
    commit('setUser', user)
  },
  logout({ commit }) {
    commit('clearUser')
  }
}
})