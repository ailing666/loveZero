import Vue from 'vue'
import Vuex from 'vuex'
import location from './modules/location'
import app from './modules/app'
import account from './modules/account'
import config from './modules/config'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { location, app, account, config }
})
