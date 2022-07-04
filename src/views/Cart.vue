<template>
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
            <tr>
              <td class="product-remove">
                <SvgIcon
                  icon-name="close"
                  icon-class="close-icon"
                />
              </td>
              <td class="product-thumbnail">
                <a href="">
                  <img
                    :src="require('@/assets/images/coffeeDescription/pink/smallpinkcoffee0.png')"
                    alt=""
                    class="product-thumbnail-img"
                  >
                </a>
              </td>
              <td class="product-name">
                <a href="">好好喝咖啡</a>
                <dl>
                  <dt />
                  <dd>全豆</dd>
                  <dt />
                  <dd>500g</dd>
                </dl>
              </td>
              <td class="product-price">
                19
              </td>
              <td class="product-quantity">
                <input type="number">
              </td>
              <td class="product-subtotal">
                NT$38
              </td>
            </tr>
            <tr>
              <td class="product-remove">
                X
              </td>
              <td class="product-thumbnail">
                <a href="">
                  <img
                    :src="require('@/assets/images/coffeeDescription/pink/smallpinkcoffee0.png')"
                    alt=""
                    class="product-thumbnail-img"
                  >
                </a>
              </td>
              <td class="product-name">
                <a href="">好好喝咖啡</a>
                <dl>
                  <dt />
                  <dd>全豆</dd>
                  <dt />
                  <dd>500g</dd>
                </dl>
              </td>
              <td class="product-price">
                19
              </td>
              <td class="product-quantity">
                <input type="number">
              </td>
              <td class="product-subtotal">
                38
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
                貨到付款: NT$30
              </label>
            </li>
          </ul>
        </div>
        <div class="totalPrice">
          <h4>全部金額</h4>
          <h3>NT$520</h3>
        </div>
        <div class="checkCart">
          <a
            class="check-btn"
            href=""
          >前往結賬</a>
        </div>
        <img
          :src="require('@/assets/images/pay.svg')"
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import '@/assets/scss/components/_cart.scss';
</style>
