import Vue from 'vue';
import VueRouter from 'vue-router';
import InfectionDeck from '@/views/InfectionDeck.vue';
import Gameplay from '@/views/Gameplay.vue';
import Forecast from '@/views/Forecast.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/deck',
    alias: '/',
    name: 'deck',
    component: InfectionDeck,
    meta: {
      title: 'Infection Deck',
    },
  },
  {
    path: '/gameplay',
    name: 'gameplay',
    component: Gameplay,
    meta: {
      title: 'Gameplay',
    },
  },
  {
    path: '/forecast',
    name: 'forecast',
    component: Forecast,
    meta: {
      title: 'Forecast',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
