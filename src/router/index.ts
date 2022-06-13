import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Cookies from 'js-cookie'
import { basicApi } from '@/api/index'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/winningList',
    name: 'WinningList',
    component: () => import('../views/winningName/WinningList.vue')
  },
  {
    path: '/rankingList',
    name: 'RankingList',
    component: () => import('../views/rankingList/RankingList.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/login/Login.vue')

  },
  {
    path: '/flopGame',
    name: 'FlopGame',
    component: () => import('../views/flopGame.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach(async (to, form, next) => {
  if (!Cookies.get('username') && to.name !== 'Login') {
    next({ name: 'Login' })
  } else {
    const data = {
      userName: Cookies.get('username')
    }
    const { auth } = await basicApi.authCookie(data)
    if (!auth) {
      Cookies.remove('username')
      next({ name: 'Login' })
    }
    next()
  }
  next()
})
export default router
