import request from '../utils/request'

// 登录
export const login = (data) => {
	return request({
		url: '/users/login',
		method: 'POST',
		data,
		// 是否开启mock
		mock: false
	})
}
