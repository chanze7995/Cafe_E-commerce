<template>
  <div>
    <div class="header-background" />
    <nav class="checkout__nav">
      <router-link
        to="/cart"
        class="checkout__nav__item checkout__nav__item--active checkout__nav__item--current"
      >
        購物車
      </router-link>
      <SvgIcon
        icon-name="chevrons-right"
        icon-class="symbol-icon"
      />
      <router-link
        to="/checkout"
        class="checkout__nav__item checkout__nav__item--active"
        @click="setCartOder"
      >
        準備結帳
      </router-link>
      <SvgIcon
        icon-name="chevrons-right"
        icon-class="symbol-icon"
      />
      <div
        href="#"
        class="checkout__nav__item"
      >
        訂單完成
      </div>
    </nav>
    <div class="cart-data__container container">
      <div :class="[{'cart-info__container--cart-empty':cartList.length === 0}]">
        <div
          v-if="!(cartList.length === 0)"
          class="cart-list__container"
        >
          <table class="cart-item__table">
            <thead class="cart-item__header">
              <tr>
                <th class="cart-item__header__title" />
                <th class="cart-item__header__title" />
                <th class="cart-item__header__title">
                  產品名稱
                </th>
                <th class="cart-item__header__title">
                  價格
                </th>
                <th class="cart-item__header__title cart-item__header__title__quantity">
                  數量
                </th>
                <th class="cart-item__header__title cart-item__header__title__subtotal">
                  小計
                </th>
              </tr>
            </thead>
            <tbody class="cart-item__container">
              <tr
                v-for="item in cartList"
                :key="item.id"
              >
                <td class="cart-item__element product__remove">
                  <SvgIcon
                    icon-name="close"
                    icon-class="symbol-icon"
                    @click="removeCartItem(item.cartItemId)"
                  />
                </td>
                <td class="cart-item__element product__thumbnail">
                  <a href="">
                    <img
                      :src="item.product_imgI"
                      alt=""
                      class="product__thumbnail__img"
                    >
                  </a>
                </td>
                <td class="cart-item__element product__name">
                  <a href="">
                    {{ item.name }}
                  </a>
                </td>
                <td class="cart-item__element product-price">
                  {{ item.discountPrice }}
                </td>
                <td class="cart-item__element">
                  <div class="product__quantity__input">
                    <SvgIcon
                      icon-name="minus"
                      icon-class="symbol-icon"
                      @click=" calQuantity(-1,item.quantity,item.cartItemId)"
                    />
                    <input
                      type="number"
                      v-model="item.quantity"
                      @change="changeItemQuantityNum(item.quantity,item.cartItemId)"
                    >
                    <SvgIcon
                      icon-name="plus"
                      icon-class="symbol-icon"
                      @click=" calQuantity(1,item.quantity,item.cartItemId)"
                    />
                  </div>
                </td>
                <td class="cart-item__element product__subtotal">
                  NT${{ item.discountPrice*item.quantity }}
                </td>
              </tr>
            </tbody>
          </table>
          <table class="cart-item__table--mobile">
            <thead class="cart-item__header">
              <tr>
                <th class="cart-item__header__title" />
                <th class="cart-item__header__title">
                  產品名稱
                </th>
                <th class="cart-item__header__title">
                  價格
                </th>
              </tr>
            </thead>
            <tbody
              v-for="item in cartList"
              :key="item.id"
              class="cart-item__container"
            >
              <tr>
                <td class="cart-item__element product__thumbnail cart-item--mobile--line-none">
                  <a href="">
                    <img
                      :src="item.product_imgI"
                      alt=""
                      class="product__thumbnail__img"
                    >
                  </a>
                </td>
                <td class="cart-item__element product__name cart-item--mobile--line-none">
                  <a href="">
                    {{ item.name }}
                  </a>
                </td>
                <td class="cart-item__element product-price cart-item--mobile--line-none">
                  {{ item.discountPrice }}
                </td>
              </tr>
              <tr>
                <td class="cart-item__element product__remove">
                  <SvgIcon
                    icon-name="close"
                    icon-class="symbol-icon"
                    @click="removeCartItem(item.cartItemId)"
                  />
                </td>
                <td class="cart-item__element">
                  <div class="product__quantity__container">
                    <h5 class="product__quantity__title">
                      數量：
                    </h5>
                    <div class="product__quantity__input">
                      <SvgIcon
                        icon-name="minus"
                        icon-class="symbol-icon"
                        @click=" calQuantity(-1,item.quantity,item.cartItemId)"
                      />
                      <input
                        type="number"
                        v-model="item.quantity"
                        @change="changeItemQuantityNum(item.quantity,item.cartItemId)"
                      >
                      <SvgIcon
                        icon-name="plus"
                        icon-class="symbol-icon"
                        @click=" calQuantity(1,item.quantity,item.cartItemId)"
                      />
                    </div>
                  </div>
                </td>
                <td class="cart-item__element product__subtotal">
                  NT${{ item.discountPrice*item.quantity }}
                </td>
              </tr>
            </tbody>
          </table>
          <div class="cart-update__container">
            <div class="cart-update__coupon">
              <input
                type="text"
                placeholder="輸入優惠碼"
              >
              <button>
                使用
              </button>
            </div>
            <button class="cart__button">
              更新購物車
            </button>
          </div>
        </div>
        <div
          v-else
          class="cart-empty"
        >
          <h3>尚未加入商品</h3>
        </div>
        <div class="product-recommend__container">
          <h4>你可能會有興趣...</h4>
          <ul>
            <li>
              <div class="product-recommend__img">
                <SvgIcon
                  icon-name="heart"
                  icon-class="symbol-icon"
                />
                <a href="">
                  <img
                    :src="require('@/assets/images/coffeeDescription/pink/smallpinkcoffee0.png')"
                    alt=""
                    class="product-img"
                  >
                </a>
              </div>
              <h4 class="product-recommend__price">
                NT$520
              </h4>
              <div class="product-recommend__link">
                <a
                  class="button"
                  href=""
                >前往購買</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="total-price__container">
        <h3 class="total-price__title">
          總計
        </h3>
        <div class="total-price__content">
          <div class="total-price__option">
            <h4>運送方式</h4>
            <ul>
              <li>
                <label>
                  <input
                    type="radio"
                    v-model="billInfo.shippingMethod"
                    value="HD"
                  >
                  一般宅配
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    v-model="billInfo.shippingMethod"
                    value="COD"
                  >
                  貨到付款 : NT$30 (不支援離島地區)
                </label>
              </li>
            </ul>
          </div>
          <div class="total-price__price">
            <h4>全部金額</h4>
            <h3>NT${{ cartPriceSum }}</h3>
          </div>
          <div class="total-price__checkout">
            <router-link
              to="/checkout"
              class="button"
              @click="setCartOder"
            >
              前往結賬
            </router-link>
          </div>
          <img
            :src="require('@/assets/images/pay.svg')"
            alt=""
            class="total-price__img"
          >
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
    const billInfo = computed(() => {
      return store.getters['Oder/billInfo']
    })
    const cartPriceSum = computed(() => {
      const shippingMethod = billInfo.value.shippingMethod
      const cartPriceSum = store.getters['Cart/cartPriceSum']
      if (shippingMethod === 'COD') {
        return cartPriceSum + 30
      } else {
        return cartPriceSum
      }
    })
    // 檢查用戶輸入
    const changeItemQuantityNum = (updateQuantity, cartItemId) => {
      if (isNaN(updateQuantity) || updateQuantity < 1) {
        updateQuantity = 1
        store.dispatch('Cart/updateCartItemQuantity', { updateQuantity, cartItemId })
      } else {
        store.dispatch('Cart/updateCartItemQuantity', { updateQuantity, cartItemId })
      }
    }
    const removeCartItem = (id) => {
      store.dispatch('Cart/removeCartItem', id)
    }
    const calQuantity = (val, quantity, cartItemId) => {
      const updateQuantity = (quantity + val) > 1 ? (quantity + val) : 1
      if (!(updateQuantity === quantity)) {
        store.dispatch('Cart/updateCartItemQuantity', { updateQuantity, cartItemId })
      }
    }
    const setCartOder = () => {
      const oderList = cartList.value
      const totalPrice = cartPriceSum.value
      return store.dispatch('Oder/setCartOder', { oderList, totalPrice })
    }
    return {
      cartList,
      cartPriceSum,
      changeItemQuantityNum,
      removeCartItem,
      calQuantity,
      billInfo,
      setCartOder
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/views/_cart.scss';
</style>
