<template>
  <div>{{ productData.length }}</div>
</template>

<script>
// import ProductMenu from '@/components/shop/ProductMenu.vue'
// import ProductExhibit from '@/components/shop/ProductExhibit.vue'
// import ProductLightbox from '@/components/shop/ProductLightbox.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {

  },
  setup () {
    // 取得商品資料
    const store = useStore()
    const productData = computed(() => {
      return store.getters.productData
    })
    return {
      productData
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/views/_shop.scss';
</style>
