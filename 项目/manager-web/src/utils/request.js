import axios from 'axios'
import config from './../config'
import { ElMessage } from 'element-plus'
import storage from './storage'

const TOKEN_INVALID = 'Token认证失败，请重新登录'
const NETWORK_ERROR = '网络请求异常，请稍后重试'

const service = axios.create({
	baseURL: config.mockApi,
	// baseURL: config.baseApi,
	timeout: 5000
})

// 请求拦截
service.interceptors.request.use((req) => {
	const headers = req.headers
	// 获取token
	const { token = '' } = storage.getItem('userInfo') || {}
	if (!headers.Authorization) headers.Authorization = 'Bearer ' + token
	return req
})

// 响应拦截
service.interceptors.response.use((res) => {
	const { code, data, msg } = res.data
	if (code === 200) {
		return data
	} else if (code === 500001) {
		ElMessage.error(TOKEN_INVALID)
		setTimeout(() => {
			router.push('/login')
		}, 1500)
		return Promise.reject(TOKEN_INVALID)
	} else {
		ElMessage.error(msg || NETWORK_ERROR)
		return Promise.reject(msg || NETWORK_ERROR)
	}
})

export default service
