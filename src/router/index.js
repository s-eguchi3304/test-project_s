import { createRouter, createWebHistory } from 'vue-router';
import UserTable from '/src/pages/UserTable.vue';

const routes = [
  {
    path: '/',
    name: 'UserTable',
    component: UserTable,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
