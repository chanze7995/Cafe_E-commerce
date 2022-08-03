<template>
  <div>
    <nav class="checkoutNav">
      <router-link
        to="/cart"
        class="nav-active  current"
      >
        購物車
      </router-link>
      <SvgIcon
        icon-name="chevrons-right"
        icon-class="checkoutNav-icon"
      />
      <router-link
        to="/checkout"
        class="nav-active"
        @click="setCartOder"
      >
        準備結帳
      </router-link>
      <SvgIcon
        icon-name="chevrons-right"
        icon-class="checkoutNav-icon"
      />
      <a
        href="#"
        class=""
      >
        訂單完成
      </a>
    </nav>
    <div class="cartContainer">
      <div class="cartItemInfoContainer">
        <div class="cartTable">
          <table>
            <thead class="cartTable-title">
              <tr>
                <th class="cartItem-remove" />
                <th class="cartItem-thumbnail" />
                <th class="cartItem-name">
                  產品名稱
                </th>
                <th class="cartItem-price">
                  價格
                </th>
                <th class="cartItem-quantity">
                  數量
                </th>
                <th class="cartItem-subtotal">
                  小計
                </th>
              </tr>
            </thead>
            <tbody class="cartTable-item">
              <tr
                v-for="item in cartList"
                :key="item.id"
              >
                <td class="product-remove">
                  <SvgIcon
                    icon-name="close"
                    icon-class="close-icon"
                    @click="removeCartItem(item.cartItemId)"
                  />
                </td>
                <td class="product-thumbnail">
                  <a href="">
                    <img
                      :src="item.product_imgI"
                      alt=""
                      class="product-thumbnail-img"
                    >
                  </a>
                </td>
                <td class="product-name">
                  <a href="">
                    {{ item.name }}
                  </a>
                </td>
                <td class="product-price">
                  {{ item.price*item.discount }}
                </td>
                <td>
                  <div class="product-quantity">
                    <SvgIcon
                      icon-name="minus"
                      icon-class="cal-icon"
                      @click=" calQuantity(-1,item.quantity,item.cartItemId)"
                    />
                    <input
                      type="number"
                      v-model="item.quantity"
                      @change="changeItemQuantityNum"
                    >
                    <SvgIcon
                      icon-name="plus"
                      icon-class="cal-icon"
                      @click=" calQuantity(1,item.quantity,item.cartItemId)"
                    />
                  </div>
                </td>
                <td class="product-subtotal">
                  NT${{ item.price*item.discount*item.quantity }}
                </td>
              </tr>
            </tbody>
          </table>
          <div class="updateCart">
            <div class="cartCoupon">
              <input
                type="text"
                placeholder="輸入優惠碼"
              >
              <button>
                使用
              </button>
            </div>
            <button class="button">
              更新購物車
            </button>
          </div>
        </div>
        <div class="cartProductRecommend">
          <h4>你可能會有興趣...</h4>
          <ul>
            <li>
              <div class="productRecommend-img">
                <SvgIcon
                  icon-name="heart"
                  icon-class="wish-icon"
                />
                <a href="">
                  <img
                    :src="require('@/assets/images/coffeeDescription/pink/smallpinkcoffee0.png')"
                    alt=""
                    class="product-img"
                  >
                </a>
              </div>
              <h4 class="productRecommend-price">
                NT$520
              </h4>
              <div class="addCart">
                <a
                  class="check-btn"
                  href=""
                >加入購物車</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="cartTotalPrice">
        <h3 class="cartTotalPrice-title">
          總計
        </h3>
        <div class="cartTotalPrice-container">
          <div class="shippingOptions">
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
          <div class="totalPrice">
            <h4>全部金額</h4>
            <h3>NT${{ cartPriceSum }}</h3>
          </div>
          <div class="checkCart">
            <router-link
              to="/checkout"
              class="check-btn"
              @click="setCartOder"
            >
              前往結賬
            </router-link>
          </div>
          <img
            :src="require('@/assets/images/pay.svg')"
            alt=""
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
      const orderList = cartList.value
      const totalPrice = cartPriceSum.value
      return store.dispatch('Oder/setCartOder', { orderList, totalPrice })
    }
    return {
      cartList,
      cartPriceSum,
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
