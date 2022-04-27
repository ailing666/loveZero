import Vue from "vue"
import VueRouter from "vue-router"
import store from "../store"
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("@/views/index"),
    children: [
      {
        path: "/user",
        name: "User",
        meta: {
          title: "用户中心"
        },
        component: () => import("@/views/user"),
      },
      {
        path: "/login",
        name: "Login",
        meta: {
          title: "登录"
        },
        component: () => import("../views/account/login")
      },
      // 注册
      {
        path: "/register",
        name: "Register",
        meta: {
          title: "注册"
        },
        component: () => import("../views/account/register")
      },
      // 忘记密码
      {
        path: "/forget",
        name: "Forget",
        meta: {
          title: "忘记密码"
        },
        component: () => import("../views/account/forget")
      },
      // 安全
      {
        path: "/safe",
        name: "Safe",
        meta: {
          title: "安全中心"
        },
        component: () => import("@/views/safe"),
      },
      {
        path: "/bankCard",
        name: "BankCard",
        meta: {
          title: "绑定银行卡"
        },
        component: () => import("@/views/safe/BankCard.vue"),
      },
      {
        path: "/addPhone",
        name: "AddPhone",
        meta: {
          title: "绑定手机号"
        },
        component: () => import("@/views/safe/AddPhone.vue"),
      },
      {
        path: "/setPassword",
        name: "SetPassword",
        meta: {
          title: "设置资金密码"
        },
        component: () => import("@/views/safe/SetPassword.vue"),
      },
      {
        path: "/changePassword",
        name: "ChangePassword",
        meta: {
          title: "修改登录密码"
        },
        component: () => import("@/views/safe/ChangePassword.vue"),
      }

    ]
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})


// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    const title = to.meta.title
    document.title = title
    store.commit('app/SET_ROUTER_NAME', title)
  }
  next()
})
export default router
