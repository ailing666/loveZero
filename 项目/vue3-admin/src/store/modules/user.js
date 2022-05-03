import { login } from '../../api/sys.js'
import md5 from 'md5'
export default {
	// 开启命名空间
	namespaced: true,
	state: {},
	mutations: {},
	actions: {
		Login(context, userInfo) {
			const { username, password } = userInfo
			return new Promise((resolve, reject) => {
				login({
					username,
					password: md5(password)
				})
					.then(() => {
						resolve()
					})
					.catch((err) => {
						reject(err)
					})
			})
		}
	}
}
