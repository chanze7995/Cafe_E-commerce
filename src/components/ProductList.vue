<template>
  <div>
    <router-view />
    <div class="product-list__container">
      <div
        class="product-list__item"
        v-for="item in clickedProductGroupData"
        :key="item.docId"
      >
        <div class="product-list__item__img">
          <div
            class="product-list__item__discount-label"
            v-if="item.isDiscount"
          >
            -{{ 100-item.discount*100 }}%
          </div>
          <div class="product-list__item__product-img__container">
            <img
              :src="item.product_imgI"
              alt=""
              class="product-list__item__product-img"
            >
          </div>
          <ul class="product-list__item__option">
            <li class="product-list__item__option__item">
              <router-link
                :to="{
                  name:'ProductCard',
                  params:{
                    docId:item.docId
                  }}"
                data-tip="加入購物車"
                class="product-list__item__option__link"
              >
                <SvgIcon
                  icon-name="cart"
                  icon-class="symbol-icon"
                />
              </router-link>
            </li>
            <li class="product-list__item__option__item">
              <div
                data-tip="喜歡"
                @click="addWishList(item.docId)"
                class="product-list__item__option__link"
              >
                <SvgIcon
                  icon-name="heart"
                  icon-class="symbol-icon"
                />
              </div>
            </li>
            <li class="product-list__item__option__item">
              <router-link
                v-if="item.mainGroupName === 'coffeeBeans'"
                :to="{
                  name:'CoffeeBeanIntro',
                  params:{
                    name:item.name
                  }}"
                data-tip="了解更多"
                class="product-list__item__option__link"
              >
                <SvgIcon
                  icon-name="search-alt"
                  icon-class="symbol-icon"
                />
              </router-link>
              <router-link
                v-else
                :to="{
                  name:'ProductCard',
                  params:{
                    docId:item.docId
                  }}"
                data-tip="了解更多"
                class="product-list__item__option__link"
              >
                <SvgIcon
                  icon-name="search-alt"
                  icon-class="symbol-icon"
                />
              </router-link>
            </li>
          </ul>
        </div>
        <div class="product-list__item__content">
          <div class="product-list__item__title">
            <h5>{{ item.brand }}</h5>
            <h4>{{ item.name }}</h4>
          </div>
          <div class="product-list__item__price">
            <div :class="['product-list__item__price--original',{'product-list__item__price--discount':item.isDiscount}]">
              定價：{{ item.price }}元
            </div>
            <div
              class="product-list__item__price__discount"
              v-if="item.isDiscount"
            >
              特價：{{ Math.ceil(item.price*item.discount) }}元
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  props: {
    group: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const store = useStore()
    const router = useRouter()

    const productData = computed(() => {
      return store.getters['Product/productData']
    })
    const clickedProductGroupData = computed(() => {
      return productData.value.filter((product) => {
        if (props.group === 'coffeeBeans') {
          return product.mainGroupName === 'coffeeBeans'
        }
        if (props.group === 'accessories') {
          return product.mainGroupName === 'accessories'
        }
        return product
      })
    })
    const addWishList = (productId) => {
      const isLogin = store.getters['Auth/isLogin']
      if (isLogin) {
        store.dispatch('WishList/addWishListProduct', { productId })
      } else {
        alert('尚未登入會員')
        router.push('/login')
      }
    }
    return {
      props,
      productData,
      clickedProductGroupData,
      addWishList
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/components/_productList.scss';
</style>
