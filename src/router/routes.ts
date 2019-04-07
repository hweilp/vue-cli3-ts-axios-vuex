export default [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('@/views/Login.vue'),
    meta: {
      icon: '',
      title: '登录'
    }
  },
  {
    path: '/index',
    name: 'HomePage',
    component: () => import('@/views/Home.vue'),
    meta: {
      icon: '',
      title: '首页'
    }
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: () => import('@/views/About.vue'),
    meta: {
      icon: '',
      title: '关于'
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error.vue'),
    meta: {
      title: '404',
      hidden: true
    }
  },
  { path: '*', redirect: '/404', meta: { hidden: true } }
]