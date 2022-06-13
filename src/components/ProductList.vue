<template>
  <div>
    <div class="productList">
      <div class="productList__display">
        <div
          class="productBox"
          v-for="item in clickedProductGroupData"
          :key="item.docId"
        >
          <div class="productBox__img">
            <div
              class="productBox__discountLabel"
              v-if="item.isDiscount"
            >
              -{{ 100-item.discount*100 }}%
            </div>
            <div class="product-img">
              <img
                :src="item.product_imgI"
                alt=""
                class="productBox__productImg"
              >
            </div>
            <ul class="productBox__option">
              <li>
                <div data-tip="加入購物車">
                  <SvgIcon
                    icon-name="cart"
                    icon-class="productBox__option__icon"
                  />
                </div>
              </li>
              <li>
                <div data-tip="喜歡">
                  <SvgIcon
                    icon-name="heart"
                    icon-class="productBox__option__icon"
                  />
                </div>
              </li>
              <li>
                <router-link
                  :to="{
                    name:'ProductCard',
                    params:{
                      group:item.mainGroupName,
                      id:item.id
                    }}"
                  data-tip="了解更多"
                  @click="showProductCard(),getClickedProductId(item.id)"
                >
                  <SvgIcon
                    icon-name="search-alt"
                    icon-class="productBox__option__icon"
                  />
                </router-link>
              </li>
            </ul>
          </div>
          <div class="productBox__content">
            <div class="productBox__content__Name">
              <h5>{{ item.brand }}</h5>
              <h4>{{ item.name }}</h4>
            </div>
            <div class="productBox__content__Price">
              <div :class="['productBox__content__Price__original',{'productBox__content__Price--discount':item.isDiscount}]">
                定價：{{ item.price }}元
              </div>
              <div
                class="productBox__content__Price__discount"
                v-if="item.isDiscount"
              >
                特價：{{ Math.round(item.price*item.discount) }}元
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  props: {
    productData: {
      type: Array,
      default: () => []
    },
    group: {
      type: String,
      default: ''
    }
  },
  setup (props, { emit }) {
    const clickedProductGroupData = computed(() => {
      return props.productData.filter((product) => {
        if (props.group === 'coffeeBeans') {
          return product.mainGroupName === 'coffeeBeans'
        }
        if (props.group === 'accessories') {
          return product.mainGroupName === 'accessories'
        }
        return product
      })
    })
    // 點選的商品資料
    const getClickedProductId = (id) => {
      emit('clicked-product-id', id)
    }
    const isProductCardOpen = ref(false)
    const showProductCard = () => {
      isProductCardOpen.value = !isProductCardOpen.value
      emit('show-product-card', isProductCardOpen.value)
    }
    console.log('@', props.productData)
    return {
      props,
      clickedProductGroupData,
      getClickedProductId,
      showProductCard
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/components/_productList.scss';
</style>
