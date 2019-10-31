import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import InfectionDeck from '@/pages/InfectionDeck.vue';
import Gameplay from '@/pages/Gameplay.vue';
import Forecast from '@/pages/Forecast.vue';
import ToolbarTitle from '@/components/ToolbarTitle.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    alias: '/',
    path: '/deck',
    name: 'deck',
    components: {
      default: InfectionDeck,
      title: ToolbarTitle,
    },
    props: { title: { value: 'Infection Deck' } },
  },
  {
    path: '/gameplay',
    name: 'gameplay',
    components: {
      default: Gameplay,
      title: ToolbarTitle,
    },
    props: { title: { value: 'Gameplay' } },
  },
  {
    path: '/forecast',
    name: 'forecast',
    components: {
      default: Forecast,
      title: ToolbarTitle,
    },
    props: { title: { value: 'Forecast' } },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
