<template>
  <div class="cartBtnContainer">
    <div class="rotate">
      <div class="cartBtn-title">
        <h4>購物車 ({{ cartList.length }})</h4>
      </div>
      <ul class="cartItemContainer">
        <li
          class="cartItem"
          v-for="item in cartList"
          :key="item.id"
        >
          <div class="cartItem-main">
            <div class="cartItem-thumbnail">
              <img
                :src="item.product_imgI"
                alt=""
                class="cartItem-thumbnail-img"
              >
            </div>
            <div class="cartItem-name">
              {{ item.name }}
            </div>
          </div>
          <div class="cartItem-Price">
            <div>
              {{ item.quantity }}
            </div>
            <div class="times">
              ×
            </div>
            <div>
              ${{ item.price }}
            </div>
          </div>
        </li>
        <li class="totalPrice">
          <div>
            總和
          </div>
          <div>
            ${{ cartPriceSum }}
          </div>
        </li>
      </ul>
      <div
        class="btnContainer"
      >
        <router-link
          to="/cart"
          class="cartBtn"
        >
          訂單詳情
        </router-link>
        <div class="cartIcon">
          <SvgIcon
            icon-name="cart"
            icon-class="cart__icon"
          />
          <div class="cartNum">
            {{ cartList.length }}
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
    return {
      cartList, cartPriceSum
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/components/_cartBtn.scss';
</style>
