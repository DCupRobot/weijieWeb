import VueRouter from 'vue-router';
import mainPage from './components/main_page.vue';

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'mainPage',
    component: mainPage,
    meta: {
      title: 'Weijie Web',
    },
  }],
});
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  console.log('to: ', to);
  console.log('from: ', from);
  console.log('next: ', next);
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
export default { router };
