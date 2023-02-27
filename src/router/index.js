import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import index from '/src/pages/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('../pages/Blog.vue'),
    },
    {
      path: '/blog/:id',
      name: 'BlogDtl',
      component: () => import('../pages/BlogDtl.vue'),
    },
    {
      path: '/usertable',
      name: 'UserTable',
      component: () => import('../pages/UserTable.vue'),
    },
    {
      path: '/formindex',
      name: 'FormIndex',
      component: () => import('../pages/FormIndex.vue'),
    },
    {
      path: '/form',
      name: 'InputForm',
      component: () => import('../components/InputForm.vue'),
    },
    {
      path: '/formconfirm',
      name: 'formConfirm',
      component: () => import('../components/formConfirm.vue'),
      meta: {
        isconfirm: true,
      },
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: () => import('../pages/thanks.vue'),
    },
    {
      path: '/supabase_test',
      name: 'supabase_test',
      component: () => import('../pages/todo_supabaseTEST.vue'),
    },
    {
      path: '/chattest',
      name: 'ChatTest',
      component: () => import('../pages/chattest.vue'),
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
