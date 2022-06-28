import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import {getUserLoginToken} from '@/logic/userLoginToken'

const checkLoggedIn=()=>{
  const token=getUserLoginToken();
  if(!token){
    return '/'
  }
}
const isLoggedIn=()=>{
  const token=getUserLoginToken();
  if(token){
    return '/home'
  }
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'UserLogin',
      component: Login,
      beforeEnter: isLoggedIn
    },
    {
      path:'/home',
      name:'Home',
      component: ()=>import('@/views/Home.vue'),
      beforeEnter: checkLoggedIn
    },
    {
      path:'/game',
      name:'Game',
      component: ()=>import('@/views/Game.vue'),
      beforeEnter: checkLoggedIn
    },
    {
      path:'/test',
      name:'Test',
      component: ()=>import('@/views/Test.vue'),
    }
  ]
})

export default router
