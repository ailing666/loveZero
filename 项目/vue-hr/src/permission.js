import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import router from './router'
import store from '@/store'
// 白名单数组
const whiteList = ['/login', '/404']
router.beforeEach(async(to, from, next) => {
  NProgress.start()
  const token = store.state.user.token
  if (token) {
    if (to.path === '/login') {
      next('/')
      NProgress.done()
    } else {
      if (!store.getters.userId) {
        await store.dispatch('user/GetUserInfo')
      }
      next()
    }
  } else {
    // 没有token，只能访问白名单
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
