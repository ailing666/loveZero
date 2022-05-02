import { Register, Login, Forget } from '@/api/account'
import { setToken, setUsername, getToken, getUsername, removeToken, removeUsername } from '@/utils/accountCookies'

const state = {
  token: '' || getToken(),
  username: '' || getUsername()
}
const mutations = {
  SET_TOKEN(state, val) {
    state.token = val
  },

  SET_USERNAME(state, val) {
    state.username = val
  }
}
const actions = {
  // 用户注册
  registerAction(context, requestData) {
    return new Promise((resolve, reject) => {
      Register(requestData)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  // 用户登录
  loginAction(context, requestData) {
    return new Promise((resolve, reject) => {
      Login(requestData)
        .then((res) => {
          resolve(res)
          context.commit('SET_TOKEN', res.data.token)
          context.commit('SET_USERNAME', res.data.username)
          setToken(res.data.token)
          setUsername(res.data.username)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  // 用户登出
  logoutAction(context, requestData) {
    return new Promise((resolve, reject) => {
      context.commit('SET_TOKEN', '')
      context.commit('SET_USERNAME', '')
      removeToken()
      removeUsername()
      resolve()
    })
  },
  // 忘记密码
  forgetAction(context, requestData) {
    return new Promise((resolve, reject) => {
      Forget(requestData)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
