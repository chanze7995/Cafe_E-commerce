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
      <div class="sort-btn">
        <DropdownMenu
          dropdown-title="選擇排序"
          :dropdown-items="filterProductTitleData"
          @filter-items="filterProduct"
        />
      </div>

      <div>hi</div>
    </section>
    <div>{{ productData.length }}</div>
  </div>
</template>

<script>
// import ProductMenu from '@/components/shop/ProductMenu.vue'
// import ProductExhibit from '@/components/shop/ProductExhibit.vue'
// import ProductLightbox from '@/components/shop/ProductLightbox.vue'
import DropdownMenu from '@/components/DropdownMenu.vue'

import { computed, reactive } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    DropdownMenu
  },
  setup () {
    // 取得商品資料
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
    return {
      productData,
      filterProductTitleData,
      filterProduct
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/views/_shop.scss';
</style>
