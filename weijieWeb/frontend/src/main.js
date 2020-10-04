import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/main_css.scss';

createApp(App).use(router).mount('#app');
