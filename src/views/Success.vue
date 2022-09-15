<template>
  <div class="success__container">
    <div class="header-background" />
    <div class="container">
      <div class="success__wallpaper">
        <div class="rotation-wrapper-outer">
          <div class="rotation-wrapper-inner">
            <img
              src="@/assets/images/success/success-left.svg"
              alt=""
              class="element-to-rotate"
            >
          </div>
        </div>
        <div
          v-if="isFromProductCard"
          class="success__content "
        >
          <h1 class="success__title">
            選得好 !
          </h1>
          <p class="success__description">
            已加入購物車，接下來......
          </p>
          <div class="btn_container">
            <router-link
              to="/shop"
              class="button specialty__button"
            >
              再去逛逛
            </router-link>
            <router-link
              to="/checkout"
              class="button specialty__button"
            >
              前往結賬
            </router-link>
          </div>
        </div>
        <div
          v-else
          class="success__content "
        >
          <h1 class="success__title">
            享用咖啡
          </h1>
          <p class="success__description">
            已收到訂單，商品將近快送達你手中
          </p>
        </div>
        <div class="rotation-wrapper-outer">
          <div class="rotation-wrapper-inner">
            <img
              src="@/assets/images/success/success-right.svg"
              alt=""
              class="element-to-rotate"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const isFromProductCard = ref(false)
    return {
      isFromProductCard
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      if (from.name === 'ProductCard') {
        vm.isFromProductCard = true
      }
    })
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/views/_success.scss';
</style>
