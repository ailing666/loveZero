const home = {
  namespaced: true,
  state: () => ({
    banners: [],
  }),
  mutations: {
    changeBanners(state, banners) {
      state.banners = banners;
    },
  },
  actions: {
    fetchHomeMultidataAction(context) {
      return new Promise(async (resolve, reject) => {
        const res = await fetch('http://123.207.32.32:8000/home/multidata');
        const data = await res.json();

        context.commit('changeBanners', data.data.banner.list);

        resolve('ok');
      });
    },
  },
};
export default home