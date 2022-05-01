import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: 'Login',
    hidden: true
  },
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: () => import('../views/Login/index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '控制台',
      icon: 'console',
      iconClass: 'icon_console'
    },
    component: Layout,
    children: [
      {
        path: '/consoleIndex',
        name: 'ConsoleIndex',
        meta: {
          title: '首页'
        },
        component: () => import('../views/Console/index.vue')
      }
    ]
  },
  // 停车场
  {
    path: '/parking',
    name: 'Parking',
    meta: {
      title: '停车场',
      icon: 'console',
      iconClass: 'icon_console'
    },
    component: Layout,
    children: [
      {
        path: '/parkingIndex',
        name: 'ParkingIndex',
        meta: {
          title: '列表管理'
        },
        component: () => import('../views/Parking/index.vue')
      },
      {
        path: '/parkingAdd',
        name: 'ParkingAdd',
        meta: {
          title: '新增停车场'
        },
        component: () => import('../views/Parking/ParkingAdd.vue')
      }
    ]
  },
  // 车辆品牌
  {
    path: '/carsBrand',
    name: 'CarsBrand',
    meta: {
      title: '车辆品牌',
      icon: 'console',
      iconClass: 'icon_console'
    },
    component: Layout,
    children: [
      {
        path: '/carsBrandIndex',
        name: 'CarsBrandIndex',
        meta: {
          title: '品牌列表'
        },
        component: () => import('../views/CarsBrand')
      }
    ]
  },
  // 车辆管理
  {
    path: '/cars',
    name: 'cars',
    meta: {
      title: '车辆管理',
      icon: 'console',
      iconClass: 'icon_console'
    },
    component: Layout,
    children: [
      {
        path: '/carsIndex',
        name: 'CarsIndex',
        meta: {
          title: '车辆列表'
        },
        component: () => import('../views/Cars/index.vue')
      },
      {
        path: '/carsAdd',
        name: 'CarsAdd',
        meta: {
          title: '新增车辆'
        },
        component: () => import('../views/Cars/CarsAdd.vue')
      },
      {
        path: '/carsAttrList',
        name: 'CarsAttrList',
        meta: {
          title: '车辆属性'
        },
        component: () => import('../views/Cars/CarsAttrList.vue')
      }
    ]
  },
  // 车辆管理
  {
    path: '/sale',
    name: 'Sale',
    meta: {
      title: '销售管理',
      icon: 'console',
      iconClass: 'icon_console'
    },
    component: Layout,
    children: [
      {
        path: '/saleType',
        name: 'SaleType',
        meta: {
          title: '租车类型'
        },
        component: () => import('../views/Sale/SaleType.vue')
      }
    ]
  },
  // 会员管理
  {
    path: '/member',
    name: 'Member',
    meta: {
      title: '会员管理',
      icon: 'console',
      iconClass: 'icon_console'
    },
    component: Layout,
    children: [
      {
        path: '/memberList',
        name: 'MemberList',
        meta: {
          title: '会员列表'
        },
        component: () => import('../views/Member/index.vue')
      },
      {
        path: '/memberInfo',
        name: 'MemberInfo',
        hidden: true,
        meta: {
          title: '会员编辑'
        },
        component: () => import('../views/Member/memberInfo.vue')
      },
      {
        path: '/memberDetailed',
        name: 'MemberDetailed',
        hidden: true,
        meta: {
          title: '会员详情'
        },
        component: () => import('../views/Member/detailed.vue')
      }
    ]
  },
  // 订单管理
  {
    path: '/order',
    name: 'Order',
    meta: {
      title: '订单管理',
      icon: 'console',
      iconClass: 'icon_console'
    },
    component: Layout,
    children: [
      {
        path: '/order',
        name: 'Order',
        meta: {
          title: '订单管理'
        },
        component: () => import('../views/Order/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
