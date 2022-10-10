import { defineStore } from 'pinia';

const useUser = defineStore('user', {
  state: () => ({
    name: 'loveZero',
    age: 18,
    recommends:[]
  }),
  getters: {
    getInfo: state => `${state.name}${state.age}岁`,
  },
  actions: {
    async fetchHomeMultidata() {
      const res = await fetch('http://123.207.32.32:8000/home/multidata');
      const data = await res.json();

      this.recommends = data.data.recommend.list;
    },
  },
});

export default useUser;
