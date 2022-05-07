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

function request(options) {
	// 默认 method 是get
	options.method = options.method || 'get'

	// 如果传入的method是get，则请求参数设置为params
	if (options.method.toLowerCase() === 'get') {
		options.params = options.data
	}

	// 是否开启mock，默认为配置中的mock，如果传入了mock，就用传入的mock覆盖配置中的mock
	let isMock = config.mock
	if (typeof options.mock !== 'undefined') {
		isMock = options.mock
	}

	// 如果是生产环境，baseURL一定要设为baseApi
	if (config.env === 'prod') {
		service.defaults.baseURL = config.baseApi
	} else {
		// 非生产环境，baseURL根据是否开启mock来决定
		service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
	}

	return service(options)
}

const methodList = ['get', 'post', 'put', 'delete', 'patch']
methodList.forEach((item) => {
	request[item] = (url, data, options) => {
		return request({
			url,
			data,
			method: item,
			...options
		})
	}
})
export default request
