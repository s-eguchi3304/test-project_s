import { createRouter, createWebHistory } from 'vue-router';
import index from '/src/pages/index.vue';
import UserTable from '/src/pages/UserTable.vue';
import InputForm from '/src/pages/InputForm.vue';
import thanks from '/src/pages/thanks.vue';

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
  },
  {
    path: '/usertable',
    name: 'UserTable',
    component: UserTable,
  },
  {
    path: '/form',
    name: 'InputForm',
    component: InputForm,
  },
  {
    path: '/thanks',
    name: 'thanks',
    component: thanks,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
