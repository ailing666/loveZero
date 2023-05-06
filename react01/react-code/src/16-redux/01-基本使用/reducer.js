const { ADD_NUMBER, CHANGE_NAME } = require("./constants")

// 初始化的数据
const initialState = {
  name: "lovezero",
  counter: 100
}

function reducer(state = initialState, action) {
  // 通过不同的 action 拆分为多个
  switch(action.type) {
    case CHANGE_NAME:
      // 需要是纯函数不能修改原值
      return { ...state, name: action.name }
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num }
    default:
      return state
  }
}

module.exports = reducer
