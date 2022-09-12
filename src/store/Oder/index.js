import router from '../../router'

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
      timeStamp: null,
      purchaseDate: null,
      oderList: [],
      shippingMethod: 'HD',
      totalPrice: null
    }
  },
  actions: {
    async submitOder ({ dispatch, commit, getters, rootGetters }, timeStamp) {
      commit('SET_BILLINFO_DATE', timeStamp)
      const currentUserId = rootGetters['Auth/currentUserId']
      const isLogin = rootGetters['Auth/isLogin']
      if (isLogin) {
        const oderId = `${currentUserId.substr(0, 10)}-${timeStamp}`
        const accountDocRef = doc(db, 'account', currentUserId, 'oder', oderId)
        await setDoc(accountDocRef, getters.billInfo)
        const oderDocRef = doc(db, 'oder', oderId)
        await setDoc(oderDocRef, getters.billInfo)
      } else {
        const oderId = `${getters.billInfo.phone}-${timeStamp}`
        const oderDocRef = doc(db, 'oder', oderId)
        await setDoc(oderDocRef, getters.billInfo)
      }
      commit('CLEAR_BILLINFO')
      dispatch('Cart/clearCartList', null, { root: true })
      router.push('/success')
    },
    setCartOder ({ commit }, { oderList, totalPrice }) {
      commit('SET_BILLINFO_ODERLIST', oderList)
      commit('SET_BILLINFO_TOTALPRICE', totalPrice)
    }
  },
  mutations: {
    SET_BILLINFO_DATE (state, timeStamp) {
      const date = new Date(timeStamp)
      const purchaseDate = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日${date.getHours()}點${date.getMinutes()}分${date.getSeconds()}秒`
      state.billInfo.timeStamp = timeStamp
      state.billInfo.purchaseDate = purchaseDate
    },
    SET_BILLINFO_ODERLIST (state, oderList) {
      state.billInfo.oderList = oderList
    },
    SET_BILLINFO_TOTALPRICE (state, totalPrice) {
      state.billInfo.totalPrice = totalPrice
    },
    CLEAR_BILLINFO (state) {
      state.billInfo = {
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
        timeStamp: null,
        purchaseDate: null,
        oderList: [],
        shippingMethod: 'HD',
        totalPrice: null
      }
    }
  },
  getters: {
    billInfo (state) {
      return state.billInfo
    }
  }
}
