import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index'
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
    path: '/explore/:name',
    name: 'CoffeeBeanIntro',
    component: () => import(/* webpackChunkName: "CoffeeBeanIntro" */ '../views/CoffeeBeanIntro.vue'),
    props (route) {
      return {
        name: route.params.name
      }
    }
  },
  {
    path: '/shop',
    name: 'Shop',
    redirect: '/shop/all',
    component: () => import(/* webpackChunkName: "Shop" */ '../views/Shop.vue'),
    children: [
      {
        path: ':group',
        name: 'ProductList',
        component: () => import(/* webpackChunkName: "ProductList" */ '../components/ProductList.vue'),
        props (route) {
          return {
            group: route.params.group
          }
        },
        children: [
          {
            path: ':docId',
            name: 'ProductCard',
            component: () => import(/* webpackChunkName: "ProductCard" */ '../components/ProductCard.vue'),
            props (route) {
              return {
                group: route.params.group,
                docId: route.params.docId
              }
            }
          }
        ]
      }
    ]
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
  },
  {
    path: '/success',
    name: 'Success',
    component: () => import(/* webpackChunkName: "Success" */ '../views/Success.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "Cart" */ '../views/Cart.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import(/* webpackChunkName: "Checkout" */ '../views/Checkout.vue'),
    beforeEnter: (to, from, next) => {
      const totalPrice = store.getters['Oder/billInfo'].totalPrice
      if (totalPrice === null || totalPrice === 0) {
        next({ name: 'Cart' })
      } else {
        next()
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    const isProductCardPage = ((to.name === 'ProductCard') && !(from.name === 'CoffeeBeanIntro')) || from.name === 'ProductCard'
    if (!isProductCardPage) {
      if (!savedPosition) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({ top: 0, left: 0, behavior: 'smooth' })
          }, 100)
        })
      } else {
        return savedPosition
      }
    }
    // return { top: 0, behavior: 'smooth' }
  }
})
export default router
