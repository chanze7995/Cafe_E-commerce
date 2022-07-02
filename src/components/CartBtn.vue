<template>
  <div class="cartBtnContainer">
    <div class="rotate">
      <div class="cartBtn-title">
        <h4>購物車 (4)</h4>
      </div>
      <ul class="cartItemContainer">
        <li class="cartItem">
          <a href="">
            <img
              :src="require('@/assets/images/coffeeDescription/pink/smallpinkcoffee0.png')"
              alt=""
              class="cartItem-img"
            >
            <div class="cartItem-name">
              好好喝咖啡
            </div>
          </a>
          <div class="cartItem-Price">
            <div>
              1
            </div>
            <div class="times">
              ×
            </div>
            <div>
              $15
            </div>
          </div>
        </li>
        <li class="totalPrice">
          <div>
            總和
          </div>
          <div>
            $15
          </div>
        </li>
      </ul>
      <div class="btnContainer">
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
            4
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart'
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/components/_cartBtn.scss';
</style>
