import store from '@/store'
import router from '@/router'
import { Message } from 'element-ui'

// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from 'axios'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API
  // baseURL: 'http://ihrm-java.itheima.net' // 设置axios请求的基础的基础地址
}) // 创建一个axios的实例

// 添加请求拦截器
service.interceptors.request.use(function(config) {
  const token = store.state.user.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(response => {
  if (response.data.success) {
    // 操作成功
    return response.data
  } else {
    // 如果success为false 业务出错,直接触发reject
    // 被catch分支捕获
    return Promise.reject(new Error(response.data.message))
  }
},
async error => {
  if (error.response.data.code === 10002) {
    await store.dispatch('user/logout')
    router.push(`/login?redirect=${encodeURIComponent(router.currentRoute.fullPath)}`)
    Message({
      message: error.response.data.message,
      type: 'error'
    })
  }
  return Promise.reject(error)
})
export default service // 导出axios实例
