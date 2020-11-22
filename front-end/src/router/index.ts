import { createWebHistory, createRouter } from 'vue-router';
import SignIn from '@/views/SignIn.vue';
import SignUp from '@/views/SignUp.vue';

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
