import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes'
import { getStorage } from '@/utils'

Vue.use(Router);
const router = new Router({
  routes
})

const LOGIN_PAGE_NAME: string = 'LoginPage'

router.beforeEach((to: any, from: any, next: any) => {
  const token = getStorage('token')
  if (!token) {
    if (to.name !== LOGIN_PAGE_NAME) {
      // 如果要跳转到的页面不是登录页
      next({
        name: LOGIN_PAGE_NAME
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

// 跳转之后
router.afterEach((to: any) => {
  //
})


export default router