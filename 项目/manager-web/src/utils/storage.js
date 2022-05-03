import config from './../config'
export default {
	// 设置
	setItem(key, val) {
		let storage = this.getStroage()
		storage[key] = val
		window.localStorage.setItem(config.namespace, JSON.stringify(storage))
	},
	// 取值
	getItem(key) {
		return this.getStroage()[key]
	},
	getStroage() {
		return JSON.parse(window.localStorage.getItem(config.namespace) || '{}')
	},
	// 清除
	clearItem(key) {
		let storage = this.getStroage()
		delete storage[key]
		window.localStorage.setItem(config.namespace, JSON.stringify(storage))
	},
	// 清空所有
	clearAll() {
		window.localStorage.clear()
	}
}
