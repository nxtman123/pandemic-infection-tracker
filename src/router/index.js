import Vue from 'vue';
import VueRouter from 'vue-router';

import Setup from '../pages/Setup.vue';
import Record from '../pages/Record.vue';
import Model from '../pages/Model.vue';
import Forecast from '../pages/Forecast.vue';

Vue.use(VueRouter);

const routes = [
  {
    alias: '/',
    path: '/setup',
    name: 'setup',
    components: {
      default: Setup,
    },
    meta: { title: 'Setup' },
  },
  {
    path: '/record',
    name: 'record',
    components: {
      default: Record,
    },
    meta: { title: 'Record' },
  },
  {
    path: '/model',
    name: 'model',
    components: {
      default: Model,
    },
    meta: { title: 'Model' },
  },
  {
    path: '/forecast',
    name: 'forecast',
    components: {
      default: Forecast,
    },
    meta: { title: 'Forecast' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = { x: 0, y: 0 };
    if (to.hash) {
      scrollTo = to.hash;
    } else if (to.name === 'record') {
      scrollTo = { selector: '#bottom' };
    } else if (savedPosition) {
      scrollTo = savedPosition;
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(scrollTo);
      }, 10);
    });
  },
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.meta && to.meta.title) document.title = `${to.meta.title} - Pandemic Infection Tracker`;
  next();
});

export default router;
