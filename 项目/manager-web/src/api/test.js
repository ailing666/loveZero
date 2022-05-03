import request from '../utils/request'

// 登录
export const test = (data) => {
	return request({
		url: '/test',
		method: 'GET',
		data
	})
}
