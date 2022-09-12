// import router from '../../router'

import db from '../../firebase/firebaseInit'

import { arrayUnion } from 'firebase/firestore'

export default {
  namespaced: true,
  state: {
    wishList: []
  },
  actions: {
    // async getWishList ({ commit, state, getters }) {
    //   const userData = db.collection('account').doc(getters['Auth/currentUserId'])
    //   const userDataWishList = await userData.get()
    //   userDataWishList.then((doc) => {
    //     console.log('!', doc.data())
    //   })
    // },
    async addWishListProduct ({ commit, state, rootGetters }, { productId }) {
      const currentUserId = rootGetters['Auth/currentUserId']
      const dataBase = db.collection('account').doc(currentUserId)
      await dataBase.update({
        wishList: arrayUnion(productId)
      })
    }
  },
  mutations: {
  },
  getters: {
  }
}
