<template>
  <div class="checkoutContainer">
    <nav class="checkoutNav">
      <router-link
        to="/cart"
        class="nav-active"
      >
        購物車
      </router-link>
      <SvgIcon
        icon-name="chevrons-right"
        icon-class="checkoutNav-icon"
      />
      <router-link
        to="/checkout"
        class="nav-active current"
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
    <form @submit.prevent="submitOder">
      <div class="billContainer">
        <div class="billDetail">
          <h3>帳單資訊</h3>
          <div class="billInput">
            <label for="billing_name">
              姓名&nbsp;
              <abbr
                class="required"
                title="必要欄位"
              >*</abbr>
            </label>
            <input
              required
              type="text"
              id="billing_name"
              v-model="billInfo.name"
            >
          </div>
          <div class="phoneContainer">
            <div class="billInput">
              <label for="billing_phone">
                聯絡手機&nbsp;
                <abbr
                  class="required"
                  title="必要欄位"
                >*</abbr>
              </label>
              <input
                required
                type="number"
                id="billing_phone"
                v-model="billInfo.phone"
              >
            </div>
            <div class="billInput">
              <label for="billing_telephone">
                市內電話 (選填)
              </label>
              <input
                required
                type="number"
                id="billing_telephone"
                v-model="billInfo.telephone"
              >
            </div>
          </div>
          <div class="billInput">
            <label for="billing_email">
              電子郵件&nbsp;
              <abbr
                class="required"
                title="必要欄位"
              >*</abbr>
            </label>
            <input
              required
              type="email"
              id="billing_email"
              v-model="billInfo.email"
            >
          </div>
          <div class="billInput">
            <label for="billing_company">
              公司發票抬頭 (選填)
            </label>
            <input
              type="text"
              id="billing_company"
              v-model="billInfo.company"
            >
          </div>
          <div class="billInput">
            <label for="billing_taxNumber">
              統一編號 (選填)
            </label>
            <input
              type="text"
              id="billing_taxIdNumber"
              v-model="billInfo.taxIdNumber"
            >
          </div>
          <div class="addressContainer">
            <div class="billInput">
              <label for="billing_country">
                國家&nbsp;
                <abbr
                  class="required"
                  title="必要欄位"
                >*</abbr>
              </label>
              <input
                required
                type="text"
                id="billing_country"
                v-model="billInfo.country"
              >
            </div>
            <div class="billInput">
              <label for="billing_state">
                縣 / 市&nbsp;
                <abbr
                  class="required"
                  title="必要欄位"
                >*</abbr>
              </label>
              <input
                required
                type="text"
                id="billing_city"
                v-model="billInfo.city"
              >
            </div>
            <div class="billInput">
              <label for="billing_city">
                鄉鎮市區&nbsp;
                <abbr
                  class="required"
                  title="必要欄位"
                >*</abbr>
              </label>
              <input
                required
                type="text"
                id="billing_district"
                v-model="billInfo.district"
              >
            </div>
          </div>
          <div class="billInput">
            <label for="billing_address">
              地址&nbsp;
              <abbr
                class="required"
                title="必要欄位"
              >*</abbr>
            </label>
            <input
              required
              type="text"
              id="billing_address"
              v-model="billInfo.address"
            >
          </div>
        </div>
        <div class="orderReview">
          <div class="orderReview-border">
            <h3>您的訂單</h3>
            <table class="orderReview-table">
              <thead>
                <tr>
                  <th class="product-name">
                    商品
                  </th>
                  <th class="product-total">
                    小計
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in cartList"
                  :key="item.cartItemId"
                >
                  <td class="product-name">
                    <div>
                      {{ item.name }}&nbsp;
                      <strong class="product-quantity">
                        ×&nbsp;{{ item.quantity }}
                      </strong>
                    </div>
                  </td>
                  <td class="product-total">
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
                  <th>小計</th>
                  <td>
                    <span class="Price-amount">
                      NT$&nbsp;{{ cartPriceSum }}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td
                    class="shipping__inner"
                    colspan="2"
                  >
                    <div class="shippingOptions">
                      <h5>運送方式</h5>
                      <ul>
                        <li v-if="billInfo.shippingMethod ==='HD'">
                          一般宅配
                        </li>
                        <li v-if="billInfo.shippingMethod ==='COD'">
                          貨到付款 : NT$30 (不支援離島地區)
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="order-total">
                    <h4>
                      總計
                    </h4>
                  </th>
                  <td>
                    <strong>
                      <h4 class="Price-amount amount">
                        NT$ {{ billInfo.totalPrice }}
                      </h4>
                    </strong>
                  </td>
                </tr>
              </tfoot>
            </table>
            <img
              :src="require('@/assets/images/pay.svg')"
              alt=""
            >
            <div class="payment_box">
              <div
                class="payment_method_ecpay"
                v-show="false"
              >
                付款方式 : <br>信用卡 (一次付清)
              </div>
              <div class="payment_method_ecpay">
                貨到付款 : <br>收到貨時以現金付款
              </div>
            </div>
            <div class="checkout-payment">
              <div class="checkboxContainer">
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
                class="check-btn"
                type="submit"
              >
                下單購買
              </button>
            </div>
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
