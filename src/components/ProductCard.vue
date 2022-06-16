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
          <div class="productCard__info__grind">
            <h4 class="title">
              研磨度
            </h4>
            <div class="sizeContainer">
              <div class="size">
                原豆
              </div>
              <div class="size">
                粗
              </div>
              <div class="size">
                細
              </div>
            </div>
          </div>
          <div class="productCard__info__size">
            <h4 class="title">
              份量
            </h4>
            <div class="sizeContainer">
              <div class="size">
                250g
              </div>
              <div class="size">
                500g
              </div>
              <div class="size">
                1kg
              </div>
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
                @click="calculate(-1)"
              >
                <SvgIcon
                  icon-name="plus"
                  icon-class="symbolIcon"
                />
              </div>
              <input
                class="value"
                type="text"
                v-model="itemQuantity"
              >
              <div
                class="symbol"
                @click="calculate(1)"
              >
                <SvgIcon
                  icon-name="minus"
                  icon-class="symbolIcon"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="productCard__info__price">
          <a
            href="#"
            class="buy"
          >
            <SvgIcon
              icon-name="cart"
              icon-class="buyIcon"
            />
            <p>加入購物車</p>
          </a>
          <div class="price">
            <h1>{{ currentProductInfo.price }}元</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

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
    const setCurrentProductInfo = () => {
      const docId = route.params.docId
      store.dispatch('setCurrentProductArray', docId)
    }
    const currentProductInfo = computed(() => {
      console.log(store.getters.currentProductArray[0])
      return store.getters.currentProductArray[0]
    })
    const isCoffeeBeansGroup = computed(() => {
      return props.group === 'coffeeBeans'
    })
    const itemQuantity = ref(1)
    setCurrentProductInfo()
    console.log(isCoffeeBeansGroup.value)
    return {
      props,
      currentProductInfo,
      isCoffeeBeansGroup,
      itemQuantity
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/components/_productCard.scss';
</style>
