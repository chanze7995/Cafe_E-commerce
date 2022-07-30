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
      const querySnapshot = await getDocs(collection(db, 'account', rootGetters['Auth/currentUserId'], 'cart'))
      state.cartList = []
      querySnapshot.forEach((doc) => {
        if (!state.cartList.some((item) => item.cartItemId === doc.id)) {
          const data = doc.data()
          commit('SET_CART_LIST', data)
        }
      })
    },
    async addCartItem ({ dispatch, commit, rootGetters }, cartItem) {
      const docRef = doc(db, 'account', rootGetters['Auth/currentUserId'], 'cart', cartItem.cartItemId)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        const updateQuantity = docSnap.data().quantity + cartItem.quantity
        await updateDoc(docRef, { quantity: updateQuantity })
      } else {
        await setDoc(docRef, cartItem)
      }
      dispatch('getCartList')
    },
    async removeCartItem ({ dispatch, commit, rootGetters }, cartItemId) {
      const docRef = doc(db, 'account', rootGetters['Auth/currentUserId'], 'cart', cartItemId)
      await deleteDoc(docRef)
      dispatch('getCartList')
    },
    async updateCartItemQuantity ({ dispatch, rootGetters }, { updateQuantity, cartItemId }) {
      const docRef = doc(db, 'account', rootGetters['Auth/currentUserId'], 'cart', cartItemId)
      await updateDoc(docRef, { quantity: updateQuantity })
      dispatch('getCartList')
    },
    async decreaseItem () {
    },
    async totalPrice () {
    }
  },
  mutations: {
    SET_CART_LIST (state, data) {
      state.cartList.push(data)
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
        return a + b.quantity * b.price * b.discount
      }, 0)
      return sum || 0
    }
  }
}
