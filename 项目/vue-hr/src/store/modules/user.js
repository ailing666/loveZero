import { getToken, setToken } from '@/utils/auth'
import { login } from '@/api/user'

const state = {
  token: getToken() || ''
}

const mutations = {
  setToken(state, token) {
    state.token = token
    setToken(state.token)
  }
}

const actions = {
  async userLogin(context, formData) {
    try {
      const res = await login(formData)
      context.commit('setToken', res.data)
    } catch (err) {
      console.log('登录错误，原因是', err)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

