const { createStore } = require("redux")
const reducer = require("./reducer.js")
const { ADD_NUMBER, CHANGE_NAME } = require("./constants")

// 创建的store
const store = createStore(reducer)
// 使用store中的数据
console.log(store.getState())

// 修改store中的数据: 必须action
const nameAction = { type: CHANGE_NAME, name: "6666" }
store.dispatch(nameAction)

console.log(store.getState())

const nameAction2 = { type: CHANGE_NAME, name: "7777" }
store.dispatch(nameAction2)
console.log(store.getState())

// 修改counter
const counterAction = { type: ADD_NUMBER, num: 10 }
store.dispatch(counterAction)
console.log(store.getState())

module.exports = store

