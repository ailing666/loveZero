import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import router from './router'
import store from '@/store'

// 白名单数组
const whiteList = ['/login', '/404']
router.beforeEach((to, from, next) => {
  NProgress.start()
  const token = store.state.user.token
  if (token) {
    if (to.path === '/login') {
      next('/')
      NProgress.done()
    } else {
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
  console.log(token, '路由跳转', from.path, '----->', to.path)
})

router.afterEach(() => {
  NProgress.done()
})
