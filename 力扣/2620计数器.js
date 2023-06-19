// https://leetcode.cn/problems/counter/

var createCounter = function (n) {
	return function () {
		return n++
	}
}

const counter = createCounter(-2)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12
