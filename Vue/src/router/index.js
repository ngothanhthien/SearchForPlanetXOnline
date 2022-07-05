import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import HomeSelect from '@/views/HomeSelect.vue'
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
      component: Home,
      beforeEnter: checkLoggedIn,
      children: [
        {
          path:'create',
          name:'CreateRoom',
          component: ()=>import('@/views/CreateRoom.vue'),
        },
        {
          path:'',
          name:'SelectOption',
          component: HomeSelect,
        },
        {
          path:'room/:id',
          name:'WaitRoom',
          props:true,
          component: ()=>import('@/views/WaitRoom.vue'),
        },
      ]
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
    },
    {
      path: '/404',
      name: 'PageNotFound',
      component: ()=>import('@/views/PageNotFound.vue'),
    },
    {
      path: "/:catchAll(.*)",
      redirect: '/404',
    },
  ]
})

export default router
