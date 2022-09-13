import { toRaw } from 'vue'
import db from '../../firebase/firebaseInit'

export default {
  namespaced: true,
  state: {
    productData: [],
    coffeeBeanIntroData: [],
    isProductsLoaded: null,
    currentProductArray: null
  },
  actions: {
    async getData ({ commit, state }) {
      const getProductData = db.collection('product')
      const getCoffeeBeanIntroData = db.collection('coffeeBeanIntro')
      const productResults = await getProductData.get()
      const coffeeBeanIntroResults = await getCoffeeBeanIntroData.get()
      productResults.forEach((doc) => {
        if (!state.productData.some((product) => product.docId === doc.id)) {
          const data = {
            docId: doc.id,
            id: doc.data().id,
            brand: doc.data().brand,
            name: doc.data().name,
            color: doc.data().color,
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
      coffeeBeanIntroResults.forEach((doc) => {
        if (!state.coffeeBeanIntroData.some((item) => item.docId === doc.id)) {
          const data = {
            docId: doc.id,
            brand: doc.data().brand,
            name: doc.data().name,
            mainGroupName: 'coffeeBeans',
            id: doc.data().id,
            productId: doc.data().productId,
            color: doc.data().color,
            sloganI: doc.data().sloganI,
            sloganII: doc.data().sloganII,
            roast_style: doc.data().roast_style,
            varietal: doc.data().varietal,
            processing: doc.data().processing,
            location: doc.data().location,
            country: doc.data().country,
            certification: doc.data().certification,
            description: doc.data().description,
            description_roasting: doc.data().description_roasting,
            description_brew: doc.data().description_brew,
            description_story: doc.data().description_story,
            description_score: doc.data().description_score,
            description_name: doc.data().description_name,
            main_img: doc.data().main_img,
            intro_imgI: doc.data().intro_imgI,
            intro_imgII: doc.data().intro_imgII,
            background_imgI: doc.data().background_imgI,
            background_imgII: doc.data().background_imgII
          }
          commit('SET_COFFEEBEANINTRO_DATA', data)
        }
      })
      commit('CHANGE_ISLOADING', null, { root: true })
    },
    setCurrentProductArray (context, docId) {
      context.commit('SET_CURRENT_PRODUCT', docId)
    }
  },
  mutations: {
    SET_PRODUCT_DATA (state, data) {
      state.productData.push(data)
    },
    SET_COFFEEBEANINTRO_DATA (state, data) {
      state.coffeeBeanIntroData.push(data)
    },
    SET_CURRENT_PRODUCT (state, docId) {
      state.currentProductArray = state.productData.filter((product) => {
        return product.docId === docId
      })
    }
  },
  getters: {
    productData (state) {
      return state.productData || []
    },
    coffeeBeanIntroData (state) {
      return state.coffeeBeanIntroData || []
    },
    isProductsLoaded (state) {
      return state.isProductsLoaded
    },
    currentProductArray (state) {
      return state.currentProductArray || []
    },
    newCoffeeBeansArray (state) {
      const coffeeBeans = toRaw(state.productData).filter((item) => {
        return item.mainGroupName === 'coffeeBeans'
      })
      const newCoffeeBeans = coffeeBeans.slice(0, 3).sort((a, b) => {
        return a.id - b.id
      })
      return newCoffeeBeans
    },
    bestSellerAccessoriesArray (state) {
      const accessories = toRaw(state.productData).filter((item) => {
        return item.mainGroupName === 'accessories'
      })
      const bestSellerAccessories = accessories.slice(-5).sort((a, b) => {
        return a.id - b.id
      })
      return bestSellerAccessories
    },
    onSaleProductsArray (state) {
      const onSaleProducts = toRaw(state.productData).filter((item) => {
        return item.discount !== 1
      }).sort((a, b) => {
        return a.id - b.id
      })
      return onSaleProducts
    }
  }
}
