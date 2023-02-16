import { getToken, setToken } from '@/utils/auth'
import { login, getUserInfo } from '@/api/user'
import router from '@/router'

const state = {
  token: getToken() || '',
  userInfo: null
}

const mutations = {
  setUserToken(state, token) {
    state.token = token
    setToken(state.token)
  },
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo
    setToken(state.userInfo)
  }
}

const actions = {
  async UserLogin(context, formData) {
    try {
      const res = await login(formData)
      context.commit('setUserToken', res.data)
      // 登录成功，路由跳转
      router.push(router.currentRoute.redirect || '/')
    } catch (err) {
      console.log('登录错误，原因是', err)
    }
  },
  async GetUserInfo(context) {
    console.log('GetUserInfo: ')
    const res = await getUserInfo()
    context.commit('setUserInfo', res.data)
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

