const state = {
  isCarsWarp: true,
  routerName: ''
}
const mutations = {
  // selfLocation取反
  SET_IS_CARS_WARP (state, flag) {
    state.isCarsWarp = flag
  },

  // 储存路由名称
  SET_ROUTER_NAME (state, title) {
    state.routerName = title
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
