import { createStore } from 'vuex'
import homeModule from './modules/home'
import counterModule from './modules/counter'

const store = createStore({
  state: () => ({
    rootCounter: 100,
  }),
  modules: {
    home: homeModule,
    counter: counterModule
  }
})

export default store
