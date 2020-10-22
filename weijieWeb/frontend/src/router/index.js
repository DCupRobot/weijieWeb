import {
  createRouter,
  createWebHistory,Router} from 'vue-router'
import mainPage from '../components/main_page.vue';
import dialogue from '../components/dialogue.vue';
const routes = [
  {
    path: '/',
    component: mainPage,
    meta: {
      title: 'Weijie Web',
    },
  },
  // {
  //   path: '/123',
  //   component: dialogue,
  //   meta: {
  //     title: 'Weijie Web',
  //   },
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to,from,next)=>{
  // 根据路由元信息设置文档标题
  window.document.title = to.meta.title || admin
  next()
})

export default router
