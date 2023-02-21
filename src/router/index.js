import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import index from '/src/pages/index.vue';
import UserTable from '/src/pages/UserTable.vue';
import InputForm from '/src/pages/InputForm.vue';
import thanks from '/src/pages/thanks.vue';
import supabase_test from '/src/pages/todo_supabaseTEST.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
    {
      path: '/supabase_test',
      name: 'supabase_test',
      component: supabase_test,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/login.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../pages/SignUp.vue'),
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../pages/SingIn.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../pages/DashBoard.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/email_confirmation',
      name: 'emailConfirmation',
      component: () => import('../pages/EmailConfirmation.vue'),
    },
  ],
});

router.beforeEach((to) => {
  const auth = useAuthStore();
  if (!auth.isLoggedIn && to.meta.requiresAuth) {
    return { name: 'signin' };
  }
});

export default router;
