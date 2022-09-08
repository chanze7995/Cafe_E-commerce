<template>
  <div class="coffeeDescription">
    <section class="key-vision container">
      <div
        class="key-vision__background section__background"
        :style="{'--clickedFlavorColor':clickedCoffeeBeanInfo.color}"
      />
      <div class="key-vision__container  section">
        <h1 class="key-vision__title">
          {{ clickedCoffeeBeanInfo.sloganI }}
        </h1>
        <img
          :src="clickedCoffeeBeanInfo.main_img"
          alt=""
          class="key-vision__img"
        >
        <h1 class="key-vision__title">
          {{ clickedCoffeeBeanInfo.sloganII }}
        </h1>
      </div>
    </section>
    <section class="introduction section container">
      <div class="introduction__container">
        <h1 class="introduction__title section__bar">
          {{ clickedCoffeeBeanInfo.name }}
        </h1>
        <div class="introduction__content">
          <p
            class="introduction__content__description"
          >
            {{ clickedCoffeeBeanInfo.description }}
          </p>
          <p class="introduction__content__recommend">
            聽起來不錯？向下滾動閱讀更多內容。<br>新鮮烤製，提供快速和免費的一流服務。<br>售價 NTD 520 起
          </p>
        </div>
        <div class="introduction__btn__container">
          <Button
            :btn-msg="buyBtnMsg"
            class="introduction__btn"
          />
          <Button
            :btn-msg="tasteBtnMsg"
            class="introduction__btn"
          />
        </div>
      </div>
      <div
        class="introduction__img__background"
        :style="{'--clickedFlavorColor':clickedCoffeeBeanInfo.color}"
      >
        <img
          :src="clickedCoffeeBeanInfo.intro_imgI"
          alt=""
          class="introduction__img"
        >
      </div>
    </section>
    <section class="transition">
      <div class="transition__content container section__size">
        <h1 class="transition__title transition__title--front">
          手工<br>烘培
        </h1>
        <h1 class="transition__title transition__title--end">
          小批量<br>製作
        </h1>
      </div>
      <img
        :src="clickedCoffeeBeanInfo.background_imgI"
        alt=""
        class="transition__img section__background"
      >
    </section>
    <section class="description section container">
      <div class="description__container">
        <h1 class="description__title section__bar">
          告訴我更多
        </h1>
        <div class="description__list">
          <div
            v-for="item in moreInfoListMsgArr"
            :key="item.title"
            class="description__content__container"
          >
            <div class="description__content">
              <h2 class="description__content__title">
                {{ item.title }}
              </h2>
              <div
                class="description__content__icon"
                @click="item.isOpen=!item.isOpen"
              >
                <SvgIcon
                  icon-name="chevron-down"
                  icon-class="symbol-icon"
                />
              </div>
            </div>
            <transition name="description__content--fade">
              <p
                class="description__content__description"
                v-show="item.isOpen"
              >
                {{ item.description }}
              </p>
            </transition>
          </div>
        </div>
      </div>
      <div
        class="introduction__img__background"
        :style="{'--clickedFlavorColor':clickedCoffeeBeanInfo.color}"
      >
        <img
          :src="clickedCoffeeBeanInfo.intro_imgII"
          alt=""
          class="introduction__img"
        >
      </div>
    </section>
    <section class="review">
      <div class="review__content__container section__size container">
        <h1 class="review__title">
          喝過此商品的評價
        </h1>
        <p class="review__text">
          早晨來一杯暢飲。真棒！讓我似乎還在夢中。
        </p>
        <div class="review__content">
          <h2 class="review__user">
            Alice Lee
          </h2>
          <h2 class="review__contact">
            告訴我們你覺得它像的味道<br>@caffeinewithmike
          </h2>
        </div>
      </div>
      <img
        :src="clickedCoffeeBeanInfo.background_imgII"
        alt=""
        class="transition__img section__background"
      >
    </section>
    <section class="purchase container">
      <div class="purchase__container purchase__container--bounce">
        <SvgIcon
          icon-name="chevron-down"
          icon-class="symbol-icon"
        />
        <h1 class="purchase__title ">
          前往購買
        </h1>
      </div>
    </section>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import { computed, reactive, ref } from 'vue'
// import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
  components: {
    Button
  },
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    // 取得咖啡豆資料
    const store = useStore()
    const allCoffeeBeanInfo = computed(() => {
      console.log('~', store.getters['Product/coffeeBeanIntroData'])
      return store.getters['Product/coffeeBeanIntroData']
    })
    const setClickedCoffeeBean = computed(() => {
      console.log('!', props.name)
      console.log('!!', allCoffeeBeanInfo.value)
      console.log('!!!', allCoffeeBeanInfo.value.filter(item => item.name === props.name))
      return allCoffeeBeanInfo.value.filter(item => item.name === props.name)
    })
    const clickedCoffeeBeanInfo = setClickedCoffeeBean.value[0]
    // console.log(clickedCoffeeBeanInfo)
    const buyBtnMsg = ref('馬上購買')
    const tasteBtnMsg = ref('取得試飲')
    const moreInfoListMsgArr = reactive([
      {
        title: '口味：',
        description: `${clickedCoffeeBeanInfo.sloganI}與${clickedCoffeeBeanInfo.sloganII}`,
        isOpen: false
      },
      {
        title: '烘培：',
        description: clickedCoffeeBeanInfo.description_roasting,
        isOpen: false
      },
      {
        title: '沖煮方法：',
        description: clickedCoffeeBeanInfo.description_brew,
        isOpen: false
      },
      {
        title: '幕後花絮：',
        description: clickedCoffeeBeanInfo.description_story,
        isOpen: false
      },
      {
        title: 'SCAA杯測分數：',
        description: clickedCoffeeBeanInfo.description_score,
        isOpen: false
      },
      {
        title: '細節：',
        description: clickedCoffeeBeanInfo.description_roasting,
        isOpen: false
      },
      {
        title: '名稱從何而來？',
        description: clickedCoffeeBeanInfo.description_name,
        isOpen: false
      }
      // {
      //   title: '為什麼要在這裡購買特色咖啡？',
      //   description: clickedCoffeeBeanInfo.description_roasting
      // }
    ])

    return {
      clickedCoffeeBeanInfo,
      props,
      buyBtnMsg,
      tasteBtnMsg,
      moreInfoListMsgArr
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/views/_coffeeBeanIntro.scss';
</style>
