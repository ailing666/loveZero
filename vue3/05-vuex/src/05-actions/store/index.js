import { createStore } from 'vuex';

const store = createStore({
  state: () => ({
    counter: 100,
    name: 'loveZero',
  }),
  mutations: {
    increment(state) {
      state.counter++;
    },
    changeName(state, payload) {
      state.name = payload;
    },
  },
  actions: {
    incrementAction(context) {
      // console.log(context.commit) // 用于提交mutation
      // console.log(context.getters) // getters
      // console.log(context.state) // state
      context.commit('increment');
    },
    changeNameAction(context, payload) {
      context.commit('changeName', payload);
    },
    fetchHomeMultidataAction(context) {
      return new Promise(async (resolve, reject) => {
        const res = await fetch('http://123.207.32.32:8000/home/multidata');
        const data = await res.json();
        context.commit('name', data.data.name);
        resolve('回调');
      });
    },
  },
});

export default store;
