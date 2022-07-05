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
              type="text"
              id="billing_phone"
            >
          </div>
          <div class="billInput">
            <label for="billing_telephone">
              市內電話 (選填)
            </label>
            <input
              required
              type="text"
              id="billing_telephone"
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
            type="text"
            id="billing_email"
          >
        </div>
        <div class="billInput">
          <label for="billing_company">
            公司發票抬頭 (選填)
          </label>
          <input
            required
            type="text"
            id="billing_company"
          >
        </div>
        <div class="billInput">
          <label for="billing_taxNumber">
            統一編號 (選填)
          </label>
          <input
            required
            type="text"
            id="billing_taxNumber"
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
              id="billing_state"
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
              id="billing_city"
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
              <tr>
                <td class="product-name">
                  日安吾愛 Bonjour, mon amour 908 g&nbsp;
                  <strong class="product-quantity">
                    ×&nbsp;1
                  </strong>
                </td>
                <td class="product-total">
                  <span class="Price-amount">
                    NT$&nbsp;1,330
                  </span>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>小計</th>
                <td>
                  <span class="Price-amount">
                    NT$&nbsp;1,330
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
                      <li>
                        <label>
                          <input
                            type="radio"
                            name="shipping_method"
                          >
                          一般宅配
                        </label>
                      </li>
                      <li>
                        <label>
                          <input
                            type="radio"
                            name="shipping_method"
                          >
                          貨到付款 : NT$30 (不支援離島地區)

                        </label>
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
                      NT$ 1,360
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
            <a class="check-btn">
              下單購買
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import '@/assets/scss/views/_checkout.scss';
</style>
