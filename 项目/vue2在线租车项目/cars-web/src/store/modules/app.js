const state = {
  isCarsWarp: true
}
const mutations = {
  // selfLocation取反
  SET_IS_CARS_WARP (state, flag) {
    state.isCarsWarp = flag
    console.log('state.isCarsWarp: ', state.isCarsWarp)
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
