import { createStore } from 'vuex';
const store = createStore({
  state: () => ({
    name: 'loveZero',
    counter: 100,
    list: [
      { id: 111, title: 'hello111' },
      { id: 222, title: 'hello222' },
      { id: 333, title: 'hello333' },
    ],
  }),
  getters: {
    // 基本使用
    doubleCounter(state) {
      return state.counter * 2;
    },
    // 使用已有的getter
    message(state, getters) {
      return `name:${state.name} counter:${getters.doubleCounter}`;
    },
    // getter接受参数
    getListById(state) {
      return function (id) {
        return state.list.find(item => item.id === id);
      };
    },
  },
});
export default store;
