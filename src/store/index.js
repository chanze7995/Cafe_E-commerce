import { createStore } from 'vuex'

import Auth from './Auth'
import Cart from './Cart'
import Oder from './Oder'
import WishList from './WishList'
import Product from './Product'

export default createStore({
  state: {
    isLoading: false
  },
  actions: {
  },
  mutations: {
  },
  getters: {
  },
  modules: {
    Auth,
    Cart,
    Oder,
    WishList,
    Product
  }
})
