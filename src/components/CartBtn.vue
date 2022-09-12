<template>
  <div class="cart-Btn">
    <div class="cart-Btn--rotate">
      <h1 class="cartBtn__title">
        購物車 ({{ cartQuantity }})
      </h1>
      <ul class="cart__item__container">
        <li
          class="cart__item"
          v-for="item in cartList"
          :key="item.id"
        >
          <div class="cart__item__info">
            <div class="cart__item__thumbnail">
              <img
                :src="item.product_imgI"
                alt=""
                class="cart__item__img"
              >
            </div>
            <div class="cart__item__name">
              {{ item.name }}
            </div>
          </div>
          <div class="cart__item__price">
            {{ item.quantity }} × ${{ item.discountPrice }}
          </div>
        </li>
      </ul>
      <div class="cart__total-price">
        <div class="cart__total-price__title">
          總和
        </div>
        <div class="cart__total-price__price">
          ${{ cartPriceSum }}
        </div>
      </div>
      <div class="btnContainer">
        <router-link
          to="/cart"
          class="cart__link"
        >
          訂單詳情
        </router-link>
        <div class="cart__icon">
          <SvgIcon
            icon-name="cart"
            icon-class="symbol-icon"
          />
          <div class="cart__num">
            {{ cartQuantity }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    const cartList = computed(() => {
      return store.getters['Cart/cartList']
    })
    const cartPriceSum = computed(() => {
      return store.getters['Cart/cartPriceSum']
    })
    const cartQuantity = computed(() => {
      return store.getters['Cart/cartQuantity']
    })
    return {
      cartList,
      cartPriceSum,
      cartQuantity
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/components/_cartBtn.scss';
</style>
