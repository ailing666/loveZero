// 定义关于counter的store
import { defineStore } from 'pinia';
import useUser from './user';
const useCounter = defineStore('counter', {
  state: () => ({
    count: 99,
    id: 66,
  }),
  getters: {
    doubleCounter: state => state.count * 2,
    // 使用getters数据
    doubleDoubleCounter: function () {
      return this.doubleCounter * 2;
    },
    // 使用别的store中的getters
    getMsg: function (state) {
      const userStore = useUser();
      return `${state.id}:${userStore.getInfo}`;
    },
    // 返回函数
    isCurrentId(state) {
      return function (id) {
        return state.id === id ? 'yes' : 'no';
      };
    },
  },
});

export default useCounter;
