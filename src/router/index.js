import { createRouter, createWebHistory } from 'vue-router'
import Feed from '../views/Feed.vue'
import SignUp from '@/views/SignUp.vue'
import SignIn from '@/views/SignIn.vue'
import Profile from '../views/Profile.vue'


/*
profile/2
*/
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'feed',
        component: () => import('../views/Feed.vue')
      },
      {
        path: '/sign-in',
        name: 'signIn',
        component: () => import('../views/SignIn.vue')
      },
      {
        path: '/sign-up',
        name: 'signUp',
        component: () => import('../views/SignUp.vue')
      },
      {
        path: '/profile/:userId',
        name: 'profile',
        component: () => import('../views/Profile.vue')
      }
  ],
})
export default router