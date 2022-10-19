import { getHomeHotSuggests, getHomeCategories, getHomeHouselist } from '@/services';
import { defineStore } from 'pinia';

const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: [],
    currentPage: 1,
    categories: [],
    houselist: [],
  }),
  actions: {
    async fetchHotSuggestData() {
      const res = await getHomeHotSuggests();
      this.hotSuggests = res.data;
    },
    async fetchCategoriesData() {
      const res = await getHomeCategories();
      this.categories = res.data;
    },
    async fetchHouselistData() {
      const res = await getHomeHouselist(this.currentPage);
      this.houselist = res.data;
      this.currentPage++;
    },
  },
});

export default useHomeStore;
