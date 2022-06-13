<template>
  <div>
    <section class="banner-container">
      <div class="banner-img">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/caffeine-cafe.appspot.com/o/shop%2Fshop-banner.jpg?alt=media&token=5bea6dab-1332-4154-a8ef-74653c89b7a1"
          alt=""
        >
      </div>
      <div class="banner-text-container">
        <h1>家中最優質的咖啡</h1>
        <h4>合適的咖啡，讓你度過完美的一整天</h4>
      </div>
    </section>
    <section class="product-list-container">
      <div
        class="sort-btn"
        @click="setClickedProductInfo"
      >
        <DropdownMenu
          dropdown-title="選擇排序"
          :dropdown-items="filterProductTitleData"
          @filter-items="filterProduct"
        />
      </div>
      <div class="product-list-header">
        <ul class="product-menu">
          <li class="product-menu-item">
            <router-link
              :to="{
                name:'ProductList',
                params:{
                  group:'all'
                }}"
            >
              全部商品
            </router-link>
          </li>
          <li class="product-menu-item">
            <router-link
              :to="{
                name:'ProductList',
                params:{
                  group:'coffeeBeans'
                }}"
            >
              咖啡豆
            </router-link>
          </li>
          <li class="product-menu-item">
            <router-link
              :to="{
                name:'ProductList',
                params:{
                  group:'accessories'
                }}"
            >
              沖煮設備
            </router-link>
          </li>
        </ul>
      </div>
      <router-view
        :product-data="productData"
        @clicked-product-id="getClickedProductId"
        @show-product-card="showProductCard"
      />
    </section>
    <!-- <div
      class="product-modal"
      v-show="isShowProductCard"
    >
      <ProductCard :clicked-product-info="clickedProductInfo" />
    </div> -->
  </div>
</template>

<script>
import DropdownMenu from '@/components/DropdownMenu.vue'
// import ProductCard from '@/components/ProductCard.vue'

import { ref, computed, reactive } from 'vue'
// import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
  components: {
    DropdownMenu
    // ProductCard
  },
  setup () {
    // 取得商品資料
    // const route = useRoute()
    const store = useStore()
    const productData = computed(() => {
      return store.getters.productData
    })
    const filterProductTitleData = reactive([
      '按價格排序：低到高',
      '按價格排序：高到低',
      '按折扣排序：高到低',
      '按最新排序',
      '按默認排序'])
    const filterProduct = (str) => {
      console.log('1', str)
    }
    let clickedProductId = ref()
    const getClickedProductId = (id) => {
      clickedProductId = id
    }
    const isShowProductCard = ref()
    const showProductCard = (bool) => {
      console.log(isShowProductCard.value)
      isShowProductCard.value = bool
      console.log(isShowProductCard.value)
    }
    let clickedProductInfo = reactive([])
    const setClickedProductInfo = () => {
      clickedProductInfo = productData.value.filter((item) => {
        return item.id === clickedProductId
      })
    }
    return {
      productData,
      filterProductTitleData,
      filterProduct,
      showProductCard,
      isShowProductCard,
      getClickedProductId,
      clickedProductInfo,
      setClickedProductInfo
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/views/_shop.scss';
</style>
