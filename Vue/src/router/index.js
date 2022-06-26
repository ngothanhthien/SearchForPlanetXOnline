import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'

const getUserToken=()=>localStorage.getItem('userToken');
const checkLoggedIn=(to)=>{
  const token=getUserToken();
  if(!token){
    return '/'
  }
}
const isLoggedIn=()=>{
  const token=getUserToken();
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
  ]
})

export default router
