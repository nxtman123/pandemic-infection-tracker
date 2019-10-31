import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import InfectionDeck from '@/views/InfectionDeck.vue';
import Gameplay from '@/views/Gameplay.vue';
import Forecast from '@/views/Forecast.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/deck',
    alias: '/',
    name: 'deck',
    component: InfectionDeck,
  },
  {
    path: '/gameplay',
    name: 'gameplay',
    component: Gameplay,
  },
  {
    path: '/forecast',
    name: 'forecast',
    component: Forecast,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
