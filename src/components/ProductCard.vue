<template>
  <div class="productCardContainer">
    <div class="productCard">
      <div class="productCard__background">
        <div class="colorCard" />
        <div v-if="isCoffeeBeansGroup">
          <h1 class="logoName">
            Caffeine With Mike
          </h1>
        </div>
        <div class="share">
          <SvgIcon
            icon-name="share"
            icon-class="shareIcon"
          />
        </div>
        <img
          :src="currentProductInfo.product_imgI"
          alt=""
          :class="['product-img', { 'product-img-coffeeBeans': isCoffeeBeansGroup}]"
        >
      </div>
      <div class="productCard__info">
        <div class="productCard-closeBtn">
          <router-link
            :to="{
              name:'ProductList',
            }"
          >
            <SvgIcon
              icon-name="close"
              icon-class="closeIcon"
            />
          </router-link>
        </div>
        <div class="productCard__info__title">
          <h3 class="product-brand">
            {{ currentProductInfo.brand }}
          </h3>
          <h2 class="product-name">
            {{ currentProductInfo.name }}
          </h2>
        </div>
        <div class="productCard__info__description">
          <h3 class="title">
            商品資訊
          </h3>
          <p class="text">
            {{ currentProductInfo.description }}
          </p>
        </div>
        <div
          v-if="isCoffeeBeansGroup"
          class="coffee"
        >
          <div class="productCard__info__size">
            <h4 class="title">
              研磨度
            </h4>
            <div class="sizeContainer">
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
          <div class="productCard__info__size">
            <h4 class="title">
              份量
            </h4>
            <div class="sizeContainer">
              <label
                v-for="option in weightSize "
                :key="option.value"
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
        <div class="productCard__info__size">
          <h4 class="title">
            數量
          </h4>
          <div class="sizeContainer">
            <div class="quantity">
              <div
                class="symbol"
                @click=" itemQuantityNum>1? itemQuantityNum--: itemQuantityNum=1"
              >
                <SvgIcon
                  icon-name="minus"
                  icon-class="symbolIcon"
                />
              </div>
              <input
                class="value"
                type="number"
                v-model="itemQuantityNum"
                @change="changeItemQuantityNum"
              >
              <div
                class="symbol"
                @click=" itemQuantityNum++"
              >
                <SvgIcon
                  icon-name="plus"
                  icon-class="symbolIcon"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="productCard__info__price">
          <div
            href="#"
            class="buy"
            @click="addShopCart"
          >
            <SvgIcon
              icon-name="cart"
              icon-class="buyIcon"
            />
            <p>加入購物車</p>
          </div>
          <div class="price">
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
      store.dispatch('setCurrentProductArray', docId)
    }
    // 商品資料
    const currentProductInfo = computed(() => {
      // console.log(store.getters.currentProductArray[0])
      return store.getters.currentProductArray[0]
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
      router.push({ name: 'AddCartSuccess' })
    }
    setCurrentProductInfo()
    return {
      props,
      currentProductInfo,
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
