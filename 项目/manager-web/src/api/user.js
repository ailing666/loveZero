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

// 通知数量
export const noticeCount = (data) => {
	return request({
		url: '/leave/count',
		method: 'GET',
		data,
		// 是否开启mock
		mock: true
	})
}
