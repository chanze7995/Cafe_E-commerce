<template>
  <div>
    <router-view />
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
                <router-link
                  :to="{
                    name:'ProductCard',
                    params:{
                      docId:item.docId
                    }}"
                  data-tip="加入購物車"
                >
                  <SvgIcon
                    icon-name="cart"
                    icon-class="productBox__option__icon"
                  />
                </router-link>
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
                      docId:item.docId
                    }}"
                  data-tip="了解更多"
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
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  props: {
    group: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const store = useStore()
    const productData = computed(() => {
      return store.getters.productData
    })
    const clickedProductGroupData = computed(() => {
      return productData.value.filter((product) => {
        if (props.group === 'coffeeBeans') {
          return product.mainGroupName === 'coffeeBeans'
        }
        if (props.group === 'accessories') {
          return product.mainGroupName === 'accessories'
        }
        return product
      })
    })
    return {
      props,
      productData,
      clickedProductGroupData
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/components/_productList.scss';
</style>
