import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken, removeToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/404'] // no redirect whitelist
// 路由守卫
router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()
  // 有token
  if (hasToken) {
    // 有token去登录
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      // 有token去的不是登录
      const hasGetUserInfo = store.state.user.userInfo
      console.log('hasGetUserInfo: ', hasGetUserInfo)
      // 有用户信息，直接去
      if (hasGetUserInfo) {
        next()
      } else {
        // 没有用户信息去获取
        try {
          // 获取成功
          await store.dispatch('user/GetUserInfo')
          next()
        } catch (error) {
          Message.error('登录失败')
          // 获取失败，remove token跳转到login
          removeToken()
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    // 没有token判断去的是不是白名单
    if (whiteList.indexOf(to.path) !== -1) {
      // 是白名单直接去
      next()
    } else {
      // 不是白名单跳转到login
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
