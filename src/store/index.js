import { createStore } from 'vuex'
import db from '../firebase/firebaseInit'

export default createStore({
  state: {
    productData: [],
    isProductsLoaded: null,
    currentProductArray: null
  },
  actions: {
    async getProductData ({ commit, state }) {
      const getData = db.collection('product')
      const results = await getData.get()
      results.forEach((doc) => {
        if (!state.productData.some((product) => product.docId === doc.id)) {
          const data = {
            docId: doc.id,
            id: doc.data().id,
            brand: doc.data().brand,
            name: doc.data().name,
            description: doc.data().description,
            price: doc.data().price,
            isDiscount: doc.data().isDiscount,
            discount: doc.data().discount,
            groupName: doc.data().groupName,
            mainGroupName: doc.data().mainGroupName,
            product_imgI: doc.data().product_imgI,
            product_imgII: doc.data().product_imgII,
            product_imgIII: doc.data().product_imgIII,
            product_imgIV: doc.data().product_imgIV
          }
          commit('SET_PRODUCT_DATA', data)
        }
      })
      commit('SET_PRODUCTS_LOADED')
    },
    setCurrentProductArray (context, docId) {
      context.commit('SET_CURRENT_PRODUCT', docId)
    }
  },
  mutations: {
    SET_PRODUCT_DATA (state, data) {
      state.productData.push(data)
    },
    SET_PRODUCTS_LOADED (state) {
      state.isProductsLoaded = true
    },
    SET_CURRENT_PRODUCT (state, docId) {
      state.currentProductArray = state.productData.filter((product) => {
        return product.docId === docId
      })
    }
  },
  getters: {
    productData (state) {
      return state.productData
    },
    isProductsLoaded (state) {
      return state.isProductsLoaded
    },
    currentProductArray (state) {
      return state.currentProductArray
    }
  }
})
