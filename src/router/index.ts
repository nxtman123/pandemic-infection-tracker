import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import InfectionDeck from '@/pages/InfectionDeck.vue';
import GameSetup from '@/pages/GameSetup.vue';
import Forecast from '@/pages/Forecast.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    alias: '/',
    path: '/setup',
    name: 'setup',
    components: {
      default: GameSetup,
    },
    meta: { title: 'Game Setup' },
  },
  {
    path: '/infection',
    name: 'infection',
    components: {
      default: InfectionDeck,
    },
    meta: { title: 'Infection Deck' },
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
