import { createRouter, createWebHistory } from 'vue-router';
import UserTable from '/src/pages/UserTable.vue';
import InputForm from '/src/pages/InputForm.vue';

const routes = [
  {
    path: '/',
    name: 'UserTable',
    component: UserTable,
  },
  {
    path: '/form',
    name: 'InputForm',
    component: InputForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
