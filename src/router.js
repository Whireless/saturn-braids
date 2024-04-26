import { createRouter, createWebHashHistory } from 'vue-router';
import index from './components/index.vue';
import faq from './components/faq.vue';
import masters from './components/masters.vue';

export default createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, }
  },
  routes: [
    { path: '/home', component: index, alias: '/', },
    { path: '/faq', component: faq, },
    { path: '/masters', component: masters, },
  ],
});