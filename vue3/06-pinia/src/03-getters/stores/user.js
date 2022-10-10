import { defineStore } from 'pinia';

const useUser = defineStore('user', {
  state: () => ({
    name: 'loveZero',
    age: 18,
  }),
  getters: {
    getInfo: state => `${state.name}${state.age}岁`,
  },
});

export default useUser;
