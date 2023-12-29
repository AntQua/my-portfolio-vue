import { createRouter, createWebHistory } from 'vue-router';
import TheHome from './pages/TheHome.vue';

const routes = [
  {
    path: '/',
    name: 'TheHome',
    component: TheHome
  }
  // Add additional routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

