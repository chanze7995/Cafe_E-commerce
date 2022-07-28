// import router from '../../router'

import db from '../../firebase/firebaseInit'

import { collection, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore'

export default {
  namespaced: true,
  state: {
    cartList: []
  },
  actions: {
    async getCartList ({ commit, state, rootGetters }) {
      const querySnapshot = await getDocs(collection(db, 'account', rootGetters['Auth/currentUserId'], 'cart'))
      querySnapshot.forEach((doc) => {
        if (!state.cartList.some((item) => item.cartId === doc.id)) {
          const data = doc.data()
          commit('SET_CART_LIST', data)
        }
      })
    },
    async addCart ({ dispatch, commit, rootGetters }, cartItem) {
      const docRef = doc(db, 'account', rootGetters['Auth/currentUserId'], 'cart', cartItem.cartId)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        const updateQuantity = docSnap.data().quantity + cartItem.quantity
        await updateDoc(docRef, { quantity: updateQuantity })
      } else {
        await setDoc(docRef, cartItem)
      }
      dispatch('getCartList')
    },
    async removeCart () {
    },
    async increaseItem () {
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
        console.log('b', b.itemId)
        console.log('a', a.itemId)
        return a.itemId > b.itemId ? 1 : -1
      })
      console.log(list)
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
