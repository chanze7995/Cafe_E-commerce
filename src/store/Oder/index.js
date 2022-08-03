// import router from '../../router'

import db from '../../firebase/firebaseInit'

import { doc, setDoc } from 'firebase/firestore'

export default {
  namespaced: true,
  state: {
    billInfo: {
      name: null,
      phone: null,
      telephone: null,
      email: null,
      company: null,
      taxIdNumber: null,
      country: null,
      city: null,
      district: null,
      address: null,
      Date: null,
      orderList: [],
      shippingMethod: 'HD',
      totalPrice: null
    }
  },
  actions: {
    async submitOder ({ commit, getters, rootGetters }, timeStamp) {
      commit('SET_BILLINFO_DATE', timeStamp)
      const orderId = `${rootGetters['Auth/currentUserId'].substr(0, 10)}${timeStamp}`
      const accountDocRef = doc(db, 'account', rootGetters['Auth/currentUserId'], 'oder', orderId)
      await setDoc(accountDocRef, getters.billInfo)
      const oderDocRef = doc(db, 'oder', orderId)
      await setDoc(oderDocRef, getters.billInfo)
    },
    setCartOder ({ commit }, { orderList, totalPrice }) {
      console.log(orderList)
      console.log(totalPrice)
      commit('SET_BILLINFO_ODERLIST', orderList)
      commit('SET_BILLINFO_TOTALPRICE', totalPrice)
    }
  },
  mutations: {
    SET_BILLINFO_DATE (state, timeStamp) {
      state.billInfo.Date = timeStamp
    },
    SET_BILLINFO_ODERLIST (state, orderList) {
      state.billInfo.orderList = orderList
    },
    SET_BILLINFO_TOTALPRICE (state, totalPrice) {
      state.billInfo.totalPrice = totalPrice
    }
  },
  getters: {
    billInfo (state) {
      return state.billInfo
    }
  }
}
