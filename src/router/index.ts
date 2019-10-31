import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import InfectionDeck from '@/pages/InfectionDeck.vue';
import Gameplay from '@/pages/Gameplay.vue';
import Forecast from '@/pages/Forecast.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    alias: '/',
    path: '/deck',
    name: 'deck',
    components: {
      default: InfectionDeck,
    },
    meta: { title: 'Infection Deck' },
  },
  {
    path: '/gameplay',
    name: 'gameplay',
    components: {
      default: Gameplay,
    },
    meta: { title: 'Gameplay' },
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
