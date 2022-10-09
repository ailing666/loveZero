import { createStore } from 'vuex'
const store = createStore({
  state: () => ({
    name:'loveZero',
    counter: 100,
  }),
})
export default store