import { createStore } from 'vuex'

import Auth from './Auth'
import Cart from './Cart'
import Oder from './Oder'
import WishList from './WishList'
import Product from './Product'

export default createStore({
  state: {
    isLoading: true
  },
  actions: {
  },
  mutations: {
    CHANGE_ISLOADING (state) {
      // setTimeout(() => {
      //   state.isLoading = !state.isLoading
      // }, 1500)
      state.isLoading = !state.isLoading
    }
  },
  getters: {
    isLoading (state) {
      return state.isLoading
    }
  },
  modules: {
    Auth,
    Cart,
    Oder,
    WishList,
    Product
  }
})
