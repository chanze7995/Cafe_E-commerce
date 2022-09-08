<template>
  <div class="product-modal__container">
    <router-link
      :to="{
        name:'ProductList',
      }"
      class="product-modal--close"
    />
    <div class="product-modal">
      <div
        v-show="isImageShow"
        class="product-modal--close product-modal__background--close"
        @click="imageShowToggle()"
      />
      <div :class="['product-modal__background',{'product-modal__background--show':isImageShow}]">
        <div
          class="product-modal__color"
          :style="{'--productInfoColor':productCardColor}"
        />
        <div
          class="product-modal__return-btn"
          @click="imageShowToggle()"
        >
          <SvgIcon
            icon-name="return"
            icon-class="symbol-icon"
          />
        </div>
        <h1 class="product-modal__logo-name">
          Caffeine With Mike
        </h1>
        <img
          :src="currentProductInfo.product_imgI"
          alt=""
          :class="['product-modal__img', { 'product-modal__img__coffee-beans': isCoffeeBeansGroup}]"
        >
      </div>
      <div class="product-modal__content">
        <div class="product-modal__btn__container">
          <div
            @click="imageShowToggle()"
            class="product-modal__img-close-btn"
          >
            <SvgIcon
              icon-name="import"
              icon-class="symbol-icon"
            />
            <p>查看商品</p>
          </div>
          <div class="product-modal__close-btn">
            <router-link
              :to="{
                name:'ProductList',
              }"
            >
              <SvgIcon
                icon-name="close"
                icon-class="symbol-icon"
              />
            </router-link>
          </div>
        </div>
        <div class="product-modal__title product-modal__item">
          <h3 class="product-modal__title__brand">
            {{ currentProductInfo.brand }}
          </h3>
          <h2 class="product-modal__title__name">
            {{ currentProductInfo.name }}
          </h2>
        </div>
        <div class="product-modal__info product-modal__item">
          <h4 class="product-modal__item-title">
            商品資訊
          </h4>
          <p class="product-modal__description">
            {{ currentProductInfo.description }}
          </p>
        </div>
        <div class="product-modal__select">
          <div
            v-if="isCoffeeBeansGroup"
            class="product-modal__coffee-only"
          >
            <div class="product-modal__option product-modal__item">
              <h4 class="product-modal__item-title">
                研磨度
              </h4>
              <div class="product-modal__option__container">
                <select
                  v-model="grind"
                >
                  <option
                    v-for="option in grindSize"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="product-modal__option product-modal__item">
              <h4 class="product-modal__item-title">
                份量
              </h4>
              <div class="product-modal__option__container">
                <label
                  v-for="option in weightSize "
                  :key="option.value"
                  class=""
                >
                  <input
                    type="radio"
                    :value="option.value"
                    :id="option.name"
                    v-model="weight"
                  >
                  <span>{{ option.name }}</span>
                </label>
              </div>
            </div>
          </div>
          <div class="product-modal__option product-modal__item">
            <h4 class="product-modal__item-title">
              數量
            </h4>
            <div class="product-modal__option__container">
              <div class="product-modal__option-quantity">
                <div
                  class="product-modal__count"
                  @click=" itemQuantityNum>1? itemQuantityNum--: itemQuantityNum=1"
                >
                  <SvgIcon
                    icon-name="minus"
                    icon-class="symbol-icon"
                  />
                </div>
                <input
                  class="product-modal__value"
                  type="number"
                  v-model="itemQuantityNum"
                  @change="changeItemQuantityNum"
                >
                <div
                  class="product-modal__count"
                  @click=" itemQuantityNum++"
                >
                  <SvgIcon
                    icon-name="plus"
                    icon-class="symbol-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="product-modal__checkout">
          <div
            href="#"
            class="product-modal__cart-btn"
            @click="addShopCart"
          >
            <SvgIcon
              icon-name="cart"
              icon-class="symbol-icon"
            />
            <p>加入購物車</p>
          </div>
          <div class="product-modal__price">
            <h1>{{ sumPrice }}元</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import Big from 'big.js'

export default {
  props: {
    group: {
      type: String,
      default: ''
    },
    docId: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const setCurrentProductInfo = () => {
      const docId = route.params.docId
      store.dispatch('Product/setCurrentProductArray', docId)
    }
    const isImageShow = ref(false)
    const imageShowToggle = () => {
      isImageShow.value = !isImageShow.value
    }
    // 商品資料
    const currentProductInfo = computed(() => {
      console.log('?', store.getters['Product/currentProductArray'][0])
      return store.getters['Product/currentProductArray'][0]
    })
    const productCardColor = computed(() => {
      return currentProductInfo.value.color === undefined ? '#df9c3a' : currentProductInfo.value.color
    })
    const isCoffeeBeansGroup = computed(() => {
      return currentProductInfo.value.mainGroupName === 'coffeeBeans'
    })
    const grind = ref(0)
    const grindSize = reactive([
      {
        name: '原豆',
        value: 0
      },
      {
        name: '細研磨（義式咖啡機、愛壓樂）',
        value: 1
      },
      {
        name: '中細研磨（摩卡壺）',
        value: 2
      },
      {
        name: '中研磨（美式咖啡機、虹吸壺）',
        value: 3
      },
      {
        name: '中粗研磨（手沖壺）',
        value: 4
      },
      {
        name: '粗研磨（法式濾壓壺、冰滴）',
        value: 5
      }
    ])
    const weight = ref(1)
    const weightSize = reactive([
      {
        name: '250g',
        value: 1
      },
      {
        name: '500g',
        value: 1.9
      },
      {
        name: '1000g',
        value: 2.7
      }
    ])
    const itemQuantityNum = ref(1)
    // 商品總價
    const sumPrice = computed(() => {
      const itemWeight = new Big(weight.value)
      const itemQuantity = new Big(itemQuantityNum.value)
      const currentProductPrice = new Big(currentProductInfo.value.price)
      const currentProductDiscount = new Big(currentProductInfo.value.discount)
      const total = Math.round(itemWeight.times(itemQuantity).times(currentProductPrice).times(currentProductDiscount))
      return total
    })
    // 檢查用戶輸入
    const changeItemQuantityNum = (e) => {
      const value = e.target.value * 1
      if (isNaN(value) || value < 1) {
        itemQuantityNum.value = 1
      } else {
        itemQuantityNum.value = parseInt(value)
      }
    }
    // 加入購物車
    const addShopCart = () => {
      const setCartItemName = () => {
        if (isCoffeeBeansGroup.value) {
          const clickedGrind = grindSize.filter((item) => {
            return item.value === grind.value
          })[0].name
          const clickedWeight = weightSize.filter((item) => {
            return item.value === weight.value
          })[0].name
          return `${currentProductInfo.value.name}-${clickedGrind}-${clickedWeight}`
        } else {
          return currentProductInfo.value.name
        }
      }
      console.log(setCartItemName())
      const cartItem = {
        id: route.params.docId,
        cartItemId: `${route.params.docId}${grind.value}${weight.value}`,
        productId: currentProductInfo.value.id,
        brand: currentProductInfo.value.brand,
        name: setCartItemName(),
        price: currentProductInfo.value.price,
        discount: currentProductInfo.value.discount,
        grind: grind.value,
        weight: weight.value,
        quantity: itemQuantityNum.value,
        product_imgI: currentProductInfo.value.product_imgI
      }
      console.log(cartItem)
      store.dispatch('Cart/addCartItem', cartItem)
      router.push({ name: 'success' })
    }
    setCurrentProductInfo()
    return {
      props,
      isImageShow,
      imageShowToggle,
      currentProductInfo,
      productCardColor,
      isCoffeeBeansGroup,
      grind,
      grindSize,
      weight,
      weightSize,
      itemQuantityNum,
      changeItemQuantityNum,
      addShopCart,
      sumPrice
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/components/_productCard.scss';
</style>
