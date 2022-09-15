<template>
  <div>
    <section class="home grid">
      <div class="home__container">
        <div class="home__content">
          <h1 class="home__title">
            咖啡<span>與</span>你的故事
          </h1>
          <p class="home__description">
            選擇您最喜歡的咖啡並享用
          </p>
          <div class="home__data">
            <div class="home__data-group">
              <h2 class="home__data-number">
                110k
              </h2>
              <h3 class="home__data-title">
                評價
              </h3>
              <p class="home__data-description">
                來自信任我們的各種客戶推薦。
              </p>
            </div>

            <div class="home__data-group">
              <h2 class="home__data-number">
                9+
              </h2>
              <h3 class="home__data-title">
                獨家商品
              </h3>
              <p class="home__data-description">
                使用優質咖啡豆進行專業製作
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        class="home__img"
        src="@/assets/images/homePage/coffeeDoddle.svg"
        alt=""
      >
    </section>
    <div class="specialty section container">
      <div class="specialty__container">
        <div class="specialty__box">
          <h2 class="section__title">
            優質的特色咖啡，讓您心情愉悅，<span class="section__title--newline">使您提振精神！</span>
          </h2>
          <div>
            <router-link
              to="/shop"
              class="button specialty__button"
            >
              了解更多
            </router-link>
          </div>
        </div>
        <div class="specialty__category">
          <div class="specialty__group specialty__line">
            <img
              src="@/assets/images/homePage/specialty1.png"
              alt=""
              class="specialty__img"
            >
            <h3 class="specialty__title">
              選擇咖啡
            </h3>
            <p class="specialty__description">
              我們選擇最好的優質咖啡，以獲得真正的味道。
            </p>
          </div>
          <div class="specialty__group specialty__line">
            <img
              src="@/assets/images/homePage/specialty2.png"
              alt=""
              class="specialty__img"
            >
            <h3 class="specialty__title">
              優質設備
            </h3>
            <p class="specialty__description">
              適用適合的器材，萃取咖啡
            </p>
          </div>
          <div class="specialty__group">
            <img
              src="@/assets/images/homePage/specialty3.png"
              alt=""
              class="specialty__img"
            >
            <h3 class="specialty__title">
              在家享受
            </h3>
            <p class="specialty__description">
              在舒適的家中享受完美的搭配
            </p>
          </div>
        </div>
      </div>
    </div>
    <section class="products section">
      <div class="products__container container">
        <h2 class="section__title">
          選擇我們最棒的商品
        </h2>
        <ul class="products__filters">
          <li
            class="products__item products__line"
            @click="filterProducts('newCoffeeBeans')"
          >
            <h3 class="products__title">
              新品<span class="products__title--newline">咖啡豆</span>
            </h3>
            <span class="products__stock">{{ newCoffeeBeansArray.length }}個產品</span>
          </li>
          <li
            class="products__item products__line"
            @click="filterProducts('bestSellerAccessories')"
          >
            <h3 class="products__title">
              熱賣<span class="products__title--newline">器具</span>
            </h3>
            <span class="products__stock">5個商品</span>
          </li>
          <li
            class="products__item"
            @click="filterProducts('onSaleProducts')"
          >
            <h3 class="products__title">
              特價中
            </h3>
            <span class="products__stock">{{ onSaleProductsArray.length }}個商品</span>
          </li>
        </ul>
        <swiper
          :loop="true"
          navigation
          :pagination="{ clickable: true }"
          :modules="modules"
          :breakpoints="swiperBreakpoints"
          @swiper="onSwiper"
          class="filterProducts-swiper"
        >
          <swiper-slide
            v-for="item in filterProductsArray.value"
            :key="item.id"
            class="filterProducts-slide"
          >
            <div>
              <article class="products__card">
                <div class="products__shape">
                  <img
                    :src="item.product_imgI"
                    alt=""
                    class="products__img"
                  >
                </div>
                <div class="products__content">
                  <h2
                    class="products__price--discount"
                    v-if="item.isDiscount"
                  >
                    ${{ Math.ceil(item.price*item.discount) }}元
                  </h2>
                  <h2
                    v-else
                    class="products__price"
                  >
                    ${{ item.price }}
                  </h2>

                  <h3 class="products__name">
                    <span class="products__brand">{{ item.brand }}</span><br>
                    {{ item.name }}
                  </h3>
                  <router-link
                    :to="{
                      name:'ProductCard',
                      params:{
                        docId:item.docId,
                        group: item.mainGroupName
                      }}"
                  >
                    <button class="button products__button">
                      <SvgIcon
                        icon-name="bag"
                        icon-class="symbol-icon"
                      />
                    </button>
                  </router-link>
                </div>
              </article>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <section class="subscription section">
      <div class="subscription__container container">
        <h2 class="section__title">
          提供您喝新鮮中的新鮮
        </h2>
        <div class="subscription__content grid">
          <div class="subscription__images">
            <img
              src="@/assets/images/homePage/subscription1.png"
              alt=""
              class="subscription__img--big"
            >
            <img
              src="@/assets/images/homePage/subscription2.png"
              alt=""
              class="subscription__img--small"
            >
          </div>
          <div class="subscription__data">
            <h1 class="subscription__title">
              訂閱咖啡
            </h1>
            <h2 class="subscription__price">
              $499+
            </h2>
            <span class="subscription__special">超值價格</span>
            <p class="subscription__description">
              我們創建了一個具有個性化的咖啡訂閱服務。您可以定制計劃的每個環節，以符合您所有條件，達到真正的訂閱。無論您是每週三需要全豆還是每月一次中度烘焙，您都可以自定義每個階段來製作滿足您需求的訂製咖啡！
            </p>
            <div>
              <router-link
                to="/shop"
                class="button"
              >
                了解更多
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="media section">
      <div class="media__container container">
        <div class="media__main-block">
          <div class="media__content">
            <img
              src="@/assets/images/homePage/ig-logo.png"
              alt=""
              class="media__logo"
            >
            <h1 class="media__title">
              提振精神、找尋生活中<span class="media__title--newline">的不一樣</span>
            </h1>
            <h2 class="media__description">
              關注我們，追蹤最新活動、產品等。
            </h2>
          </div>
          <img
            src="@/assets/images/homePage/main.jpg"
            alt=""
            class="media__main-block__img"
          >
        </div>
        <ul class="media__sub-block grid">
          <li class="blockItem">
            <img
              src="@/assets/images/homePage/sub1.jpg"
              alt=""
              class="media__sub-block__img"
            >
          </li>
          <li class="blockItem">
            <img
              src="@/assets/images/homePage/sub2.jpg"
              alt=""
              class="media__sub-block__img"
            >
          </li>
          <li class="blockItem">
            <img
              src="@/assets/images/homePage/sub3.jpg"
              alt=""
              class="media__sub-block__img"
            >
          </li>
          <li class="blockItem">
            <img
              src="@/assets/images/homePage/sub4.jpg"
              alt=""
              class="media__sub-block__img"
            >
          </li>
          <li class="blockItem">
            <img
              src="@/assets/images/homePage/sub5.jpg"
              alt=""
              class="media__sub-block__img"
            >
          </li>
          <li class="blockItem">
            <img
              src="@/assets/images/homePage/sub6.jpg"
              alt=""
              class="media__sub-block__img"
            >
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, watch, nextTick, reactive } from 'vue'
import { useStore } from 'vuex'

import SwiperCore, { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue'

import 'swiper/swiper.scss'
import 'swiper/modules/navigation/navigation.scss'
import 'swiper/modules/pagination/pagination.scss'

SwiperCore.use([Navigation, Pagination, A11y])

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    const store = useStore()
    const onSwiper = (swiper) => {
      watch(filterProductsArray, () => {
        nextTick(() => {
          swiper.update()
        })
      })
    }
    const swiperBreakpoints = reactive({
      992: {
        slidesPerView: 3,
        spaceBetween: 50
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      576: {
        slidesPerView: 2,
        // centeredSlides: true,
        spaceBetween: 30
      }
    })
    const newCoffeeBeansArray = computed(() => {
      return store.getters['Product/newCoffeeBeansArray']
    })
    const bestSellerAccessoriesArray = computed(() => {
      return store.getters['Product/bestSellerAccessoriesArray']
    })
    const onSaleProductsArray = computed(() => {
      return store.getters['Product/onSaleProductsArray']
    })
    const filterProductsArray = reactive([])
    const filterProducts = (type) => {
      switch (type) {
        case 'bestSellerAccessories' : {
          filterProductsArray.value = bestSellerAccessoriesArray.value
          break
        }
        case 'onSaleProducts' : {
          filterProductsArray.value = onSaleProductsArray.value
          break
        }
        default: {
          filterProductsArray.value = newCoffeeBeansArray.value
        }
      }
    }
    filterProducts()
    return {
      onSwiper,
      swiperBreakpoints,
      modules: [Navigation, Pagination, A11y],
      filterProducts,
      filterProductsArray,
      newCoffeeBeansArray,
      bestSellerAccessoriesArray,
      onSaleProductsArray
    }
  }
}
</script>

<style scoped lang="scss" >
@import "@/assets/scss/views/_home.scss";
</style>
