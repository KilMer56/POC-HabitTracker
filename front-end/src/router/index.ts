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
  const disconnectedRoutes = ['SignIn', 'SignUp']

  if(to.name){
    if (UserStore.isAuthentificated() && disconnectedRoutes.includes(to.name.toString())){
      next({ name: 'Dashboard' })
    }
    else if (!UserStore.isAuthentificated() && !disconnectedRoutes.includes(to.name.toString())){
      next({ name: 'SignIn' })
    }
    else {
      next();
    }
  }
  else {
    next();
  }
})

export default router;
