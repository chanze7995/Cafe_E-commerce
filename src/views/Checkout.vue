<template>
  <div class="checkout__container">
    <div class="header-background" />
    <nav class="checkout__nav">
      <router-link
        to="/cart"
        class="checkout__nav__item checkout__nav__item--active"
      >
        購物車
      </router-link>
      <SvgIcon
        icon-name="chevrons-right"
        icon-class="symbol-icon"
      />
      <router-link
        to="/checkout"
        class="checkout__nav__item checkout__nav__item--active checkout__nav__item--current"
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
    <form @submit.prevent="submitOder">
      <div class="bill__container container">
        <div class="bill-info">
          <h3 class="bill__title">
            帳單資訊
          </h3>
          <div class="bill__input">
            <label for="billing-name">
              姓名&nbsp;
              <abbr
                title="必要欄位"
              >*</abbr>
            </label>
            <input
              required
              type="text"
              id="billing-name"
              v-model="billInfo.name"
            >
          </div>
          <div class="bill__item__container">
            <div class="bill__input">
              <label for="billing-phone">
                聯絡手機&nbsp;
                <abbr
                  title="必要欄位"
                >*</abbr>
              </label>
              <input
                required
                type="number"
                id="billing-phone"
                v-model="billInfo.phone"
              >
            </div>
            <div class="bill__input">
              <label for="billing-telephone">
                市內電話 (選填)
              </label>
              <input
                required
                type="number"
                id="billing-telephone"
                v-model="billInfo.telephone"
              >
            </div>
          </div>
          <div class="bill__input">
            <label for="billing-email">
              電子郵件&nbsp;
              <abbr
                title="必要欄位"
              >*</abbr>
            </label>
            <input
              required
              type="email"
              id="billing-email"
              v-model="billInfo.email"
            >
          </div>
          <div class="bill__input">
            <label for="billing-company">
              公司發票抬頭 (選填)
            </label>
            <input
              type="text"
              id="billing-company"
              v-model="billInfo.company"
            >
          </div>
          <div class="bill__input">
            <label for="billing-taxNumber">
              統一編號 (選填)
            </label>
            <input
              type="text"
              id="billing-taxIdNumber"
              v-model="billInfo.taxIdNumber"
            >
          </div>
          <div class="bill__item__container">
            <div class="bill__input">
              <label for="billing-country">
                國家&nbsp;
                <abbr
                  title="必要欄位"
                >*</abbr>
              </label>
              <input
                required
                type="text"
                id="billing-country"
                v-model="billInfo.country"
              >
            </div>
            <div class="bill__input">
              <label for="billing-state">
                縣 / 市&nbsp;
                <abbr
                  title="必要欄位"
                >*</abbr>
              </label>
              <input
                required
                type="text"
                id="billing-city"
                v-model="billInfo.city"
              >
            </div>
            <div class="bill__input">
              <label for="billing-city">
                鄉鎮市區&nbsp;
                <abbr
                  title="必要欄位"
                >*</abbr>
              </label>
              <input
                required
                type="text"
                id="billing-district"
                v-model="billInfo.district"
              >
            </div>
          </div>
          <div class="bill__input">
            <label for="billing-address">
              地址&nbsp;
              <abbr
                title="必要欄位"
              >*</abbr>
            </label>
            <input
              required
              type="text"
              id="billing-address"
              v-model="billInfo.address"
            >
          </div>
        </div>
        <div class="order-review">
          <div class="order-review__container">
            <h3 class="order-review__title">
              您的訂單
            </h3>
            <table class="order-review__table">
              <thead>
                <tr>
                  <th class="order-review__item--front">
                    商品
                  </th>
                  <th class="order-review__item--hind">
                    小計
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in cartList"
                  :key="item.cartItemId"
                >
                  <td class="order-review__item--front">
                    <div>
                      {{ item.name }}&nbsp;
                      <strong class="product-quantity">
                        ×&nbsp;{{ item.quantity }}
                      </strong>
                    </div>
                  </td>
                  <td class="order-review__item--hind">
                    <div>
                      <span class="Price-amount">
                        NT$&nbsp;{{ item.price * item.quantity }}
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th class="order-review__item--front">
                    <h5>小計</h5>
                  </th>
                  <td class="order-review__item--hind">
                    <h5>NT$&nbsp;{{ cartPriceSum }}</h5>
                  </td>
                </tr>
                <tr>
                  <td
                    class="order-review__item--front"
                    colspan="2"
                  >
                    <div class="order-review__shipping">
                      <h5>運送方式：</h5>
                      <div v-if="billInfo.shippingMethod ==='HD'">
                        一般宅配
                      </div>
                      <div v-if="billInfo.shippingMethod ==='COD'">
                        貨到付款 NT$30 (不支援離島地區)
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="order-review__item--front order-review__total">
                    <h4>
                      總計
                    </h4>
                  </th>
                  <td class="order-review__item--hind">
                    <h4>
                      NT$&nbsp;{{ billInfo.totalPrice }}
                    </h4>
                  </td>
                </tr>
              </tfoot>
            </table>
            <img
              v-if="billInfo.shippingMethod ==='HD'"
              :src="require('@/assets/images/pay.svg')"
              alt=""
              class="payment__img"
            >
            <div class="payment__container">
              <div
                v-if="billInfo.shippingMethod ==='HD'"
              >
                付款方式：信用卡 (一次付清)
              </div>
              <div v-if="billInfo.shippingMethod ==='COD'">
                貨到付款：收到貨時以現金付款
              </div>
            </div>
            <div class="checkbox__container">
              <label class="checkbox">
                <input
                  required
                  type="checkbox"
                  class=" input-checkbox"
                  name="terms"
                >
                <span class="conditions-checkbox-text">我已閱讀並同意
                  <a
                    href=""
                    class="conditions-link"
                    target="_blank"
                  >
                    服務條款
                  </a>
                </span>
                &nbsp;
                <span class="required">*</span>
              </label>
            </div>
            <button
              class="button"
              type="submit"
            >
              下單購買
            </button>
          </div>
        </div>
      </div>
    </form>
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
      console.log(store.getters['Cart/cartPriceSum'])
      return store.getters['Cart/cartPriceSum']
    })
    const billInfo = computed(() => {
      return store.getters['Oder/billInfo']
    })
    const submitOder = () => {
      const timeStamp = Date.now()
      store.dispatch('Oder/submitOder', timeStamp)
    }
    return {
      billInfo,
      cartList,
      cartPriceSum,
      submitOder
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/views/_checkout.scss';
</style>
