const counter = {
  namespaced: true,
  state: () => ({
    count: 99
  }),
  mutations: {
    incrementCount(state) {
      state.count++
    }
  },
  getters: {
    doubleCount(state, getters, rootState) {
      // rootState 根组件state
      return state.count + rootState.rootCounter
    }
  },
  actions: {
    incrementCountAction(context) {
      context.commit("incrementCount")
    }
  }
}

export default counter
