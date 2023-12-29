import { createRouter, createWebHistory } from 'vue-router';
import TheHome from './pages/TheHome.vue';
import ProjectDetail from './pages/ProjectDetail.vue';

const routes = [
  { path: '/', redirect: '/home' }, 
  {
    path: '/home',
    name: 'Home',
    component: TheHome
  },
  {
    path: '/project/:id',
    name: 'ProjectDetail',
    component: ProjectDetail,
    props: true
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

