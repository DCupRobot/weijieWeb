import {
  createRouter,
  createMemoryHistory} from 'vue-router'
import mainPage from '../components/main_page.vue';

const routes = [
  {
    path: '/',
      name: 'mainPage',
      component: mainPage,
      meta: {
        title: 'Weijie Web',
      },
  },
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
  history: createMemoryHistory(),
  routes
})

router.beforeEach((to,from,next)=>{
  // 根据路由元信息设置文档标题
  window.document.title = to.meta.title || admin
  next()
})

export default router
