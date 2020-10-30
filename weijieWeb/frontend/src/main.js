import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/main_css.scss';
import store from './store'

const app = createApp(App)
app.use(store).use(router).mount('#app');
app.directive('clickOutside',{
    // Directive has a set of lifecycle hooks:
  // called before bound element's parent component is mounted
  beforeMount() {},
  // called when bound element's parent component is mounted
  mounted() {},
  // called before the containing component's VNode is updated
  beforeUpdate() {},
  // called after the containing component's VNode and the VNodes of its children // have updated
  updated() {},
  // called before the bound element's parent component is unmounted
  beforeUnmount() {},
  // called when the bound element's parent component is unmounted
  unmounted() {}

//   bind: function () {},
//   inserted: function () {},
//   update: function () {},
//   componentUpdated: function () {},
//   unbind: function () {}

//  bind → beforeMount
// inserted → mounted
// beforeUpdate: new! this is called before the element itself is updated, much like the component lifecycle hooks.
// update → removed! There were too many similarities to updated, so this is redundant. Please use updated instead.
// componentUpdated → updated
// beforeUnmount: new! similar to component lifecycle hooks, this will be called right before an element is unmounted.
// unbind -> unmounted
})
