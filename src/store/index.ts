import { createStore } from 'vuex'

export default createStore({
  state: {
    registered: false,
    credentials: null,
    class: null,
    data: null
  },
  mutations: {
    setCredentials(state, to) {
      state.credentials = to
    },
    setClass(state, to) {
      state.class = to
    },
    setRegistered(state, to) {
      state.registered = to
    },
    setData(state, to) {
      state.data = to
    }
  },
  getters: {
    getCredentials(state) {
      return state.credentials
    },
    isRegistered(state) {
      return state.registered
    },
    getClass(state) {
      return state.class
    },
    getData(state) {
      return state.data
    }
  },
  actions: {
  },
  modules: {
  }
})
