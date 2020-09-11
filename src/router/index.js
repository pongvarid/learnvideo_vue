import Vue from 'vue'
import VueRouter from 'vue-router'
import BaseRoot from '../views/root/Base.vue'
import Basehome from '../views/home/Base.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: "/", 
    component: BaseRoot,
    children: [
      {
        path: "",
        name: "Root-Home",
        component: () => import('../views/root/Home.vue') 
      },
    ]
  },
  {
    path: '/home', 
    component:  Basehome,
    children: [
      {
        path: "",
        name: "home-Home",
        component: () => import('../views/home/Home.vue') 
      },
      {
        path: "profile",
        name: "home-profile",
        component: () => import('../views/home/Profile.vue') 
      },
      {
        path: "exercise",
        name: "home-exercise",
        component: () => import('../views/home/Exercise.vue') 
      },
      {
        path: "video",
        name: "home-video",
        component: () => import('../views/home/Video.vue') 
      },
      {
        path: "about",
        name: "home-about",
        component: () => import('../views/home/About.vue') 
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
