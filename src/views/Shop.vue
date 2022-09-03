<template>
  <div>
    <section class="banner">
      <div class="banner__img">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/caffeine-cafe.appspot.com/o/shop%2Fshop-banner.jpg?alt=media&token=5bea6dab-1332-4154-a8ef-74653c89b7a1"
          alt=""
        >
      </div>
      <div class="banner__content container">
        <h1 class="banner__title">
          心中最優質的咖啡
        </h1>
        <h4 class="banner__description">
          合適的咖啡，讓你度過完美的一整天
        </h4>
      </div>
    </section>
    <section class="product-list container">
      <div
        class="product-list__sort-btn"
        @click="setClickedProductInfo"
      >
        <DropdownMenu
          dropdown-title="選擇排序"
          :dropdown-items="filterProductTitleData"
          @filter-items="filterProduct"
        />
      </div>
      <ul class="product-list__menu">
        <li>
          <router-link
            :to="{
              name:'ProductList',
              params:{
                group:'all'
              }}"
          >
            <button class="product-list__menu__item">
              全部商品
            </button>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{
              name:'ProductList',
              params:{
                group:'coffeeBeans'
              }}"
          >
            <button class="product-list__menu__item">
              咖啡豆
            </button>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{
              name:'ProductList',
              params:{
                group:'accessories'
              }}"
          >
            <button class="product-list__menu__item">
              沖煮設備
            </button>
          </router-link>
        </li>
      </ul>
      <router-view />
    </section>
  </div>
</template>

<script>
import DropdownMenu from '@/components/DropdownMenu.vue'
import { reactive } from 'vue'

export default {
  components: {
    DropdownMenu
    // ProductCard
  },
  setup () {
    const filterProductTitleData = reactive([
      '按價格排序：低到高',
      '按價格排序：高到低',
      '按折扣排序：高到低',
      '按最新排序',
      '按默認排序'])
    const filterProduct = (str) => {
      console.log('1', str)
    }
    return {
      filterProductTitleData,
      filterProduct
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/views/_shop.scss';
</style>
