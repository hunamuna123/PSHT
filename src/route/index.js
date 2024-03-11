import { createRouter, createWebHistory } from 'vue-router';
import App from '../views/App.vue';
import Panel from '../views/Panel.vue';

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: '/panel',
    name: 'Panel',
    component: Panel
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
