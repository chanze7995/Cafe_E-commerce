import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/explore',
    name: 'Explore',
    component: () => import(/* webpackChunkName: "Explore" */ '../views/Explore.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "Shop" */ '../views/Shop.vue')
  },
  {
    path: '/location',
    name: 'Location',
    component: () => import(/* webpackChunkName: "Location" */ '../views/Location.vue')
  },
  {
    path: '/course',
    name: 'Course',
    component: () => import(/* webpackChunkName: "Course" */ '../views/Course.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
