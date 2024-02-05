import { createRouter, createWebHashHistory } from 'vue-router';
import mains from './components/mains.vue';
import faq from './components/faq.vue';
import masters from './components/masters.vue';

export default createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
    { path: '/home', component: mains, alias: '/' },
    { path: '/faq', component: faq },
    { path: '/masters', component: masters },
  ],
});