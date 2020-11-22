import { createWebHistory, createRouter } from 'vue-router';

import UserStore from "@/store/user.store"

import SignIn from '@/views/SignIn.vue';
import SignUp from '@/views/SignUp.vue';
import Dashboard from '@/views/Dashboard.vue';

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
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(`Route to : ${to.name?.toString()}`);
  
  if (to.name
    && !['SignIn', 'SignUp'].includes(to.name.toString())
    && !UserStore.isAuthentificated()) {
      next({ name: 'SignIn' })
  }
  else next()
})

export default router;
