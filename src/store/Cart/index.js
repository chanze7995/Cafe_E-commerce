// import router from '../../router'
import db from '../../firebase/firebaseInit'

import { collection, doc, getDoc, getDocs, setDoc, deleteDoc, updateDoc } from 'firebase/firestore'

export default {
  namespaced: true,
  state: {
    cartList: []
  },
  actions: {
    async getCartList ({ commit, state, rootGetters }) {
      const currentUserId = rootGetters['Auth/currentUserId']
      const isLogin = rootGetters['Auth/isLogin']
      if (isLogin) {
        const querySnapshot = await getDocs(collection(db, 'account', currentUserId, 'cart'))
        const cartData = []
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          cartData.push(data)
        })
        commit('SET_CART_LIST', cartData)
      } else {
        const cartData = JSON.parse(window.sessionStorage.getItem('Cart')) || []
        commit('SET_CART_LIST', cartData)
      }
    },
    async addCartItem ({ state, dispatch, rootGetters }, cartItem) {
      const currentUserId = rootGetters['Auth/currentUserId']
      const isLogin = rootGetters['Auth/isLogin']
      if (isLogin) {
        const docRef = doc(db, 'account', currentUserId, 'cart', cartItem.cartItemId)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          const updateQuantity = docSnap.data().quantity + cartItem.quantity
          await updateDoc(docRef, { quantity: updateQuantity })
        } else {
          await setDoc(docRef, cartItem)
        }
      } else {
        const list = state.cartList
        let isNewItem = true
        list.map(item => {
          if (item.cartItemId === cartItem.cartItemId) {
            item.quantity += cartItem.quantity
            isNewItem = false
          }
        })
        if (isNewItem) {
          list.push(cartItem)
        }
        window.sessionStorage.setItem('Cart', JSON.stringify(list))
      }
      dispatch('getCartList')
    },
    async removeCartItem ({ state, dispatch, rootGetters }, cartItemId) {
      const currentUserId = rootGetters['Auth/currentUserId']
      const isLogin = rootGetters['Auth/isLogin']
      if (isLogin) {
        const docRef = doc(db, 'account', currentUserId, 'cart', cartItemId)
        await deleteDoc(docRef)
      } else {
        const list = state.cartList
        const filterList = list.filter(item => {
          return item.cartItemId !== cartItemId
        })
        window.sessionStorage.setItem('Cart', JSON.stringify(filterList))
      }
      dispatch('getCartList')
    },
    async updateCartItemQuantity ({ state, dispatch, rootGetters }, { updateQuantity, cartItemId }) {
      const currentUserId = rootGetters['Auth/currentUserId']
      const isLogin = rootGetters['Auth/isLogin']
      if (isLogin) {
        const docRef = doc(db, 'account', currentUserId, 'cart', cartItemId)
        await updateDoc(docRef, { quantity: updateQuantity })
      } else {
        const list = state.cartList
        list.map(item => {
          if (item.cartItemId === cartItemId) {
            item.quantity = updateQuantity
          }
        })
        window.sessionStorage.setItem('Cart', JSON.stringify(list))
      }
      dispatch('getCartList')
    },
    async clearCartList ({ commit, rootGetters }) {
      const currentUserId = rootGetters['Auth/currentUserId']
      const isLogin = rootGetters['Auth/isLogin']
      if (isLogin) {
        const querySnapshot = await getDocs(collection(db, 'account', currentUserId, 'cart'))
        querySnapshot.forEach((doc) => {
          deleteDoc(doc.ref)
        })
        commit('CLEAR_CART_LIST')
      } else {
        window.sessionStorage.removeItem('Cart')
        commit('CLEAR_CART_LIST')
      }
    }
  },
  mutations: {
    SET_CART_LIST (state, data) {
      state.cartList = data
    },
    CLEAR_CART_LIST (state) {
      state.cartList = []
    }
  },
  getters: {
    cartList (state) {
      const list = state.cartList.sort((a, b) => {
        return a.productId > b.productId ? 1 : -1
      })
      return list || []
    },
    cartPriceSum (state) {
      const sum = state.cartList.reduce((a, b) => {
        return a + b.discountPrice * b.quantity
      }, 0)
      return sum || 0
    },
    cartQuantity (state) {
      const quantity = state.cartList.reduce((a, b) => {
        return a + b.quantity
      }, 0)
      return quantity || 0
    }
  }
}
