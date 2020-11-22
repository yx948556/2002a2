import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },


  {
    path: '/home',
    name: 'Home',
    component: ()=> import ("@/myvue/home")
  },
  {
    path: '/imgs',
    name: 'imgs',
    component: ()=> import ("@/myvue/imgs")
  },
  {
    path: '/finfh',
    name: 'finfh',
    component: ()=> import ("@/myvue/finfh")
  },
  {
    path: '/finfh2',
    name: 'finfh2',
    component: ()=> import ("@/myvue/finfh2")
  },
  {
    path: '/imgDetail',
    name: 'imgDetail',
    component: ()=> import ("@/myvue/imgDetail")
  },
  {
    path: '/textDetail',
    name: 'textDetail',
    component: ()=> import ("@/myvue/textDetail")
  },
  {
    path: '/renovation',
    name: 'renovation',
    component: ()=> import ("@/myvue/renovation")
  },





]

const router = new VueRouter({
  routes
})

export default router
