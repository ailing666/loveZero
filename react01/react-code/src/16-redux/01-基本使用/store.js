const { createStore } = require("redux")
const reducer = require("./reducer.js")
const { addNumberAction, changeNameAction } = require("./actionCreators")

// 创建的store
const store = createStore(reducer)
// 使用store中的数据
const unsubscribe = store.subscribe(() => {
  console.log("订阅数据的变化:", store.getState())
})
store.dispatch(addNumberAction(10))
store.dispatch(addNumberAction(100))
store.dispatch(changeNameAction('666'))
store.dispatch(changeNameAction('777'))

unsubscribe()
module.exports = store

// $ node store.js 
// 订阅数据的变化: { name: 'lovezero', counter: 110 }
// 订阅数据的变化: { name: 'lovezero', counter: 210 }
// 订阅数据的变化: { name: '666', counter: 210 }
// 订阅数据的变化: { name: '777', counter: 210 }
