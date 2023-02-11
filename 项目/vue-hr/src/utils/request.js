// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from 'axios'
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API
  baseURL: 'http://ihrm-java.itheima.net' // 设置axios请求的基础的基础地址
}) // 创建一个axios的实例

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
}, error => {
  return Promise.reject(error) // 返回执行错误 让当前的执行链跳出成功 直接进入 catch
})
export default service // 导出axios实例
