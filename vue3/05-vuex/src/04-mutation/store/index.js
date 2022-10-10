import { createStore } from 'vuex';
const store = createStore({
  state: () => ({
    name: 'loveZero',
    counter: 100,
  }),
  getters: {
    doubleCounter(state) {
      return state.counter * 2;
    },
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    changeName(state, payload) {
      state.name = payload;
    },
    // 方法名常量
    CHANGE_INFO(state, newInfo) {
      console.log(newInfo);
      state.counter = newInfo.counter;
      state.name = newInfo.name;
    },
  },
});
export default store;
