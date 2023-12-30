import { createRouter, createWebHistory } from 'vue-router';
import TheHome from './pages/TheHome.vue';
import ProjectDetail from './pages/ProjectDetail.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: TheHome },
    {
      path: '/project/:id',
      name: 'ProjectDetail',
      component: ProjectDetail,
      props: true
    }
  ]
});

export default router;

