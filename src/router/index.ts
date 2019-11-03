import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Setup from '@/pages/Setup.vue';
import Play from '@/pages/Play.vue';
import Forecast from '@/pages/Forecast.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
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
    path: '/play',
    name: 'play',
    components: {
      default: Play,
    },
    meta: { title: 'Play' },
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
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.meta && to.meta.title) document.title = `${to.meta.title} - Pandemic Infection Tracker`;
  next();
});

export default router;
